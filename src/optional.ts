import { None } from './none';
import { Some } from './some';

let none: None<any>;
export const Optional = Object.freeze({
  /**
   * Simply returns a None. This method will always return the same instance. You should never check for equality using
   * the === operator. Use methods like isEmpty() or equals() instead.
   * @return the None
   */
  empty<T>(): Optional<T> {
    if (typeof none === 'undefined') {
      none = new None();
    }
    return none;
  },

  /**
   * Validates whether the given value is defined or not and returns an Optional. Returns a None if the value is null or
   * undefined; otherwise returns a Some of the given value.
   * In case of returning a None, it will always return the some instance.
   *
   * @see Optional.empty()
   * @param value the value to base the Optional on
   * @return the Optional
   */
  of<T>(value: T | undefined | null): Optional<T> {
    return value === null || typeof value === 'undefined' ? Optional.empty() : new Some(value);
  },

  /**
   * Validates whether the given value is truthy and returns an Optional. Returns a None if the value evaluates to
   * false; otherwise returns a Some of the given value.
   * In case of returning a None, it will always return the some instance.
   *
   * @see Optional.empty()
   * @param value the value to base the Optional on
   * @return the Optional
   */
  ofTruthy<T>(value: T | undefined | null | false): Optional<T> {
    return value ? new Some(value) : Optional.empty();
  },
});

export interface Optional<T> {
  [Symbol.iterator](): IterableIterator<T>;

  /**
   * Checks if the given Optional for equality. Two Optionals are equal if they are both empty or if they both contain
   * the same value.
   * @param other the optional to compare with
   * @return true if they are equal; otherwise false
   */
  equals<S>(other: Optional<S>): boolean;

  /**
   * If the value is present, and it matches the given predicate, return true; otherwise return false.
   * @param predicate the predicate
   */
  exists(predicate: (value: T) => boolean): boolean;

  /**
   * If the value is present, and it matches the given predicate, return an Optional containing this value; otherwise
   * return an empty Optional.
   * @param predicate the predicate
   * TODO: @return
   */
  filter(predicate: (value: T) => boolean): Optional<T>;

  /**
   * If the value is present, apply the mapper function to it, and return the Optional that it produces. Otherwise
   * return an empty Optional.
   * @param mapper the mapper function
   * TODO: @return
   */
  flatMap<S>(mapper: (value: T) => Optional<S>): Optional<S>;

  /**
   * If the value is present, invoke the consumer function, otherwise do nothing.
   * @param consumer the consumer function
   */
  forEach(consumer: (value: T) => any): void;

  /**
   * TODO: docs
   */
  get(): T;

  /**
   * TODO: docs
   */
  isDefined(): boolean;

  /**
   * TODO: docs
   */
  isEmpty(): boolean;

  /**
   * If the value is present, apply the mapper function to it, and return an Optional based on the value that it
   * produces. Otherwise return an empty Optional. The mapper's result will be evaluated and null and undefined result
   * in an empty Optional.
   * @param mapper the mapper function
   * @return an Optional based on the value that the mapper produces; otherwise an empty Optional
   */
  map<S>(mapper: (value: T) => S | undefined | null): Optional<S>;

  /**
   * TODO: docs
   */
  or<S>(supplier: () => Optional<S>): Optional<S | T>;

  /**
   * TODO: docs
   */
  orElse<S>(value: S): S | T;

  /**
   * TODO: docs
   */
  orElseGet<S>(supplier: () => S): S | T;

  /**
   * TODO: docs
   */
  orNull(): T | null;

  /**
   * TODO: docs
   */
  orThrow<E extends Error>(thrower: () => E): T;

  /**
   * TODO: docs
   */
  orUndefined(): T | undefined;

  /**
   * Similar to forEach(), if the value is present, invoke the consumer function, otherwise do nothing. Returns this
   * Optional for chaining purposes.
   * @param consumer the consumer function
   */
  tap(consumer: (value: T) => any): Optional<T>;

  /**
   * TODO: docs
   */
  toArray(): T[];

  /**
   * TODO: docs
   */
  toString(): string;
}
