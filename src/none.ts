import { NoSuchElementException } from './no-such-element-exception';
import { Optional } from './optional';

export class None<T> implements Optional<T> {
  public [Symbol.iterator](): IterableIterator<T> {
    return this.toArray().values();
  }

  public equals<S>(other: Optional<S>): boolean {
    return other.isEmpty();
  }

  public exists(predicate: (value: T) => boolean): boolean {
    return false;
  }

  public filter(predicate: (value: T) => boolean): Optional<T> {
    return this;
  }

  public flatMap<S>(mapper: (value: T) => Optional<S>): Optional<S> {
    return Optional.empty();
  }

  public forEach(consumer: (value: T) => void): void {
    // do nothing
  }

  public get(): T {
    throw new NoSuchElementException();
  }

  public or<S>(supplier: () => Optional<S>): Optional<S | T> {
    return supplier();
  }

  public orElse<S>(other: S): S | T {
    return other;
  }

  public orElseGet<S>(supplier: () => S): S | T {
    return supplier();
  }

  public orNull(): null {
    return null;
  }

  public orThrow<E extends Error>(thrower: () => E): never {
    throw thrower();
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

  public map<S>(mapper: (value: T) => S | null | undefined): Optional<S> {
    return Optional.empty();
  }

  public tap(consumer: (value: T) => any): Optional<T> {
    return this;
  }

  public toArray(): T[] {
    return [];
  }

  public toString(): string {
    return 'None()';
  }
}
