import { Optional } from './optional';

export class Some<T> extends Optional<T> {
  public constructor(public readonly value: T) {
    super();
  }

  public contains(value: any): boolean {
    return this.value === value;
  }

  public equals<S>(other: Optional<S & T>): boolean {
    return other.contains(this.value);
  }

  public exists(predicate: (value: T) => boolean): boolean {
    return predicate(this.value);
  }

  public filter(predicate: (value: T) => boolean): Optional<T> {
    return Optional.ofTruthy(this.exists(predicate) && this.value);
  }

  public flatMap<S>(mapper: (value: T) => Optional<S>): Optional<S> {
    return mapper(this.value);
  }

  public forEach(consumer: (value: T) => any): void {
    consumer(this.value);
  }

  public isDefined(): boolean {
    return true;
  }

  public or<S>(supplier: () => Optional<S>): Optional<S | T> {
    return this;
  }

  public orElse<S>(value: S): S | T {
    return this.value;
  }

  public orElseGet<S>(supplier: () => S): S | T {
    return this.value;
  }

  public orThrow<E extends Error>(thrower: () => E): T {
    return this.value;
  }

  public map<S>(mapper: (value: T) => S | null | undefined): Optional<S> {
    return Optional.of(mapper(this.value));
  }

  public toArray(): T[] {
    return [this.value];
  }

  public toString(): string {
    return `Some(${this.value})`;
  }
}
