import { Some } from './some';
import { None } from './none';

describe('A Some', () => {
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
  it("should return the callback's return value for flatMap()", () => {
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
  it('should return its own value for getOrElse()', () => {
    expect(new Some(1).getOrElse({})).toBe(1);
  });
  it('should return itself for orElse()', () => {
    const someOne = new Some(1);
    expect(someOne.orElse(new Some({}))).toBe(someOne);
  });
  it('should false for isDefined()', () => {
    expect(new Some(1).isDefined()).toBe(true);
  });
  it('should true for isEmpty()', () => {
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
});
