import { None } from './none';
import { Optional } from './optional';
import { Some } from './some';

const noneInstance: None<any> = new None();

/**
 * Simply returns a None. This method will always return the same instance. You should never check for equality using
 * the === operator. Use methods like isEmpty() or equals() instead.
 * @return the None
 */
export function none<T>(): Optional<T> {
  return noneInstance;
}

/**
 * Validates whether the given value is defined or not and returns an Optional. Returns a None if the value is null or
 * undefined; otherwise returns a Some of the given value.
 * In case of returning a None, it will always return the same instance.
 *
 * @see none()
 * @param value the value to base the Optional on
 * @return the Optional
 */
export function opt<T>(value: T | undefined | null): Optional<T> {
  return value === null || typeof value === 'undefined' ? none() : new Some(value);
}

/**
 * Validates whether the given value is truthy and returns an Optional. Returns a None if the value evaluates to
 * false; otherwise returns a Some of the given value.
 * In case of returning a None, it will always return the same instance.
 *
 * @see none()
 * @param value the value to base the Optional on
 * @return the Optional
 */
export function truthyOpt<T>(value: T | undefined | null | false): Optional<T> {
  return opt(value || null);
}
