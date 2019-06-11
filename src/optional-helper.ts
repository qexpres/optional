import { nil } from './nil';
import { None } from './none';
import { Optional } from './optional';
import { Some } from './some';

export class OptionalHelper {
  private static _empty: Optional<any>;

  /**
   * Simply returns a None. This method will always return the same instance. You should never check for equality using
   * the === operator. Use methods like isEmpty() or equals() instead.
   * @return the None
   */
  public static empty<T>(): Optional<T> {
    if (typeof OptionalHelper._empty === 'undefined') {
      OptionalHelper._empty = new None();
    }
    return OptionalHelper._empty;
  }

  /**
   * Validates whether the given value is defined or not and returns an Optional. Returns a None if the value is null or
   * undefined; otherwise returns a Some of the given value.
   * In case of returning a None, it will always return the some instance.
   *
   * @see OptionalHelper.empty()
   * @param value
   * @return the Optional
   */
  public static of<T>(value: T | nil): Optional<T> {
    return value === null || typeof value === 'undefined' ? OptionalHelper.empty() : new Some(value);
  }

  /**
   * Validates whether the given value is truthy and returns an Optional. Returns a None if the value evaluates to
   * false; otherwise returns a Some of the given value.
   * In case of returning a None, it will always return the some instance.
   *
   * @see OptionalHelper.empty()
   * @param value
   * @return the Optional
   */
  public static ofTruthy<T>(value: T | nil): Optional<T> {
    return value ? new Some(value) : OptionalHelper.empty();
  }
}
