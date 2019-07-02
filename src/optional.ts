import { nil } from './nil';
import { None } from './none';
import { Some } from './some';

export class Optional<T> {
  private static _empty: Optional<any>;

  /**
   * Simply returns a None. This method will always return the same instance. You should never check for equality using
   * the === operator. Use methods like isEmpty() or equals() instead.
   * @return the None
   */
  public static empty<T>(): Optional<T> {
    if (typeof Optional._empty === 'undefined') {
      Optional._empty = new None();
    }
    return Optional._empty;
  }

  /**
   * Validates whether the given value is defined or not and returns an Optional. Returns a None if the value is null or
   * undefined; otherwise returns a Some of the given value.
   * In case of returning a None, it will always return the some instance.
   *
   * @see Optional.empty()
   * @param value the value to base the Optional on
   * @return the Optional
   */
  public static of<T>(value: T | nil): Optional<T> {
    return value === null || typeof value === 'undefined' ? Optional.empty() : new Some(value);
  }

  /**
   * Validates whether the given value is truthy and returns an Optional. Returns a None if the value evaluates to
   * false; otherwise returns a Some of the given value.
   * In case of returning a None, it will always return the some instance.
   *
   * @see Optional.empty()
   * @param value the value to base the Optional on
   * @return the Optional
   */
  public static ofTruthy<T>(value: T | nil): Optional<T> {
    return value ? new Some(value) : Optional.empty();
  }
}


export interface Optional<T> {
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
   * TODO: @return
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
   * TODO: docs
   */
  map<S>(f: (value: T) => S | nil): Optional<S>;

  /**
   * TODO: docs
   */
  or(f: () => Optional<T>): Optional<T>;

  /**
   * TODO: docs
   */
  orElse(value: T): T;

  /**
   * TODO: docs
   */
  orElseGet(f: () => T): T;

  /**
   * TODO: docs
   */
  orNull(): T | null;

  /**
   * TODO: docs
   */
  orThrow<E extends Error>(e: () => E): T;

  /**
   * TODO: docs
   */
  orUndefined(): T | undefined;

  /**
   * TODO: docs
   */
  toArray(): T[];

  /**
   * TODO: docs
   */
  toString(): string;
}
