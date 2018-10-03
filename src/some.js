"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var optional_1 = require("./optional");
var functions_1 = require("./functions");
var Some = /** @class */ (function (_super) {
    __extends(Some, _super);
    function Some(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    Some.prototype.exists = function (f) {
        return f(this.value);
    };
    Some.prototype.filter = function (f) {
        return this.exists(f) ? this : functions_1.none();
    };
    Some.prototype.flatMap = function (f) {
        return f(this.value);
    };
    Some.prototype.forEach = function (f) {
        f(this.value);
    };
    Some.prototype.get = function () {
        return this.value;
    };
    Some.prototype.getOrElse = function (value) {
        return this.value;
    };
    Some.prototype.orElse = function (value) {
        return this;
    };
    Some.prototype.isDefined = function () {
        return true;
    };
    Some.prototype.isEmpty = function () {
        return false;
    };
    Some.prototype.map = function (f) {
        return functions_1.optional(f(this.value));
    };
    Some.prototype.toArray = function () {
        return [this.value];
    };
    return Some;
}(optional_1.Optional));
exports.Some = Some;
