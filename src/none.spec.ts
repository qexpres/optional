import { None } from './none';
import { none } from './functions';

describe('A None', () => {
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
    expect(() => new None().get()).toThrow('Cannot get empty optional');
  });
  it('should return the alternative value for getOrElse()', () => {
    const a = {};
    expect(new None().getOrElse(a)).toBe(a);
  });
  it('should return the alternative optional for orElse()', () => {
    const a = none();
    expect(new None().orElse(a)).toBe(a);
  });
  it('should false for isDefined()', () => {
    expect(new None().isDefined()).toBe(false);
  });
  it('should true for isEmpty()', () => {
    expect(new None().isEmpty()).toBe(true);
  });
  it('should return None for map()', () => {
    const callback = jest.fn();
    expect(new None().map(callback)).toBeInstanceOf(None);
    expect(callback).toHaveBeenCalledTimes(0);
  });
  it('should return an empty array for toArray()', () => {
    expect(new None().toArray()).toEqual([]);
  });
});
