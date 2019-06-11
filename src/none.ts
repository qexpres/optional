import { NoSuchElementException } from './no-such-element-exception';
import { Optional } from './optional';
import { OptionalHelper } from './optional-helper';

export class None<T> implements Optional<T> {
  public equals<S>(other: Optional<S>): boolean {
    return other.isEmpty();
  }

  public exists(f: (value: T) => boolean): boolean {
    return false;
  }

  public filter(f: (value: T) => boolean): Optional<T> {
    return this;
  }

  public flatMap<S>(f: (value: T) => Optional<S>): Optional<S> {
    return OptionalHelper.empty();
  }

  public forEach(f: (value: T) => void): void {
    // do nothing
  }

  public get(): T {
    throw new NoSuchElementException();
  }

  public or(f: () => Optional<T>): Optional<T> {
    return f();
  }

  public orElse(other: T): T {
    return other;
  }

  public orElseGet(f: () => T): T {
    return f();
  }

  public orNull(): null {
    return null;
  }

  public orThrow<E extends Error>(e: () => E): never {
    throw e();
  }

  public orUndefined(): undefined {
    return undefined;
  }

  public isDefined(): boolean {
    return false;
  }

  public isEmpty(): boolean {
    return true;
  }

  public map<S>(f: (value: T) => S | null | undefined): Optional<S> {
    return OptionalHelper.empty();
  }

  public toArray(): T[] {
    return [];
  }

  public toString(): string {
    return 'None()';
  }
}
