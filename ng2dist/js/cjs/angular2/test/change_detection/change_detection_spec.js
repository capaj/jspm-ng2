var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/change_detection/change_detection_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_parser__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__1.ddescribe,
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    afterEach = $__1.afterEach,
    IS_DARTIUM = $__1.IS_DARTIUM;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank,
    isJsObject = $__2.isJsObject,
    BaseException = $__2.BaseException,
    FunctionWrapper = $__2.FunctionWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    ListWrapper = $__3.ListWrapper,
    MapWrapper = $__3.MapWrapper,
    StringMapWrapper = $__3.StringMapWrapper;
var Parser = ($__angular2_47_src_47_change_95_detection_47_parser_47_parser__ = require("angular2/src/change_detection/parser/parser"), $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ && $__angular2_47_src_47_change_95_detection_47_parser_47_parser__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_parser__}).Parser;
var Lexer = ($__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ = require("angular2/src/change_detection/parser/lexer"), $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__}).Lexer;
var $__6 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    ChangeDispatcher = $__6.ChangeDispatcher,
    DynamicChangeDetector = $__6.DynamicChangeDetector,
    ChangeDetectionError = $__6.ChangeDetectionError,
    ContextWithVariableBindings = $__6.ContextWithVariableBindings,
    PipeRegistry = $__6.PipeRegistry,
    Pipe = $__6.Pipe,
    NO_CHANGE = $__6.NO_CHANGE,
    CHECK_ALWAYS = $__6.CHECK_ALWAYS,
    CHECK_ONCE = $__6.CHECK_ONCE,
    CHECKED = $__6.CHECKED,
    DETACHED = $__6.DETACHED;
var ChangeDetectionUtil = ($__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ = require("angular2/src/change_detection/change_detection_util"), $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__.__esModule && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ || {default: $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__}).ChangeDetectionUtil;
var $__8 = ($__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ = require("angular2/src/change_detection/proto_change_detector"), $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__}),
    JitProtoChangeDetector = $__8.JitProtoChangeDetector,
    DynamicProtoChangeDetector = $__8.DynamicProtoChangeDetector;
function main() {
  describe("change detection", (function() {
    StringMapWrapper.forEach({
      "dynamic": (function() {
        var registry = arguments[0] !== (void 0) ? arguments[0] : null;
        return new DynamicProtoChangeDetector(registry);
      }),
      "JIT": (function() {
        var registry = arguments[0] !== (void 0) ? arguments[0] : null;
        return new JitProtoChangeDetector(registry);
      })
    }, (function(createProtoChangeDetector, name) {
      if (name == "JIT" && IS_DARTIUM)
        return ;
      function ast(exp) {
        var location = arguments[1] !== (void 0) ? arguments[1] : 'location';
        assert.argumentTypes(exp, assert.type.string, location, assert.type.string);
        var parser = new Parser(new Lexer());
        return parser.parseBinding(exp, location);
      }
      Object.defineProperty(ast, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      function createChangeDetector(memo, exp) {
        var context = arguments[2] !== (void 0) ? arguments[2] : null;
        var registry = arguments[3] !== (void 0) ? arguments[3] : null;
        assert.argumentTypes(memo, assert.type.string, exp, assert.type.string, context, assert.type.any, registry, assert.type.any);
        var pcd = createProtoChangeDetector(registry);
        pcd.addAst(ast(exp), memo, memo);
        var dispatcher = new TestDispatcher();
        var cd = pcd.instantiate(dispatcher);
        cd.hydrate(context);
        return {
          "changeDetector": cd,
          "dispatcher": dispatcher
        };
      }
      Object.defineProperty(createChangeDetector, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], [], []];
        }});
      function executeWatch(memo, exp) {
        var context = arguments[2] !== (void 0) ? arguments[2] : null;
        assert.argumentTypes(memo, assert.type.string, exp, assert.type.string, context, assert.type.any);
        var res = createChangeDetector(memo, exp, context);
        res["changeDetector"].detectChanges();
        return res["dispatcher"].log;
      }
      Object.defineProperty(executeWatch, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], []];
        }});
      describe((name + " change detection"), (function() {
        it('should do simple watching', (function() {
          var person = new Person("misko");
          var c = createChangeDetector('name', 'name', person);
          var cd = c["changeDetector"];
          var dispatcher = c["dispatcher"];
          cd.detectChanges();
          expect(dispatcher.log).toEqual(['name=misko']);
          dispatcher.clear();
          cd.detectChanges();
          expect(dispatcher.log).toEqual([]);
          dispatcher.clear();
          person.name = "Misko";
          cd.detectChanges();
          expect(dispatcher.log).toEqual(['name=Misko']);
        }));
        it('should report all changes on the first run including uninitialized values', (function() {
          expect(executeWatch('value', 'value', new Uninitialized())).toEqual(['value=null']);
        }));
        it('should report all changes on the first run including null values', (function() {
          var td = new TestData(null);
          expect(executeWatch('a', 'a', td)).toEqual(['a=null']);
        }));
        it("should support literals", (function() {
          expect(executeWatch('const', '10')).toEqual(['const=10']);
          expect(executeWatch('const', '"str"')).toEqual(['const=str']);
          expect(executeWatch('const', '"a\n\nb"')).toEqual(['const=a\n\nb']);
        }));
        it('simple chained property access', (function() {
          var address = new Address('Grenoble');
          var person = new Person('Victor', address);
          expect(executeWatch('address.city', 'address.city', person)).toEqual(['address.city=Grenoble']);
        }));
        it("should support method calls", (function() {
          var person = new Person('Victor');
          expect(executeWatch('m', 'sayHi("Jim")', person)).toEqual(['m=Hi, Jim']);
        }));
        it("should support function calls", (function() {
          var td = new TestData((function() {
            return (function(a) {
              return a;
            });
          }));
          expect(executeWatch('value', 'a()(99)', td)).toEqual(['value=99']);
        }));
        it("should support chained method calls", (function() {
          var person = new Person('Victor');
          var td = new TestData(person);
          expect(executeWatch('m', 'a.sayHi("Jim")', td)).toEqual(['m=Hi, Jim']);
        }));
        it("should support literal array", (function() {
          var c = createChangeDetector('array', '[1,2]');
          c["changeDetector"].detectChanges();
          expect(c["dispatcher"].loggedValues).toEqual([[[1, 2]]]);
          c = createChangeDetector('array', '[1,a]', new TestData(2));
          c["changeDetector"].detectChanges();
          expect(c["dispatcher"].loggedValues).toEqual([[[1, 2]]]);
        }));
        it("should support literal maps", (function() {
          var c = createChangeDetector('map', '{z:1}');
          c["changeDetector"].detectChanges();
          expect(c["dispatcher"].loggedValues[0][0]['z']).toEqual(1);
          c = createChangeDetector('map', '{z:a}', new TestData(1));
          c["changeDetector"].detectChanges();
          expect(c["dispatcher"].loggedValues[0][0]['z']).toEqual(1);
        }));
        it("should support binary operations", (function() {
          expect(executeWatch('exp', '10 + 2')).toEqual(['exp=12']);
          expect(executeWatch('exp', '10 - 2')).toEqual(['exp=8']);
          expect(executeWatch('exp', '10 * 2')).toEqual(['exp=20']);
          expect(executeWatch('exp', '10 / 2')).toEqual([("exp=" + 5.0)]);
          expect(executeWatch('exp', '11 % 2')).toEqual(['exp=1']);
          expect(executeWatch('exp', '1 == 1')).toEqual(['exp=true']);
          expect(executeWatch('exp', '1 != 1')).toEqual(['exp=false']);
          expect(executeWatch('exp', '1 < 2')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 < 1')).toEqual(['exp=false']);
          expect(executeWatch('exp', '2 > 1')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 < 1')).toEqual(['exp=false']);
          expect(executeWatch('exp', '1 <= 2')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 <= 2')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 <= 1')).toEqual(['exp=false']);
          expect(executeWatch('exp', '2 >= 1')).toEqual(['exp=true']);
          expect(executeWatch('exp', '2 >= 2')).toEqual(['exp=true']);
          expect(executeWatch('exp', '1 >= 2')).toEqual(['exp=false']);
          expect(executeWatch('exp', 'true && true')).toEqual(['exp=true']);
          expect(executeWatch('exp', 'true && false')).toEqual(['exp=false']);
          expect(executeWatch('exp', 'true || false')).toEqual(['exp=true']);
          expect(executeWatch('exp', 'false || false')).toEqual(['exp=false']);
        }));
        it("should support negate", (function() {
          expect(executeWatch('exp', '!true')).toEqual(['exp=false']);
          expect(executeWatch('exp', '!!true')).toEqual(['exp=true']);
        }));
        it("should support conditionals", (function() {
          expect(executeWatch('m', '1 < 2 ? 1 : 2')).toEqual(['m=1']);
          expect(executeWatch('m', '1 > 2 ? 1 : 2')).toEqual(['m=2']);
        }));
        describe("keyed access", (function() {
          it("should support accessing a list item", (function() {
            expect(executeWatch('array[0]', '["foo", "bar"][0]')).toEqual(['array[0]=foo']);
          }));
          it("should support accessing a map item", (function() {
            expect(executeWatch('map[foo]', '{"foo": "bar"}["foo"]')).toEqual(['map[foo]=bar']);
          }));
        }));
        it("should support interpolation", (function() {
          var parser = new Parser(new Lexer());
          var pcd = createProtoChangeDetector();
          var ast = parser.parseInterpolation("B{{a}}A", "location");
          pcd.addAst(ast, "memo", "memo");
          var dispatcher = new TestDispatcher();
          var cd = pcd.instantiate(dispatcher);
          cd.hydrate(new TestData("value"));
          cd.detectChanges();
          expect(dispatcher.log).toEqual(["memo=BvalueA"]);
        }));
        describe("change notification", (function() {
          describe("simple checks", (function() {
            it("should pass a change record to the dispatcher", (function() {
              var person = new Person('bob');
              var c = createChangeDetector('name', 'name', person);
              var cd = c["changeDetector"];
              var dispatcher = c["dispatcher"];
              cd.detectChanges();
              var changeRecord = dispatcher.changeRecords[0][0];
              expect(changeRecord.bindingMemento).toEqual('name');
              expect(changeRecord.change.currentValue).toEqual('bob');
              expect(changeRecord.change.previousValue).toEqual(ChangeDetectionUtil.unitialized());
            }));
          }));
          describe("pipes", (function() {
            it("should pass a change record to the dispatcher", (function() {
              var registry = new FakePipeRegistry('pipe', (function() {
                return new CountingPipe();
              }));
              var person = new Person('bob');
              var c = createChangeDetector('name', 'name | pipe', person, registry);
              var cd = c["changeDetector"];
              var dispatcher = c["dispatcher"];
              cd.detectChanges();
              var changeRecord = dispatcher.changeRecords[0][0];
              expect(changeRecord.bindingMemento).toEqual('name');
              expect(changeRecord.change.currentValue).toEqual('bob state:0');
              expect(changeRecord.change.previousValue).toEqual(ChangeDetectionUtil.unitialized());
            }));
          }));
          describe("group changes", (function() {
            it("should notify the dispatcher when a group of records changes", (function() {
              var pcd = createProtoChangeDetector();
              pcd.addAst(ast("1 + 2"), "memo", "1");
              pcd.addAst(ast("10 + 20"), "memo", "1");
              pcd.addAst(ast("100 + 200"), "memo2", "2");
              var dispatcher = new TestDispatcher();
              var cd = pcd.instantiate(dispatcher);
              cd.detectChanges();
              expect(dispatcher.loggedValues).toEqual([[3, 30], [300]]);
            }));
            it("should notify the dispatcher before switching to the next group", (function() {
              var pcd = createProtoChangeDetector();
              pcd.addAst(ast("a()"), "a", "1");
              pcd.addAst(ast("b()"), "b", "2");
              pcd.addAst(ast("c()"), "c", "2");
              var dispatcher = new TestDispatcher();
              var cd = pcd.instantiate(dispatcher);
              var tr = new TestRecord();
              tr.a = (function() {
                dispatcher.logValue('InvokeA');
                return 'a';
              });
              tr.b = (function() {
                dispatcher.logValue('InvokeB');
                return 'b';
              });
              tr.c = (function() {
                dispatcher.logValue('InvokeC');
                return 'c';
              });
              cd.hydrate(tr);
              cd.detectChanges();
              expect(dispatcher.loggedValues).toEqual(['InvokeA', ['a'], 'InvokeB', 'InvokeC', ['b', 'c']]);
            }));
          }));
        }));
        describe("enforce no new changes", (function() {
          it("should throw when a record gets changed after it has been checked", (function() {
            var pcd = createProtoChangeDetector();
            pcd.addAst(ast("a"), "a", 1);
            var dispatcher = new TestDispatcher();
            var cd = pcd.instantiate(dispatcher);
            cd.hydrate(new TestData('value'));
            expect((function() {
              cd.checkNoChanges();
            })).toThrowError(new RegExp("Expression 'a in location' has changed after it was checked"));
          }));
        }));
        describe("error handling", (function() {
          xit("should wrap exceptions into ChangeDetectionError", (function() {
            var pcd = createProtoChangeDetector();
            pcd.addAst(ast('invalidProp', 'someComponent'), "a", 1);
            var cd = pcd.instantiate(new TestDispatcher());
            cd.hydrate(null);
            try {
              cd.detectChanges();
              throw new BaseException("fail");
            } catch (e) {
              expect(e).toBeAnInstanceOf(ChangeDetectionError);
              expect(e.location).toEqual("invalidProp in someComponent");
            }
          }));
        }));
        describe("ContextWithVariableBindings", (function() {
          it('should read a field from ContextWithVariableBindings', (function() {
            var locals = new ContextWithVariableBindings(null, MapWrapper.createFromPairs([["key", "value"]]));
            expect(executeWatch('key', 'key', locals)).toEqual(['key=value']);
          }));
          it('should invoke a function from ContextWithVariableBindings', (function() {
            var locals = new ContextWithVariableBindings(null, MapWrapper.createFromPairs([["key", (function() {
              return "value";
            })]]));
            expect(executeWatch('key', 'key()', locals)).toEqual(['key=value']);
          }));
          it('should handle nested ContextWithVariableBindings', (function() {
            var nested = new ContextWithVariableBindings(null, MapWrapper.createFromPairs([["key", "value"]]));
            var locals = new ContextWithVariableBindings(nested, MapWrapper.create());
            expect(executeWatch('key', 'key', locals)).toEqual(['key=value']);
          }));
          it("should fall back to a regular field read when ContextWithVariableBindings " + "does not have the requested field", (function() {
            var locals = new ContextWithVariableBindings(new Person("Jim"), MapWrapper.createFromPairs([["key", "value"]]));
            expect(executeWatch('name', 'name', locals)).toEqual(['name=Jim']);
          }));
        }));
        describe("handle children", (function() {
          var parent,
              child;
          beforeEach((function() {
            var protoParent = createProtoChangeDetector();
            parent = protoParent.instantiate(null);
            var protoChild = createProtoChangeDetector();
            child = protoChild.instantiate(null);
          }));
          it("should add children", (function() {
            parent.addChild(child);
            expect(parent.children.length).toEqual(1);
            expect(parent.children[0]).toBe(child);
          }));
          it("should remove children", (function() {
            parent.addChild(child);
            parent.removeChild(child);
            expect(parent.children).toEqual([]);
          }));
        }));
      }));
      describe("mode", (function() {
        it("should not check a detached change detector", (function() {
          var c = createChangeDetector('name', 'a', new TestData("value"));
          var cd = c["changeDetector"];
          var dispatcher = c["dispatcher"];
          cd.mode = DETACHED;
          cd.detectChanges();
          expect(dispatcher.log).toEqual([]);
        }));
        it("should not check a checked change detector", (function() {
          var c = createChangeDetector('name', 'a', new TestData("value"));
          var cd = c["changeDetector"];
          var dispatcher = c["dispatcher"];
          cd.mode = CHECKED;
          cd.detectChanges();
          expect(dispatcher.log).toEqual([]);
        }));
        it("should change CHECK_ONCE to CHECKED", (function() {
          var cd = createProtoChangeDetector().instantiate(null);
          cd.mode = CHECK_ONCE;
          cd.detectChanges();
          expect(cd.mode).toEqual(CHECKED);
        }));
        it("should not change the CHECK_ALWAYS", (function() {
          var cd = createProtoChangeDetector().instantiate(null);
          cd.mode = CHECK_ALWAYS;
          cd.detectChanges();
          expect(cd.mode).toEqual(CHECK_ALWAYS);
        }));
      }));
      describe("markPathToRootAsCheckOnce", (function() {
        function changeDetector(mode, parent) {
          var cd = createProtoChangeDetector().instantiate(null);
          cd.mode = mode;
          if (isPresent(parent))
            parent.addChild(cd);
          return cd;
        }
        it("should mark all checked detectors as CHECK_ONCE " + "until reaching a detached one", (function() {
          var root = changeDetector(CHECK_ALWAYS, null);
          var disabled = changeDetector(DETACHED, root);
          var parent = changeDetector(CHECKED, disabled);
          var checkAlwaysChild = changeDetector(CHECK_ALWAYS, parent);
          var checkOnceChild = changeDetector(CHECK_ONCE, checkAlwaysChild);
          var checkedChild = changeDetector(CHECKED, checkOnceChild);
          checkedChild.markPathToRootAsCheckOnce();
          expect(root.mode).toEqual(CHECK_ALWAYS);
          expect(disabled.mode).toEqual(DETACHED);
          expect(parent.mode).toEqual(CHECK_ONCE);
          expect(checkAlwaysChild.mode).toEqual(CHECK_ALWAYS);
          expect(checkOnceChild.mode).toEqual(CHECK_ONCE);
          expect(checkedChild.mode).toEqual(CHECK_ONCE);
        }));
      }));
      describe("hydration", (function() {
        it("should be able to rehydrate a change detector", (function() {
          var c = createChangeDetector("memo", "name");
          var cd = c["changeDetector"];
          cd.hydrate("some context");
          expect(cd.hydrated()).toBe(true);
          cd.dehydrate();
          expect(cd.hydrated()).toBe(false);
          cd.hydrate("other context");
          expect(cd.hydrated()).toBe(true);
        }));
        it("should destroy all active pipes during dehyration", (function() {
          var pipe = new OncePipe();
          var registry = new FakePipeRegistry('pipe', (function() {
            return pipe;
          }));
          var c = createChangeDetector("memo", "name | pipe", new Person('bob'), registry);
          var cd = c["changeDetector"];
          cd.detectChanges();
          cd.dehydrate();
          expect(pipe.destroyCalled).toBe(true);
        }));
      }));
      describe("pipes", (function() {
        it("should support pipes", (function() {
          var registry = new FakePipeRegistry('pipe', (function() {
            return new CountingPipe();
          }));
          var ctx = new Person("Megatron");
          var c = createChangeDetector("memo", "name | pipe", ctx, registry);
          var cd = c["changeDetector"];
          var dispatcher = c["dispatcher"];
          cd.detectChanges();
          expect(dispatcher.log).toEqual(['memo=Megatron state:0']);
          dispatcher.clear();
          cd.detectChanges();
          expect(dispatcher.log).toEqual(['memo=Megatron state:1']);
        }));
        it("should lookup pipes in the registry when the context is not supported", (function() {
          var registry = new FakePipeRegistry('pipe', (function() {
            return new OncePipe();
          }));
          var ctx = new Person("Megatron");
          var c = createChangeDetector("memo", "name | pipe", ctx, registry);
          var cd = c["changeDetector"];
          cd.detectChanges();
          expect(registry.numberOfLookups).toEqual(1);
          ctx.name = "Optimus Prime";
          cd.detectChanges();
          expect(registry.numberOfLookups).toEqual(2);
        }));
        it("should invoke onDestroy on a pipe before switching to another one", (function() {
          var pipe = new OncePipe();
          var registry = new FakePipeRegistry('pipe', (function() {
            return pipe;
          }));
          var ctx = new Person("Megatron");
          var c = createChangeDetector("memo", "name | pipe", ctx, registry);
          var cd = c["changeDetector"];
          cd.detectChanges();
          ctx.name = "Optimus Prime";
          cd.detectChanges();
          expect(pipe.destroyCalled).toEqual(true);
        }));
      }));
      it("should do nothing when returns NO_CHANGE", (function() {
        var registry = new FakePipeRegistry('pipe', (function() {
          return new IdentityPipe();
        }));
        var ctx = new Person("Megatron");
        var c = createChangeDetector("memo", "name | pipe", ctx, registry);
        var cd = c["changeDetector"];
        var dispatcher = c["dispatcher"];
        cd.detectChanges();
        cd.detectChanges();
        expect(dispatcher.log).toEqual(['memo=Megatron']);
        ctx.name = "Optimus Prime";
        dispatcher.clear();
        cd.detectChanges();
        expect(dispatcher.log).toEqual(['memo=Optimus Prime']);
      }));
    }));
  }));
}
var CountingPipe = function CountingPipe() {
  $traceurRuntime.superConstructor($CountingPipe).call(this);
  this.state = 0;
};
var $CountingPipe = CountingPipe;
($traceurRuntime.createClass)(CountingPipe, {
  supports: function(newValue) {
    return true;
  },
  transform: function(value) {
    return (value + " state:" + this.state++);
  }
}, {}, Pipe);
var OncePipe = function OncePipe() {
  $traceurRuntime.superConstructor($OncePipe).call(this);
  this.called = false;
  ;
  this.destroyCalled = false;
};
var $OncePipe = OncePipe;
($traceurRuntime.createClass)(OncePipe, {
  supports: function(newValue) {
    return !this.called;
  },
  onDestroy: function() {
    this.destroyCalled = true;
  },
  transform: function(value) {
    this.called = true;
    return value;
  }
}, {}, Pipe);
var IdentityPipe = function IdentityPipe() {
  $traceurRuntime.superConstructor($IdentityPipe).apply(this, arguments);
};
var $IdentityPipe = IdentityPipe;
($traceurRuntime.createClass)(IdentityPipe, {
  supports: function(newValue) {
    return true;
  },
  transform: function(value) {
    if (this.state === value) {
      return NO_CHANGE;
    } else {
      this.state = value;
      return value;
    }
  }
}, {}, Pipe);
var FakePipeRegistry = function FakePipeRegistry(pipeType, factory) {
  $traceurRuntime.superConstructor($FakePipeRegistry).call(this, {});
  this.pipeType = pipeType;
  this.factory = factory;
  this.numberOfLookups = 0;
};
var $FakePipeRegistry = FakePipeRegistry;
($traceurRuntime.createClass)(FakePipeRegistry, {get: function(type, obj) {
    assert.argumentTypes(type, assert.type.string, obj, assert.type.any);
    if (type != this.pipeType)
      return null;
    this.numberOfLookups++;
    return this.factory();
  }}, {}, PipeRegistry);
Object.defineProperty(FakePipeRegistry.prototype.get, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
var TestRecord = function TestRecord() {};
($traceurRuntime.createClass)(TestRecord, {}, {});
var Person = function Person(name) {
  var address = arguments[1] !== (void 0) ? arguments[1] : null;
  assert.argumentTypes(name, assert.type.string, address, Address);
  this.name = name;
  this.address = address;
};
($traceurRuntime.createClass)(Person, {
  sayHi: function(m) {
    return ("Hi, " + m);
  },
  toString: function() {
    var address = this.address == null ? '' : ' address=' + this.address.toString();
    return assert.returnType(('name=' + this.name + address), assert.type.string);
  }
}, {});
Object.defineProperty(Person, "parameters", {get: function() {
    return [[assert.type.string], [Address]];
  }});
var Address = function Address(city) {
  assert.argumentTypes(city, assert.type.string);
  this.city = city;
};
($traceurRuntime.createClass)(Address, {toString: function() {
    return assert.returnType((this.city), assert.type.string);
  }}, {});
Object.defineProperty(Address, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var Uninitialized = function Uninitialized() {};
($traceurRuntime.createClass)(Uninitialized, {}, {});
var TestData = function TestData(a) {
  this.a = a;
};
($traceurRuntime.createClass)(TestData, {}, {});
var TestDispatcher = function TestDispatcher() {
  $traceurRuntime.superConstructor($TestDispatcher).call(this);
  this.log = null;
  this.loggedValues = null;
  this.onChange = (function(_, __) {});
  this.clear();
};
var $TestDispatcher = TestDispatcher;
($traceurRuntime.createClass)(TestDispatcher, {
  clear: function() {
    this.log = ListWrapper.create();
    this.loggedValues = ListWrapper.create();
    this.changeRecords = ListWrapper.create();
  },
  logValue: function(value) {
    ListWrapper.push(this.loggedValues, value);
  },
  onRecordChange: function(group, changeRecords) {
    var value = changeRecords[0].change.currentValue;
    var memento = changeRecords[0].bindingMemento;
    ListWrapper.push(this.log, memento + '=' + this._asString(value));
    var values = ListWrapper.map(changeRecords, (function(r) {
      return r.change.currentValue;
    }));
    ListWrapper.push(this.loggedValues, values);
    ListWrapper.push(this.changeRecords, changeRecords);
    this.onChange(group, changeRecords);
  },
  _asString: function(value) {
    return (isBlank(value) ? 'null' : value.toString());
  }
}, {}, ChangeDispatcher);
Object.defineProperty(TestDispatcher.prototype.onRecordChange, "parameters", {get: function() {
    return [[], [List]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/change_detection/change_detection_spec.map

//# sourceMappingURL=./change_detection_spec.map
 main();