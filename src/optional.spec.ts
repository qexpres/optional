import { None } from './none';
import { Optional } from './optional';
import { Some } from './some';

describe('optional', () => {
  it('should wrap any non-null and non-undefined value in Some', () => {
    const opt123 = Optional.of(123);
    expect(opt123).toBeInstanceOf(Some);
    expect(opt123.get()).toBe(123);
    const optTest = Optional.of('test');
    expect(optTest).toBeInstanceOf(Some);
    expect(optTest.get()).toBe('test');
    const obj = { a: 'b' };
    const optObj = Optional.of(obj);
    expect(optObj).toBeInstanceOf(Some);
    expect(optObj.get()).toBe(obj);
  });
  it('should return None for null and undefined', () => {
    expect(Optional.of(null)).toBeInstanceOf(None);
    expect(Optional.of(undefined)).toBeInstanceOf(None);
    const a = {} as any;
    expect(Optional.of(a.b)).toBeInstanceOf(None);
  });
});

describe('truthyOptional', () => {
  it('should wrap any truthy value in Some', () => {
    const opt123 = Optional.ofTruthy(123);
    expect(opt123).toBeInstanceOf(Some);
    expect(opt123.get()).toBe(123);
    const optTest = Optional.ofTruthy('test');
    expect(optTest).toBeInstanceOf(Some);
    expect(optTest.get()).toBe('test');
    const obj = { a: 'b' };
    const optObj = Optional.ofTruthy(obj);
    expect(optObj).toBeInstanceOf(Some);
    expect(optObj.get()).toBe(obj);
    const obj2 = [];
    const optObj2 = Optional.ofTruthy(obj2);
    expect(optObj2).toBeInstanceOf(Some);
    expect(optObj2.get()).toBe(obj2);
    const obj3 = {};
    const optObj3 = Optional.ofTruthy(obj3);
    expect(optObj3).toBeInstanceOf(Some);
    expect(optObj3.get()).toBe(obj3);
  });
  it('should return None for any falsy value', () => {
    expect(Optional.ofTruthy(null)).toBeInstanceOf(None);
    expect(Optional.ofTruthy(undefined)).toBeInstanceOf(None);
    const a = {} as any;
    expect(Optional.ofTruthy(a.b)).toBeInstanceOf(None);
    expect(Optional.ofTruthy('')).toBeInstanceOf(None);
    expect(Optional.ofTruthy(0)).toBeInstanceOf(None);
    expect(Optional.ofTruthy(NaN)).toBeInstanceOf(None);
  });
});
