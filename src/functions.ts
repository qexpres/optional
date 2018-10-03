import { Optional } from './optional';
import { Some } from './some';
import { None } from './none';

export function optional<T>(value: T | null | undefined): Optional<T> {
  return value === null || typeof value === 'undefined' ? none() : some(value);
}

export function some<T>(value: T): Some<T> {
  return new Some<T>(value);
}

export function none<T>(): None<T> {
  return new None<T>();
}

export function truthyOptional<T>(value: T | null | undefined): Optional<T> {
  return optional(value).filter(_ => !!_);
}
