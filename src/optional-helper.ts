import { nil } from './nil';
import { None } from './none';
import { Optional } from './optional';
import { Some } from './some';

export class OptionalHelper {
  private static _empty: Optional<any>;

  public static empty<T>(): Optional<T> {
    if (typeof OptionalHelper._empty === 'undefined') {
      OptionalHelper._empty = new None();
    }
    return OptionalHelper._empty;
  }

  public static of<T>(value: T | nil): Optional<T> {
    return value === null || typeof value === 'undefined' ? OptionalHelper.empty() : new Some(value);
  }

  public static ofTruthy<T>(value: T | nil): Optional<T> {
    return value ? new Some(value) : OptionalHelper.empty();
  }
}
