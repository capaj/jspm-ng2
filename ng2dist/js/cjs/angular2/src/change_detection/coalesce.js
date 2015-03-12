"use strict";
Object.defineProperties(module.exports, {
  coalesce: {get: function() {
      return coalesce;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/coalesce";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_record__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper;
var $__3 = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = require("./proto_record"), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}),
    RECORD_TYPE_SELF = $__3.RECORD_TYPE_SELF,
    ProtoRecord = $__3.ProtoRecord;
function coalesce(records) {
  assert.argumentTypes(records, assert.genericType(List, ProtoRecord));
  var res = ListWrapper.create();
  var indexMap = MapWrapper.create();
  for (var i = 0; i < records.length; ++i) {
    var r = records[i];
    var record = _replaceIndices(r, res.length + 1, indexMap);
    var matchingRecord = _findMatching(record, res);
    if (isPresent(matchingRecord) && record.lastInBinding) {
      ListWrapper.push(res, _selfRecord(record, matchingRecord.selfIndex, res.length + 1));
      MapWrapper.set(indexMap, r.selfIndex, matchingRecord.selfIndex);
    } else if (isPresent(matchingRecord) && !record.lastInBinding) {
      MapWrapper.set(indexMap, r.selfIndex, matchingRecord.selfIndex);
    } else {
      ListWrapper.push(res, record);
      MapWrapper.set(indexMap, r.selfIndex, record.selfIndex);
    }
  }
  return assert.returnType((res), assert.genericType(List, ProtoRecord));
}
Object.defineProperty(coalesce, "parameters", {get: function() {
    return [[assert.genericType(List, ProtoRecord)]];
  }});
function _selfRecord(r, contextIndex, selfIndex) {
  assert.argumentTypes(r, ProtoRecord, contextIndex, assert.type.number, selfIndex, assert.type.number);
  return assert.returnType((new ProtoRecord(RECORD_TYPE_SELF, "self", null, [], r.fixedArgs, contextIndex, selfIndex, r.bindingMemento, r.directiveMemento, r.expressionAsString, r.lastInBinding, r.lastInDirective)), ProtoRecord);
}
Object.defineProperty(_selfRecord, "parameters", {get: function() {
    return [[ProtoRecord], [assert.type.number], [assert.type.number]];
  }});
function _findMatching(r, rs) {
  return ListWrapper.find(rs, (function(rr) {
    return rr.mode === r.mode && rr.funcOrValue === r.funcOrValue && rr.contextIndex === r.contextIndex && ListWrapper.equals(rr.args, r.args);
  }));
}
Object.defineProperty(_findMatching, "parameters", {get: function() {
    return [[ProtoRecord], [assert.genericType(List, ProtoRecord)]];
  }});
function _replaceIndices(r, selfIndex, indexMap) {
  var args = ListWrapper.map(r.args, (function(a) {
    return _map(indexMap, a);
  }));
  var contextIndex = _map(indexMap, r.contextIndex);
  return new ProtoRecord(r.mode, r.name, r.funcOrValue, args, r.fixedArgs, contextIndex, selfIndex, r.bindingMemento, r.directiveMemento, r.expressionAsString, r.lastInBinding, r.lastInDirective);
}
Object.defineProperty(_replaceIndices, "parameters", {get: function() {
    return [[ProtoRecord], [assert.type.number], [Map]];
  }});
function _map(indexMap, value) {
  assert.argumentTypes(indexMap, Map, value, assert.type.number);
  var r = MapWrapper.get(indexMap, value);
  return isPresent(r) ? r : value;
}
Object.defineProperty(_map, "parameters", {get: function() {
    return [[Map], [assert.type.number]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/coalesce.map

//# sourceMappingURL=./coalesce.map