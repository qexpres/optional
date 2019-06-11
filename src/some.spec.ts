import { None } from './none';
import { Some } from './some';

describe('A Some', () => {
  describe('equals()', () => {
    it('should return true if the other optional is a Some with the same value', () => {
      const a = new Some(1);
      const b = new Some(1);
      expect(a.equals(a)).toBe(true);
      expect(a.equals(b)).toBe(true);
    });
    it('should return true if the other optional is a Some with a different value', () => {
      const a = new Some(1);
      const b = new Some(2);
      const c = new Some({ a: 1 });
      const d = new Some({ a: 1 });
      expect(a.equals(b)).toBe(false);
      expect(c.equals(d)).toBe(false);
    });
    it('should return false if the other optional is a None', () => {
      expect(new Some({}).equals(new None())).toBe(false);
    });
  });
  it('should return the return value of the executed callback for exists()', () => {
    expect(new Some(1).exists(_ => !!_)).toBe(true);
    expect(new Some(1).exists(_ => !_)).toBe(false);
    const a = {};
    expect(new Some(a).exists(_ => _ === a)).toBe(true);
    const callback = jest.fn();
    new Some(1).exists(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return itself if the executed callback yield true, otherwise it should return None for filter()', () => {
    const someOne = new Some(1);
    expect(someOne.filter(_ => !!_)).toBe(someOne);
    expect(someOne.filter(_ => !_)).toBeInstanceOf(None);
    const callback = jest.fn();
    new Some(1).filter(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return the callback\'s return value for flatMap()', () => {
    const someOne = new Some(1);
    const returnNone = new None();
    expect(someOne.flatMap(_ => returnNone)).toBe(returnNone);
    expect(someOne.flatMap(_ => new Some(_))).toBeInstanceOf(Some);
    expect(someOne.flatMap(_ => new Some(_))).not.toBe(someOne);
    expect(someOne.flatMap(_ => new Some(_)).get()).toBe(someOne.get());
    const callback = jest.fn();
    new Some(1).flatMap(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should always use the forEach() callback', () => {
    const callback = jest.fn();
    new Some(1).forEach(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return its own value for get()', () => {
    expect(new Some(1).get()).toBe(1);
  });
  it('should return itself for or()', () => {
    const a = new Some({});
    expect(a.or(() => new None())).toBe(a);
  });
  it('should its own value for orElse()', () => {
    const a = {};
    expect(new Some(a).orElse(2)).toBe(a);
  });
  it('should its own value for orElseGet()', () => {
    const a = {};
    expect(new Some(a).orElseGet(() => 2)).toBe(a);
  });
  it('should return its own value for orNull()', () => {
    expect(new Some(1).orNull()).toBe(1);
  });
  it('should return its own value for orThrow()', () => {
    expect(new Some(1).orThrow()).toBe(1);
  });
  it('should return its own value for orUndefined()', () => {
    expect(new Some(1).orUndefined()).toBe(1);
  });
  it('should return false for isDefined()', () => {
    expect(new Some(1).isDefined()).toBe(true);
  });
  it('should return true for isEmpty()', () => {
    expect(new Some(1).isEmpty()).toBe(false);
  });
  it('should return execute the callback and wrap its result in an optional for map()', () => {
    expect(new Some(1).map(_ => _ + 1)).toBeInstanceOf(Some);
    expect(new Some(1).map(_ => _ + 1).get()).toBe(2);
    expect(new Some<any>({}).map(_ => _.length)).toBeInstanceOf(None);
    const callback = jest.fn();
    new Some(1).map(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
  it('should return an array with only its own value for toArray()', () => {
    expect(new Some(1).toArray()).toEqual([1]);
  });
  it('should return an array with only its own value for toString()', () => {
    expect(new Some(1).toString()).toEqual('Some(1)');
  });
});
