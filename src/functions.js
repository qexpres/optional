"use strict";
exports.__esModule = true;
var some_1 = require("./some");
var none_1 = require("./none");
function optional(value) {
    return value === null || typeof value === 'undefined' ? none() : some(value);
}
exports.optional = optional;
function some(value) {
    return new some_1.Some(value);
}
exports.some = some;
function none() {
    return new none_1.None();
}
exports.none = none;
function truthyOptional(value) {
    return optional(value).filter(function (_) { return !!_; });
}
exports.truthyOptional = truthyOptional;
