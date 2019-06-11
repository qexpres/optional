import { nil } from './nil';
import { OptionalHelper } from './optional-helper';

export const Optional = OptionalHelper;

export interface Optional<T> {
  /**
   * Checks if the given Optional equals this optional. An Optional is equal if it is of the same type (None or Some)
   * and hold the same value, if any.
   * @param other the optional to compare with
   * @return true if they are equal; otherwise false
   */
  equals<S>(other: Optional<S>): boolean;

  /**
   * If the Optional contains a value return the result of the given filter function; otherwise return false.
   * @param filter the filter
   */
  exists(filter: (value: T) => boolean): boolean;

  filter(f: (value: T) => boolean): Optional<T>;

  flatMap<S>(f: (value: T) => Optional<S>): Optional<S>;

  forEach(f: (value: T) => any): void;

  get(): T;

  isDefined(): boolean;

  isEmpty(): boolean;

  map<S>(f: (value: T) => S | nil): Optional<S>;

  or(f: () => Optional<T>): Optional<T>;

  orElse(value: T): T;

  orElseGet(f: () => T): T;

  orNull(): T | null;

  orThrow<E extends Error>(e: () => E): T;

  orUndefined(): T | undefined;

  toArray(): T[];

  toString(): string;
}
