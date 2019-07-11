import { NoSuchElementException } from './no-such-element-exception';
import { None } from './none';
import { Some } from './some';

describe('A None', () => {
  it('should never run a for loop', () => {
    let i = 0;
    for (const val of new None()) {
      i++;
      fail('None returned value = ' + val);
    }
    expect(i).toBe(0);
  });
  describe('equals()', () => {
    it('should return true if the other optional is a None', () => {
      const a = new None();
      const b = new None();
      expect(a.equals(a)).toBe(true);
      expect(a.equals(b)).toBe(true);
    });
    it('should return false if the other optional is a Some', () => {
      expect(new None().equals(new Some({}))).toBe(false);
    });
  });
  it('should return false for exists()', () => {
    const callback = jest.fn();
    expect(new None().exists(callback)).toBe(false);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return None for filter()', () => {
    const callback = jest.fn();
    expect(new None().filter(callback)).toBeInstanceOf(None);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return None for flatMap()', () => {
    const callback = jest.fn();
    expect(new None().flatMap(callback)).toBeInstanceOf(None);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should never use the forEach() callback', () => {
    const callback = jest.fn();
    new None().forEach(callback);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should throw an Error for get()', () => {
    expect(() => new None().get()).toThrow(NoSuchElementException);
  });
  it("should return the alternative function's result for or()", () => {
    const a = new Some({});
    expect(new None().or(() => a)).toBe(a);
  });
  it('should return the alternative value for orElse()', () => {
    const a = {};
    expect(new None().orElse(a)).toBe(a);
  });
  it("should return the alternative function's result for orElseGet()", () => {
    const a = {};
    expect(new None().orElseGet(() => a)).toBe(a);
  });
  it('should return null for orNull()', () => {
    expect(new None().orNull()).toBeNull();
  });
  it('should throw an error for orThrow()', () => {
    const e = new Error('Test error');
    expect(() => new None().orThrow(() => e)).toThrow(e);
  });
  it('should return undefined for orUndefined()', () => {
    expect(new None().orUndefined()).toBeUndefined();
  });
  it('should return false for isDefined()', () => {
    expect(new None().isDefined()).toBe(false);
  });
  it('should return true for isEmpty()', () => {
    expect(new None().isEmpty()).toBe(true);
  });
  it('should return None for map()', () => {
    const callback = jest.fn();
    expect(new None().map(callback)).toBeInstanceOf(None);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should never use the tap() callback', () => {
    const callback = jest.fn();
    new None().tap(callback);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return itself for tap()', () => {
    const none = new None();
    expect(none.tap(() => {})).toBe(none);
  });
  it('should return an empty array for toArray()', () => {
    expect(new None().toArray()).toEqual([]);
  });
  it('should return a string representation for toString()', () => {
    expect(new None().toString()).toBe('None()');
  });
});
