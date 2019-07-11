import { Optional } from './optional';

export class None<T> extends Optional<T> {
  public constructor() {
    super();
  }

  public contains(value: any): boolean {
    return false;
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

  public forEach(consumer: (value: T) => any): void {
    // do nothing
  }

  public isDefined(): boolean {
    return false;
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

  public orThrow<E extends Error>(thrower: () => E): T {
    throw thrower();
  }

  public map<S>(f: (value: T) => S | null | undefined): Optional<S> {
    return Optional.empty();
  }

  public toArray(): T[] {
    return [];
  }

  public toString(): string {
    return 'None()';
  }
}
