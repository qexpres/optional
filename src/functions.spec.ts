import { opt, truthyOpt } from './functions';
import { None } from './none';
import { Optional } from './optional';
import { Some } from './some';

describe('Optional', () => {
  describe('of()', () => {
    it('should wrap any non-null and non-undefined value in Some', () => {
      const opt123 = opt(123);
      expect(opt123).toBeInstanceOf(Some);
      expect(opt123.get()).toBe(123);
      const optTest = opt('test');
      expect(optTest).toBeInstanceOf(Some);
      expect(optTest.get()).toBe('test');
      const obj = { a: 'b' };
      const optObj = opt(obj);
      expect(optObj).toBeInstanceOf(Some);
      expect(optObj.get()).toBe(obj);
    });
    it('should return None for null and undefined', () => {
      expect(opt(null)).toBeInstanceOf(None);
      expect(opt(undefined)).toBeInstanceOf(None);
      const a = {} as any;
      expect(opt(a.b)).toBeInstanceOf(None);
    });
  });

  describe('ofTruthy()', () => {
    it('should wrap any truthy value in Some', () => {
      const opt123 = truthyOpt(123);
      expect(opt123).toBeInstanceOf(Some);
      expect(opt123.get()).toBe(123);
      const optTest = truthyOpt('test');
      expect(optTest).toBeInstanceOf(Some);
      expect(optTest.get()).toBe('test');
      const obj = { a: 'b' };
      const optObj = truthyOpt(obj);
      expect(optObj).toBeInstanceOf(Some);
      expect(optObj.get()).toBe(obj);
      const obj2 = [];
      const optObj2 = truthyOpt(obj2);
      expect(optObj2).toBeInstanceOf(Some);
      expect(optObj2.get()).toBe(obj2);
      const obj3 = {};
      const optObj3 = truthyOpt(obj3);
      expect(optObj3).toBeInstanceOf(Some);
      expect(optObj3.get()).toBe(obj3);
    });
    it('should return None for any falsy value', () => {
      expect(truthyOpt(null)).toBeInstanceOf(None);
      expect(truthyOpt(undefined)).toBeInstanceOf(None);
      const a = {} as any;
      expect(truthyOpt(a.b)).toBeInstanceOf(None);
      expect(truthyOpt('')).toBeInstanceOf(None);
      expect(truthyOpt(0)).toBeInstanceOf(None);
      expect(truthyOpt(NaN)).toBeInstanceOf(None);
    });
  });
});
