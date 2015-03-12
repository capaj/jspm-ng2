"use strict";
Object.defineProperties(module.exports, {
  generateOfferings: {get: function() {
      return generateOfferings;
    }},
  generateOffering: {get: function() {
      return generateOffering;
    }},
  generateCompany: {get: function() {
      return generateCompany;
    }},
  generateOpportunity: {get: function() {
      return generateOpportunity;
    }},
  generateAccount: {get: function() {
      return generateAccount;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/naive_infinite_scroll/random_data";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__1.int,
    StringWrapper = $__1.StringWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ = require("./common"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__}),
    CustomDate = $__3.CustomDate,
    Offering = $__3.Offering,
    Company = $__3.Company,
    Opportunity = $__3.Opportunity,
    Account = $__3.Account,
    STATUS_LIST = $__3.STATUS_LIST,
    AAT_STATUS_LIST = $__3.AAT_STATUS_LIST;
function generateOfferings(count) {
  assert.argumentTypes(count, int);
  var res = [];
  for (var i = 0; i < count; i++) {
    ListWrapper.push(res, generateOffering(i));
  }
  return assert.returnType((res), assert.genericType(List, Offering));
}
Object.defineProperty(generateOfferings, "parameters", {get: function() {
    return [[int]];
  }});
function generateOffering(seed) {
  assert.argumentTypes(seed, int);
  var res = new Offering();
  res.name = generateName(seed++);
  res.company = generateCompany(seed++);
  res.opportunity = generateOpportunity(seed++);
  res.account = generateAccount(seed++);
  res.basePoints = seed % 10;
  res.kickerPoints = seed % 4;
  res.status = STATUS_LIST[seed % STATUS_LIST.length];
  res.bundles = randomString(seed++);
  res.dueDate = randomDate(seed++);
  res.endDate = randomDate(seed++, res.dueDate);
  res.aatStatus = AAT_STATUS_LIST[seed % AAT_STATUS_LIST.length];
  return assert.returnType((res), Offering);
}
Object.defineProperty(generateOffering, "parameters", {get: function() {
    return [[int]];
  }});
function generateCompany(seed) {
  assert.argumentTypes(seed, int);
  var res = new Company();
  res.name = generateName(seed);
  return assert.returnType((res), Company);
}
Object.defineProperty(generateCompany, "parameters", {get: function() {
    return [[int]];
  }});
function generateOpportunity(seed) {
  assert.argumentTypes(seed, int);
  var res = new Opportunity();
  res.name = generateName(seed);
  return assert.returnType((res), Opportunity);
}
Object.defineProperty(generateOpportunity, "parameters", {get: function() {
    return [[int]];
  }});
function generateAccount(seed) {
  assert.argumentTypes(seed, int);
  var res = new Account();
  res.accountId = seed;
  return assert.returnType((res), Account);
}
Object.defineProperty(generateAccount, "parameters", {get: function() {
    return [[int]];
  }});
var names = ['Foo', 'Bar', 'Baz', 'Qux', 'Quux', 'Garply', 'Waldo', 'Fred', 'Plugh', 'Xyzzy', 'Thud', 'Cruft', 'Stuff'];
function generateName(seed) {
  assert.argumentTypes(seed, int);
  return assert.returnType((names[seed % names.length]), assert.type.string);
}
Object.defineProperty(generateName, "parameters", {get: function() {
    return [[int]];
  }});
var offsets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function randomDate(seed) {
  var minDate = arguments[1] !== (void 0) ? arguments[1] : null;
  assert.argumentTypes(seed, int, minDate, CustomDate);
  if (minDate == null) {
    minDate = CustomDate.now();
  }
  return assert.returnType((minDate.addDays(offsets[seed % offsets.length])), CustomDate);
}
Object.defineProperty(randomDate, "parameters", {get: function() {
    return [[int], [CustomDate]];
  }});
var stringLengths = [5, 7, 9, 11, 13];
var charCodeOffsets = [0, 1, 2, 3, 4, 5, 6, 7, 8];
function randomString(seed) {
  assert.argumentTypes(seed, int);
  var len = stringLengths[seed % 5];
  var str = '';
  for (var i = 0; i < len; i++) {
    str += StringWrapper.fromCharCode(97 + charCodeOffsets[seed % 9] + i);
  }
  return assert.returnType((str), assert.type.string);
}
Object.defineProperty(randomString, "parameters", {get: function() {
    return [[int]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/random_data.map

//# sourceMappingURL=./random_data.map