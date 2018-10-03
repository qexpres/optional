"use strict";
exports.__esModule = true;
var functions_1 = require("./functions");
var none_1 = require("./none");
var some_1 = require("./some");
describe('optional', function () {
    it('should wrap any non-null and non-undefined value in Some', function () {
        var opt123 = functions_1.optional(123);
        expect(opt123).toBeInstanceOf(some_1.Some);
        expect(opt123.get()).toBe(123);
        var optTest = functions_1.optional('test');
        expect(optTest).toBeInstanceOf(some_1.Some);
        expect(optTest.get()).toBe('test');
        var obj = { a: 'b' };
        var optObj = functions_1.optional(obj);
        expect(optObj).toBeInstanceOf(some_1.Some);
        expect(optObj.get()).toBe(obj);
    });
    it('should return None for null and undefined', function () {
        expect(functions_1.optional(null)).toBeInstanceOf(none_1.None);
        expect(functions_1.optional(undefined)).toBeInstanceOf(none_1.None);
        var a = {};
        expect(functions_1.optional(a.b)).toBeInstanceOf(none_1.None);
    });
});
describe('some', function () {
    it('should wrap any value in Some', function () {
        var opt123 = functions_1.some(123);
        expect(opt123).toBeInstanceOf(some_1.Some);
        expect(opt123.get()).toBe(123);
        var optTest = functions_1.some('test');
        expect(optTest).toBeInstanceOf(some_1.Some);
        expect(optTest.get()).toBe('test');
        var obj = { a: 'b' };
        var optObj = functions_1.some(obj);
        expect(optObj).toBeInstanceOf(some_1.Some);
        expect(optObj.get()).toBe(obj);
        var optUndefined = functions_1.some(undefined);
        expect(optUndefined).toBeInstanceOf(some_1.Some);
        expect(optUndefined.get()).toBeUndefined();
        var optNull = functions_1.some(null);
        expect(optNull).toBeInstanceOf(some_1.Some);
        expect(optNull.get()).toBeNull();
        var obj2 = { a: 'b' };
        var optUnset = functions_1.some(obj2.b);
        expect(optUnset).toBeInstanceOf(some_1.Some);
        expect(optUnset.get()).toBeUndefined();
    });
});
describe('none', function () {
    it('should return None', function () {
        expect(functions_1.none()).toBeInstanceOf(none_1.None);
    });
});
describe('truthyOptional', function () {
    it('should wrap any truthy value in Some', function () {
        var opt123 = functions_1.truthyOptional(123);
        expect(opt123).toBeInstanceOf(some_1.Some);
        expect(opt123.get()).toBe(123);
        var optTest = functions_1.truthyOptional('test');
        expect(optTest).toBeInstanceOf(some_1.Some);
        expect(optTest.get()).toBe('test');
        var obj = { a: 'b' };
        var optObj = functions_1.truthyOptional(obj);
        expect(optObj).toBeInstanceOf(some_1.Some);
        expect(optObj.get()).toBe(obj);
        var obj2 = [];
        var optObj2 = functions_1.truthyOptional(obj2);
        expect(optObj2).toBeInstanceOf(some_1.Some);
        expect(optObj2.get()).toBe(obj2);
        var obj3 = {};
        var optObj3 = functions_1.truthyOptional(obj3);
        expect(optObj3).toBeInstanceOf(some_1.Some);
        expect(optObj3.get()).toBe(obj3);
    });
    it('should return None for any falsy value', function () {
        expect(functions_1.truthyOptional(null)).toBeInstanceOf(none_1.None);
        expect(functions_1.truthyOptional(undefined)).toBeInstanceOf(none_1.None);
        var a = {};
        expect(functions_1.truthyOptional(a.b)).toBeInstanceOf(none_1.None);
        expect(functions_1.truthyOptional('')).toBeInstanceOf(none_1.None);
        expect(functions_1.truthyOptional(0)).toBeInstanceOf(none_1.None);
        expect(functions_1.truthyOptional(NaN)).toBeInstanceOf(none_1.None);
    });
});
