System.register(["./index_common", "angular2/angular2", "angular2/change_detection", "angular2/src/core/exception_handler", "angular2/src/core/life_cycle/life_cycle", "angular2/src/core/compiler/compiler", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/core/compiler/shadow_dom_strategy", "angular2/src/core/compiler/shadow_dom_emulation/content_tag", "angular2/src/core/compiler/shadow_dom_emulation/light_dom", "angular2/src/core/compiler/template_loader", "angular2/src/core/compiler/template_resolver", "angular2/src/core/compiler/xhr/xhr", "angular2/src/core/compiler/xhr/xhr_impl", "angular2/src/core/compiler/url_resolver", "angular2/src/core/compiler/style_url_resolver", "angular2/src/core/compiler/component_url_mapper", "angular2/src/core/compiler/style_inliner", "angular2/src/core/compiler/css_processor", "angular2/src/reflection/reflection"], function($__export) {
  "use strict";
  var app,
      Component,
      Decorator,
      Template,
      NgElement,
      Lexer,
      Parser,
      ChangeDetection,
      ChangeDetector,
      ExceptionHandler,
      LifeCycle,
      Compiler,
      CompilerCache,
      DirectiveMetadataReader,
      ShadowDomStrategy,
      NativeShadowDomStrategy,
      EmulatedUnscopedShadowDomStrategy,
      Content,
      DestinationLightDom,
      TemplateLoader,
      TemplateResolver,
      XHR,
      XHRImpl,
      UrlResolver,
      StyleUrlResolver,
      ComponentUrlMapper,
      StyleInliner,
      CssProcessor,
      Reflector,
      reflector;
  function setup() {
    reflector.registerType(app.HelloCmp, {
      "factory": (function(service) {
        return new app.HelloCmp(service);
      }),
      "parameters": [[app.GreetingService]],
      "annotations": [new Component({
        selector: 'hello-app',
        componentServices: [app.GreetingService]
      }), new Template({
        directives: [app.RedDec],
        inline: "<div class=\"greeting\">{{greeting}} <span red>world</span>!</div>\n                 <button class=\"changeButton\" (click)=\"changeGreeting()\">change greeting</button>"
      })]
    });
    reflector.registerType(app.RedDec, {
      "factory": (function(el) {
        return new app.RedDec(el);
      }),
      "parameters": [[NgElement]],
      "annotations": [new Decorator({selector: '[red]'})]
    });
    reflector.registerType(app.GreetingService, {
      "factory": (function() {
        return new app.GreetingService();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Compiler, {
      "factory": (function(changeDetection, templateLoader, reader, parser, compilerCache, shadowDomStrategy, tplResolver, cmpUrlMapper, urlResolver, cssProcessor) {
        return new Compiler(changeDetection, templateLoader, reader, parser, compilerCache, shadowDomStrategy, tplResolver, cmpUrlMapper, urlResolver, cssProcessor);
      }),
      "parameters": [[ChangeDetection], [TemplateLoader], [DirectiveMetadataReader], [Parser], [CompilerCache], [ShadowDomStrategy], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [CssProcessor]],
      "annotations": []
    });
    reflector.registerType(CompilerCache, {
      "factory": (function() {
        return new CompilerCache();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Parser, {
      "factory": (function(lexer) {
        return new Parser(lexer);
      }),
      "parameters": [[Lexer]],
      "annotations": []
    });
    reflector.registerType(TemplateLoader, {
      "factory": (function(xhr, urlResolver) {
        return new TemplateLoader(xhr, urlResolver);
      }),
      "parameters": [[XHR], [UrlResolver]],
      "annotations": []
    });
    reflector.registerType(TemplateResolver, {
      "factory": (function() {
        return new TemplateResolver();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(XHR, {
      "factory": (function() {
        return new XHRImpl();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(DirectiveMetadataReader, {
      "factory": (function() {
        return new DirectiveMetadataReader();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Lexer, {
      "factory": (function() {
        return new Lexer();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(ExceptionHandler, {
      "factory": (function() {
        return new ExceptionHandler();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(LifeCycle, {
      "factory": (function(exHandler, cd) {
        return new LifeCycle(exHandler, cd);
      }),
      "parameters": [[ExceptionHandler], [ChangeDetector]],
      "annotations": []
    });
    reflector.registerType(ShadowDomStrategy, {
      "factory": (function(strategy) {
        return strategy;
      }),
      "parameters": [[NativeShadowDomStrategy]],
      "annotations": []
    });
    reflector.registerType(NativeShadowDomStrategy, {
      "factory": (function(styleUrlResolver) {
        return new NativeShadowDomStrategy(styleUrlResolver);
      }),
      "parameters": [[StyleUrlResolver]],
      "annotations": []
    });
    reflector.registerType(EmulatedUnscopedShadowDomStrategy, {
      "factory": (function(styleUrlResolver) {
        return new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, null);
      }),
      "parameters": [[StyleUrlResolver]],
      "annotations": []
    });
    reflector.registerType(StyleUrlResolver, {
      "factory": (function(urlResolver) {
        return new StyleUrlResolver(urlResolver);
      }),
      "parameters": [[UrlResolver]],
      "annotations": []
    });
    reflector.registerType(UrlResolver, {
      "factory": (function() {
        return new UrlResolver();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(ComponentUrlMapper, {
      "factory": (function() {
        return new ComponentUrlMapper();
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Content, {
      "factory": (function(lightDom, el) {
        return new Content(lightDom, el);
      }),
      "parameters": [[DestinationLightDom], [NgElement]],
      "annotations": [new Decorator({selector: '[content]'})]
    });
    reflector.registerType(StyleInliner, {
      "factory": (function(xhr, styleUrlResolver, urlResolver) {
        return new StyleInliner(xhr, styleUrlResolver, urlResolver);
      }),
      "parameters": [[XHR], [StyleUrlResolver], [UrlResolver]],
      "annotations": []
    });
    reflector.registerType(CssProcessor, {
      "factory": (function() {
        return new CssProcessor(null);
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerType(Reflector, {
      "factory": (function() {
        return reflector;
      }),
      "parameters": [],
      "annotations": []
    });
    reflector.registerGetters({"greeting": (function(a) {
        return a.greeting;
      })});
    reflector.registerSetters({"greeting": (function(a, v) {
        return a.greeting = v;
      })});
    reflector.registerMethods({"changeGreeting": (function(obj, args) {
        return obj.changeGreeting();
      })});
  }
  function main() {
    setup();
    app.main();
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      app = $__m;
    }, function($__m) {
      Component = $__m.Component;
      Decorator = $__m.Decorator;
      Template = $__m.Template;
      NgElement = $__m.NgElement;
    }, function($__m) {
      Lexer = $__m.Lexer;
      Parser = $__m.Parser;
      ChangeDetection = $__m.ChangeDetection;
      ChangeDetector = $__m.ChangeDetector;
    }, function($__m) {
      ExceptionHandler = $__m.ExceptionHandler;
    }, function($__m) {
      LifeCycle = $__m.LifeCycle;
    }, function($__m) {
      Compiler = $__m.Compiler;
      CompilerCache = $__m.CompilerCache;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
      NativeShadowDomStrategy = $__m.NativeShadowDomStrategy;
      EmulatedUnscopedShadowDomStrategy = $__m.EmulatedUnscopedShadowDomStrategy;
    }, function($__m) {
      Content = $__m.Content;
    }, function($__m) {
      DestinationLightDom = $__m.DestinationLightDom;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      XHRImpl = $__m.XHRImpl;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      ComponentUrlMapper = $__m.ComponentUrlMapper;
    }, function($__m) {
      StyleInliner = $__m.StyleInliner;
    }, function($__m) {
      CssProcessor = $__m.CssProcessor;
    }, function($__m) {
      Reflector = $__m.Reflector;
      reflector = $__m.reflector;
    }],
    execute: function() {
    }
  };
});

//# sourceMappingURL=examples/src/hello_world/index_static.map

//# sourceMappingURL=../../../examples/src/hello_world/index_static.js.map