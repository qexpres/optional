import { None } from './none';
import { Optional } from './optional';
import { Some } from './some';

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

export function flatten<T>(array: Array<Optional<T>>): T[] {
  return array.reduce((somes, current) => [...somes, ...current.toArray()], []);
}
