System.register(["angular2/test_lib", "angular2/src/core/compiler/style_inliner", "angular2/src/facade/lang", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/core/compiler/xhr/xhr", "angular2/src/core/compiler/url_resolver", "angular2/src/core/compiler/style_url_resolver"], function($__export) {
  "use strict";
  var describe,
      it,
      expect,
      beforeEach,
      ddescribe,
      iit,
      xit,
      el,
      StyleInliner,
      isBlank,
      Promise,
      PromiseWrapper,
      Map,
      MapWrapper,
      XHR,
      UrlResolver,
      StyleUrlResolver,
      FakeXHR;
  function main() {
    describe('StyleInliner', (function() {
      var xhr,
          inliner;
      beforeEach((function() {
        xhr = new FakeXHR();
        var urlResolver = new UrlResolver();
        var styleUrlResolver = new StyleUrlResolver(urlResolver);
        inliner = new StyleInliner(xhr, styleUrlResolver, urlResolver);
      }));
      describe('loading', (function() {
        it('should return a string when there is no import statement', (function() {
          var css = '.main {}';
          var loadedCss = inliner.inlineImports(css, 'http://base');
          expect(loadedCss).not.toBePromise();
          expect(loadedCss).toEqual(css);
        }));
        it('should inline @import rules', (function(done) {
          xhr.reply('http://base/one.css', '.one {}');
          var css = '@import url("one.css");.main {}';
          var loadedCss = inliner.inlineImports(css, 'http://base');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual('.one {}\n.main {}');
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
        it('should support url([unquoted url]) in @import rules', (function(done) {
          xhr.reply('http://base/one.css', '.one {}');
          var css = '@import url(one.css);.main {}';
          var loadedCss = inliner.inlineImports(css, 'http://base');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual('.one {}\n.main {}');
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
        it('should handle @import error gracefuly', (function(done) {
          var css = '@import "one.css";.main {}';
          var loadedCss = inliner.inlineImports(css, 'http://base');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual('/* failed to import http://base/one.css */\n.main {}');
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
        it('should inline multiple @import rules', (function(done) {
          xhr.reply('http://base/one.css', '.one {}');
          xhr.reply('http://base/two.css', '.two {}');
          var css = '@import "one.css";@import "two.css";.main {}';
          var loadedCss = inliner.inlineImports(css, 'http://base');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual('.one {}\n.two {}\n.main {}');
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
        it('should inline nested @import rules', (function(done) {
          xhr.reply('http://base/one.css', '@import "two.css";.one {}');
          xhr.reply('http://base/two.css', '.two {}');
          var css = '@import "one.css";.main {}';
          var loadedCss = inliner.inlineImports(css, 'http://base/');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual('.two {}\n.one {}\n.main {}');
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
        it('should handle circular dependencies gracefuly', (function(done) {
          xhr.reply('http://base/one.css', '@import "two.css";.one {}');
          xhr.reply('http://base/two.css', '@import "one.css";.two {}');
          var css = '@import "one.css";.main {}';
          var loadedCss = inliner.inlineImports(css, 'http://base/');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual('.two {}\n.one {}\n.main {}');
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
        it('should handle invalid @import fracefuly', (function(done) {
          var css = '@import one.css;.main {}';
          var loadedCss = inliner.inlineImports(css, 'http://base/');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual('/* Invalid import rule: "@import one.css;" */.main {}');
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
      }));
      describe('media query', (function() {
        it('should wrap inlined content in media query', (function(done) {
          xhr.reply('http://base/one.css', '.one {}');
          var css = '@import "one.css" (min-width: 700px) and (orientation: landscape);';
          var loadedCss = inliner.inlineImports(css, 'http://base/');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual('@media (min-width: 700px) and (orientation: landscape) {\n.one {}\n}\n');
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
      }));
      describe('url rewritting', (function() {
        it('should rewrite url in inlined content', (function(done) {
          xhr.reply('http://base/one.css', '@import "./nested/two.css";.one {background-image: url("one.jpg");}');
          xhr.reply('http://base/nested/two.css', '.two {background-image: url("../img/two.jpg");}');
          var css = '@import "one.css";';
          var loadedCss = inliner.inlineImports(css, 'http://base/');
          expect(loadedCss).toBePromise();
          PromiseWrapper.then(loadedCss, function(css) {
            expect(css).toEqual(".two {background-image: url('http://base/img/two.jpg');}\n" + ".one {background-image: url('http://base/one.jpg');}\n");
            done();
          }, function(e) {
            throw 'fail;';
          });
        }));
      }));
    }));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      describe = $__m.describe;
      it = $__m.it;
      expect = $__m.expect;
      beforeEach = $__m.beforeEach;
      ddescribe = $__m.ddescribe;
      iit = $__m.iit;
      xit = $__m.xit;
      el = $__m.el;
    }, function($__m) {
      StyleInliner = $__m.StyleInliner;
    }, function($__m) {
      isBlank = $__m.isBlank;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      Map = $__m.Map;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }],
    execute: function() {
      FakeXHR = (function($__super) {
        var FakeXHR = function FakeXHR() {
          $traceurRuntime.superConstructor(FakeXHR).call(this);
          this._responses = MapWrapper.create();
        };
        return ($traceurRuntime.createClass)(FakeXHR, {
          get: function(url) {
            var response = MapWrapper.get(this._responses, url);
            if (isBlank(response)) {
              return PromiseWrapper.reject('xhr error');
            }
            return PromiseWrapper.resolve(response);
          },
          reply: function(url, response) {
            MapWrapper.set(this._responses, url, response);
          }
        }, {}, $__super);
      }(XHR));
      Object.defineProperty(FakeXHR.prototype.get, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(FakeXHR.prototype.reply, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=angular2/test/core/compiler/style_inliner_spec.map

//# sourceMappingURL=../../../../angular2/test/core/compiler/style_inliner_spec.js.map