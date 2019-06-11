import { None } from './none';
import { OptionalHelper } from './optional-helper';
import { Some } from './some';

describe('optional', () => {
  it('should wrap any non-null and non-undefined value in Some', () => {
    const opt123 = OptionalHelper.of(123);
    expect(opt123).toBeInstanceOf(Some);
    expect(opt123.get()).toBe(123);
    const optTest = OptionalHelper.of('test');
    expect(optTest).toBeInstanceOf(Some);
    expect(optTest.get()).toBe('test');
    const obj = { a: 'b' };
    const optObj = OptionalHelper.of(obj);
    expect(optObj).toBeInstanceOf(Some);
    expect(optObj.get()).toBe(obj);
  });
  it('should return None for null and undefined', () => {
    expect(OptionalHelper.of(null)).toBeInstanceOf(None);
    expect(OptionalHelper.of(undefined)).toBeInstanceOf(None);
    const a = {} as any;
    expect(OptionalHelper.of(a.b)).toBeInstanceOf(None);
  });
});

describe('truthyOptional', () => {
  it('should wrap any truthy value in Some', () => {
    const opt123 = OptionalHelper.ofTruthy(123);
    expect(opt123).toBeInstanceOf(Some);
    expect(opt123.get()).toBe(123);
    const optTest = OptionalHelper.ofTruthy('test');
    expect(optTest).toBeInstanceOf(Some);
    expect(optTest.get()).toBe('test');
    const obj = { a: 'b' };
    const optObj = OptionalHelper.ofTruthy(obj);
    expect(optObj).toBeInstanceOf(Some);
    expect(optObj.get()).toBe(obj);
    const obj2 = [];
    const optObj2 = OptionalHelper.ofTruthy(obj2);
    expect(optObj2).toBeInstanceOf(Some);
    expect(optObj2.get()).toBe(obj2);
    const obj3 = {};
    const optObj3 = OptionalHelper.ofTruthy(obj3);
    expect(optObj3).toBeInstanceOf(Some);
    expect(optObj3.get()).toBe(obj3);
  });
  it('should return None for any falsy value', () => {
    expect(OptionalHelper.ofTruthy(null)).toBeInstanceOf(None);
    expect(OptionalHelper.ofTruthy(undefined)).toBeInstanceOf(None);
    const a = {} as any;
    expect(OptionalHelper.ofTruthy(a.b)).toBeInstanceOf(None);
    expect(OptionalHelper.ofTruthy('')).toBeInstanceOf(None);
    expect(OptionalHelper.ofTruthy(0)).toBeInstanceOf(None);
    expect(OptionalHelper.ofTruthy(NaN)).toBeInstanceOf(None);
  });
});
