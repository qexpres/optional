import { flatten, none, optional, some, truthyOptional } from './functions';
import { None } from './none';
import { Some } from './some';

describe('optional', () => {
  it('should wrap any non-null and non-undefined value in Some', () => {
    const opt123 = optional(123);
    expect(opt123).toBeInstanceOf(Some);
    expect(opt123.get()).toBe(123);
    const optTest = optional('test');
    expect(optTest).toBeInstanceOf(Some);
    expect(optTest.get()).toBe('test');
    const obj = { a: 'b' };
    const optObj = optional(obj);
    expect(optObj).toBeInstanceOf(Some);
    expect(optObj.get()).toBe(obj);
  });
  it('should return None for null and undefined', () => {
    expect(optional(null)).toBeInstanceOf(None);
    expect(optional(undefined)).toBeInstanceOf(None);
    const a = {} as any;
    expect(optional(a.b)).toBeInstanceOf(None);
  });
});

describe('some', () => {
  it('should wrap any value in Some', () => {
    const opt123 = some(123);
    expect(opt123).toBeInstanceOf(Some);
    expect(opt123.get()).toBe(123);
    const optTest = some('test');
    expect(optTest).toBeInstanceOf(Some);
    expect(optTest.get()).toBe('test');
    const obj = { a: 'b' };
    const optObj = some(obj);
    expect(optObj).toBeInstanceOf(Some);
    expect(optObj.get()).toBe(obj);
    const optUndefined = some(undefined);
    expect(optUndefined).toBeInstanceOf(Some);
    expect(optUndefined.get()).toBeUndefined();
    const optNull = some(null);
    expect(optNull).toBeInstanceOf(Some);
    expect(optNull.get()).toBeNull();
    const obj2 = { a: 'b' } as any;
    const optUnset = some(obj2.b);
    expect(optUnset).toBeInstanceOf(Some);
    expect(optUnset.get()).toBeUndefined();
  });
});

describe('none', () => {
  it('should return None', () => {
    expect(none()).toBeInstanceOf(None);
  });
});

describe('truthyOptional', () => {
  it('should wrap any truthy value in Some', () => {
    const opt123 = truthyOptional(123);
    expect(opt123).toBeInstanceOf(Some);
    expect(opt123.get()).toBe(123);
    const optTest = truthyOptional('test');
    expect(optTest).toBeInstanceOf(Some);
    expect(optTest.get()).toBe('test');
    const obj = { a: 'b' };
    const optObj = truthyOptional(obj);
    expect(optObj).toBeInstanceOf(Some);
    expect(optObj.get()).toBe(obj);
    const obj2 = [];
    const optObj2 = truthyOptional(obj2);
    expect(optObj2).toBeInstanceOf(Some);
    expect(optObj2.get()).toBe(obj2);
    const obj3 = {};
    const optObj3 = truthyOptional(obj3);
    expect(optObj3).toBeInstanceOf(Some);
    expect(optObj3.get()).toBe(obj3);
  });
  it('should return None for any falsy value', () => {
    expect(truthyOptional(null)).toBeInstanceOf(None);
    expect(truthyOptional(undefined)).toBeInstanceOf(None);
    const a = {} as any;
    expect(truthyOptional(a.b)).toBeInstanceOf(None);
    expect(truthyOptional('')).toBeInstanceOf(None);
    expect(truthyOptional(0)).toBeInstanceOf(None);
    expect(truthyOptional(NaN)).toBeInstanceOf(None);
  });
});

describe('flatten', () => {
  it('should return the array with the values of all Somes', () => {
    expect(
      flatten([some(1), some(2), none(), none(), some(4), optional(null), optional(undefined), some('kaas')]),
    ).toEqual([1, 2, 4, 'kaas']);
  });
});
