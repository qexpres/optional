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
var None = /** @class */ (function (_super) {
    __extends(None, _super);
    function None() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    None.prototype.exists = function (f) {
        return false;
    };
    None.prototype.filter = function (f) {
        return this;
    };
    None.prototype.flatMap = function (f) {
        return functions_1.none();
    };
    None.prototype.forEach = function (f) {
        // do nothing
    };
    None.prototype.get = function () {
        throw new Error('Cannot get empty optional');
    };
    None.prototype.getOrElse = function (value) {
        return value;
    };
    None.prototype.orElse = function (value) {
        return value;
    };
    None.prototype.isDefined = function () {
        return false;
    };
    None.prototype.isEmpty = function () {
        return true;
    };
    None.prototype.map = function (f) {
        return functions_1.none();
    };
    None.prototype.toArray = function () {
        return [];
    };
    return None;
}(optional_1.Optional));
exports.None = None;
