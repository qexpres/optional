import { Optional } from './optional';

export class Some<T> implements Optional<T> {
  constructor(public readonly value: T) {}

  public [Symbol.iterator](): IterableIterator<T> {
    return this.toArray().values();
  }

  public equals<S>(other: Optional<S & T>): boolean {
    return other.isDefined() && other.get() === this.value;
  }

  public exists(predicate: (value: T) => boolean): boolean {
    return predicate(this.value);
  }

  public filter(predicate: (value: T) => boolean): Optional<T> {
    return this.exists(predicate) ? this : Optional.empty();
  }

  public flatMap<S>(mapper: (value: T) => Optional<S>): Optional<S> {
    return mapper(this.value);
  }

  public forEach(consumer: (value: T) => void): void {
    consumer(this.value);
  }

  public get(): T {
    return this.value;
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

  public orNull(): T {
    return this.value;
  }

  public orThrow(): T {
    return this.value;
  }

  public orUndefined(): T {
    return this.value;
  }

  public isDefined(): boolean {
    return true;
  }

  public isEmpty(): boolean {
    return false;
  }

  public map<S>(mapper: (value: T) => S | null | undefined): Optional<S> {
    return Optional.of(mapper(this.value));
  }

  public tap(consumer: (value: T) => any): Optional<T> {
    this.forEach(consumer);
    return this;
  }

  public toArray(): T[] {
    return [this.value];
  }

  public toString(): string {
    return `Some(${this.value})`;
  }
}
