"use strict";
exports.__esModule = true;
var none_1 = require("./none");
var functions_1 = require("./functions");
describe('A None', function () {
    it('should return false for exists()', function () {
        var callback = jest.fn();
        expect(new none_1.None().exists(callback)).toBe(false);
        expect(callback).toHaveBeenCalledTimes(0);
    });
    it('should return None for filter()', function () {
        var callback = jest.fn();
        expect(new none_1.None().filter(callback)).toBeInstanceOf(none_1.None);
        expect(callback).toHaveBeenCalledTimes(0);
    });
    it('should return None for flatMap()', function () {
        var callback = jest.fn();
        expect(new none_1.None().flatMap(callback)).toBeInstanceOf(none_1.None);
        expect(callback).toHaveBeenCalledTimes(0);
    });
    it('should never use the forEach() callback', function () {
        var callback = jest.fn();
        new none_1.None().forEach(callback);
        expect(callback).toHaveBeenCalledTimes(0);
    });
    it('should throw an Error for get()', function () {
        expect(function () { return new none_1.None().get(); }).toThrow('Cannot get empty optional');
    });
    it('should return the alternative value for getOrElse()', function () {
        var a = {};
        expect(new none_1.None().getOrElse(a)).toBe(a);
    });
    it('should return the alternative optional for orElse()', function () {
        var a = functions_1.none();
        expect(new none_1.None().orElse(a)).toBe(a);
    });
    it('should false for isDefined()', function () {
        expect(new none_1.None().isDefined()).toBe(false);
    });
    it('should true for isEmpty()', function () {
        expect(new none_1.None().isEmpty()).toBe(true);
    });
    it('should return None for map()', function () {
        var callback = jest.fn();
        expect(new none_1.None().map(callback)).toBeInstanceOf(none_1.None);
        expect(callback).toHaveBeenCalledTimes(0);
    });
    it('should return an empty array for toArray()', function () {
        expect(new none_1.None().toArray()).toEqual([]);
    });
});
