import {int,
  isPresent,
  isBlank,
  Type,
  BaseException,
  StringWrapper,
  RegExpWrapper,
  isString,
  stringify} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {ListWrapper,
  List,
  MapWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {reflector} from 'angular2/src/reflection/reflection';
import {Parser,
  ProtoChangeDetector} from 'angular2/change_detection';
import {DirectiveMetadata} from '../directive_metadata';
import {CompileStep} from './compile_step';
import {CompileElement} from './compile_element';
import {CompileControl} from './compile_control';
var DOT_REGEXP = RegExpWrapper.create('\\.');
const ARIA_PREFIX = 'aria-';
var ariaSettersCache = StringMapWrapper.create();
function ariaSetterFactory(attrName) {
  var setterFn = StringMapWrapper.get(ariaSettersCache, attrName);
  if (isBlank(setterFn)) {
    setterFn = function(element, value) {
      if (isPresent(value)) {
        DOM.setAttribute(element, attrName, stringify(value));
      } else {
        DOM.removeAttribute(element, attrName);
      }
    };
    StringMapWrapper.set(ariaSettersCache, attrName, setterFn);
  }
  return setterFn;
}
Object.defineProperty(ariaSetterFactory, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
const CLASS_ATTR = 'class';
const CLASS_PREFIX = 'class.';
var classSettersCache = StringMapWrapper.create();
function classSetterFactory(className) {
  var setterFn = StringMapWrapper.get(classSettersCache, className);
  if (isBlank(setterFn)) {
    setterFn = function(element, value) {
      if (value) {
        DOM.addClass(element, className);
      } else {
        DOM.removeClass(element, className);
      }
    };
    StringMapWrapper.set(classSettersCache, className, setterFn);
  }
  return setterFn;
}
Object.defineProperty(classSetterFactory, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
const STYLE_ATTR = 'style';
const STYLE_PREFIX = 'style.';
var styleSettersCache = StringMapWrapper.create();
function styleSetterFactory(styleName, stylesuffix) {
  var cacheKey = styleName + stylesuffix;
  var setterFn = StringMapWrapper.get(styleSettersCache, cacheKey);
  if (isBlank(setterFn)) {
    setterFn = function(element, value) {
      var valAsStr;
      if (isPresent(value)) {
        valAsStr = stringify(value);
        DOM.setStyle(element, styleName, valAsStr + stylesuffix);
      } else {
        DOM.removeStyle(element, styleName);
      }
    };
    StringMapWrapper.set(classSettersCache, cacheKey, setterFn);
  }
  return setterFn;
}
Object.defineProperty(styleSetterFactory, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
const ROLE_ATTR = 'role';
function roleSetter(element, value) {
  if (isString(value)) {
    DOM.setAttribute(element, ROLE_ATTR, value);
  } else {
    DOM.removeAttribute(element, ROLE_ATTR);
    if (isPresent(value)) {
      throw new BaseException("Invalid role attribute, only string values are allowed, got '" + stringify(value) + "'");
    }
  }
}
export function isSpecialProperty(propName) {
  return StringWrapper.startsWith(propName, ARIA_PREFIX) || StringWrapper.startsWith(propName, CLASS_PREFIX) || StringWrapper.startsWith(propName, STYLE_PREFIX) || StringMapWrapper.contains(DOM.attrToPropMap, propName);
}
Object.defineProperty(isSpecialProperty, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class ElementBinderBuilder extends CompileStep {
  constructor(parser) {
    super();
    this._parser = parser;
  }
  process(parent, current, control) {
    var elementBinder = null;
    if (current.hasBindings) {
      var protoView = current.inheritedProtoView;
      var protoInjectorWasBuilt = isBlank(parent) ? true : current.inheritedProtoElementInjector !== parent.inheritedProtoElementInjector;
      var currentProtoElementInjector = protoInjectorWasBuilt ? current.inheritedProtoElementInjector : null;
      elementBinder = protoView.bindElement(currentProtoElementInjector, current.componentDirective, current.viewportDirective);
      if (isPresent(current.textNodeBindings)) {
        this._bindTextNodes(protoView, current);
      }
      if (isPresent(current.propertyBindings)) {
        this._bindElementProperties(protoView, current);
      }
      if (isPresent(current.eventBindings)) {
        this._bindEvents(protoView, current);
      }
      var directives = current.getAllDirectives();
      this._bindDirectiveProperties(directives, current);
      this._bindDirectiveEvents(directives, current);
    } else if (isPresent(parent)) {
      elementBinder = parent.inheritedElementBinder;
    }
    current.inheritedElementBinder = elementBinder;
  }
  _bindTextNodes(protoView, compileElement) {
    MapWrapper.forEach(compileElement.textNodeBindings, (expression, indexInParent) => {
      protoView.bindTextNode(indexInParent, expression);
    });
  }
  _bindElementProperties(protoView, compileElement) {
    MapWrapper.forEach(compileElement.propertyBindings, (expression, property) => {
      var setterFn,
          styleParts,
          styleSuffix;
      if (StringWrapper.startsWith(property, ARIA_PREFIX)) {
        setterFn = ariaSetterFactory(property);
      } else if (StringWrapper.equals(property, ROLE_ATTR)) {
        setterFn = roleSetter;
      } else if (StringWrapper.startsWith(property, CLASS_PREFIX)) {
        setterFn = classSetterFactory(StringWrapper.substring(property, CLASS_PREFIX.length));
      } else if (StringWrapper.startsWith(property, STYLE_PREFIX)) {
        styleParts = StringWrapper.split(property, DOT_REGEXP);
        styleSuffix = styleParts.length > 2 ? ListWrapper.get(styleParts, 2) : '';
        setterFn = styleSetterFactory(ListWrapper.get(styleParts, 1), styleSuffix);
      } else {
        property = this._resolvePropertyName(property);
        if (StringWrapper.equals(property, 'innerHTML')) {
          setterFn = (element, value) => DOM.setInnerHTML(element, value);
        } else if (DOM.hasProperty(compileElement.element, property) || StringWrapper.equals(property, 'innerHtml')) {
          setterFn = reflector.setter(property);
        }
      }
      if (isPresent(setterFn)) {
        protoView.bindElementProperty(expression.ast, property, setterFn);
      }
    });
  }
  _bindEvents(protoView, compileElement) {
    MapWrapper.forEach(compileElement.eventBindings, (expression, eventName) => {
      protoView.bindEvent(eventName, expression);
    });
  }
  _bindDirectiveEvents(directives, compileElement) {
    for (var directiveIndex = 0; directiveIndex < directives.length; directiveIndex++) {
      var directive = directives[directiveIndex];
      var annotation = directive.annotation;
      if (isBlank(annotation.events))
        continue;
      var protoView = compileElement.inheritedProtoView;
      StringMapWrapper.forEach(annotation.events, (action, eventName) => {
        var expression = this._parser.parseAction(action, compileElement.elementDescription);
        protoView.bindEvent(eventName, expression, directiveIndex);
      });
    }
  }
  _bindDirectiveProperties(directives, compileElement) {
    var protoView = compileElement.inheritedProtoView;
    for (var directiveIndex = 0; directiveIndex < directives.length; directiveIndex++) {
      var directive = ListWrapper.get(directives, directiveIndex);
      var annotation = directive.annotation;
      if (isBlank(annotation.bind))
        continue;
      StringMapWrapper.forEach(annotation.bind, (bindConfig, dirProp) => {
        var pipes = this._splitBindConfig(bindConfig);
        var elProp = ListWrapper.removeAt(pipes, 0);
        var bindingAst = isPresent(compileElement.propertyBindings) ? MapWrapper.get(compileElement.propertyBindings, elProp) : null;
        if (isBlank(bindingAst)) {
          var attributeValue = MapWrapper.get(compileElement.attrs(), elProp);
          if (isPresent(attributeValue)) {
            bindingAst = this._parser.wrapLiteralPrimitive(attributeValue, compileElement.elementDescription);
          }
        }
        if (isPresent(bindingAst)) {
          var fullExpAstWithBindPipes = this._parser.addPipes(bindingAst, pipes);
          protoView.bindDirectiveProperty(directiveIndex, fullExpAstWithBindPipes, dirProp, reflector.setter(dirProp));
        }
      });
    }
  }
  _splitBindConfig(bindConfig) {
    return ListWrapper.map(bindConfig.split('|'), (s) => s.trim());
  }
  _resolvePropertyName(attrName) {
    var mappedPropName = StringMapWrapper.get(DOM.attrToPropMap, attrName);
    return isPresent(mappedPropName) ? mappedPropName : attrName;
  }
}
Object.defineProperty(ElementBinderBuilder, "parameters", {get: function() {
    return [[Parser]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype._bindDirectiveEvents, "parameters", {get: function() {
    return [[assert.genericType(List, DirectiveMetadata)], [CompileElement]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype._bindDirectiveProperties, "parameters", {get: function() {
    return [[assert.genericType(List, DirectiveMetadata)], [CompileElement]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype._splitBindConfig, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype._resolvePropertyName, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/element_binder_builder.map

//# sourceMappingURL=./element_binder_builder.map