"use strict";
exports.__esModule = true;
var some_1 = require("./some");
var none_1 = require("./none");
describe('A Some', function () {
    it('should return the return value of the executed callback for exists()', function () {
        expect(new some_1.Some(1).exists(function (_) { return !!_; })).toBe(true);
        expect(new some_1.Some(1).exists(function (_) { return !_; })).toBe(false);
        var a = {};
        expect(new some_1.Some(a).exists(function (_) { return _ === a; })).toBe(true);
        var callback = jest.fn();
        new some_1.Some(1).exists(callback);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(1);
    });
    it('should return itself if the executed callback yield true, otherwise it should return None for filter()', function () {
        var someOne = new some_1.Some(1);
        expect(someOne.filter(function (_) { return !!_; })).toBe(someOne);
        expect(someOne.filter(function (_) { return !_; })).toBeInstanceOf(none_1.None);
        var callback = jest.fn();
        new some_1.Some(1).filter(callback);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(1);
    });
    it("should return the callback's return value for flatMap()", function () {
        var someOne = new some_1.Some(1);
        var returnNone = new none_1.None();
        expect(someOne.flatMap(function (_) { return returnNone; })).toBe(returnNone);
        expect(someOne.flatMap(function (_) { return new some_1.Some(_); })).toBeInstanceOf(some_1.Some);
        expect(someOne.flatMap(function (_) { return new some_1.Some(_); })).not.toBe(someOne);
        expect(someOne.flatMap(function (_) { return new some_1.Some(_); }).get()).toBe(someOne.get());
        var callback = jest.fn();
        new some_1.Some(1).flatMap(callback);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(1);
    });
    it('should always use the forEach() callback', function () {
        var callback = jest.fn();
        new some_1.Some(1).forEach(callback);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(1);
    });
    it('should return its own value for get()', function () {
        expect(new some_1.Some(1).get()).toBe(1);
    });
    it('should return its own value for getOrElse()', function () {
        expect(new some_1.Some(1).getOrElse({})).toBe(1);
    });
    it('should return itself for orElse()', function () {
        var someOne = new some_1.Some(1);
        expect(someOne.orElse(new some_1.Some({}))).toBe(someOne);
    });
    it('should false for isDefined()', function () {
        expect(new some_1.Some(1).isDefined()).toBe(true);
    });
    it('should true for isEmpty()', function () {
        expect(new some_1.Some(1).isEmpty()).toBe(false);
    });
    it('should return execute the callback and wrap its result in an optional for map()', function () {
        expect(new some_1.Some(1).map(function (_) { return _ + 1; })).toBeInstanceOf(some_1.Some);
        expect(new some_1.Some(1).map(function (_) { return _ + 1; }).get()).toBe(2);
        expect(new some_1.Some({}).map(function (_) { return _.length; })).toBeInstanceOf(none_1.None);
        var callback = jest.fn();
        new some_1.Some(1).map(callback);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(1);
    });
    it('should return an array with only its own value for toArray()', function () {
        expect(new some_1.Some(1).toArray()).toEqual([1]);
    });
});
