import { nil } from './nil';
import { OptionalHelper } from './optional-helper';

export const Optional = OptionalHelper;

export interface Optional<T> {
  equals<S>(other: Optional<S>): boolean;

  exists(f: (value: T) => boolean): boolean;

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
