import { Optional } from './optional';
import { OptionalHelper } from './optional-helper';

export class Some<T> implements Optional<T> {
  constructor(public readonly value: T) {}

  public equals<S>(other: Optional<S & T>): boolean {
    return other.isDefined() && other.get() === this.value;
  }

  public exists(f: (value: T) => boolean): boolean {
    return f(this.value);
  }

  public filter(f: (value: T) => boolean): Optional<T> {
    return this.exists(f) ? this : OptionalHelper.empty();
  }

  public flatMap<S>(f: (value: T) => Optional<S>): Optional<S> {
    return f(this.value);
  }

  public forEach(f: (value: T) => void): void {
    f(this.value);
  }

  public get(): T {
    return this.value;
  }

  public or(f: () => Optional<T>): Optional<T> {
    return this;
  }

  public orElse(value: T): T {
    return this.value;
  }

  public orElseGet(f: () => T): T {
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

  public map<S>(f: (value: T) => S | null | undefined): Optional<S> {
    return OptionalHelper.of(f(this.value));
  }

  public toArray(): T[] {
    return [this.value];
  }

  public toString(): string {
    return `Some(${this.value})`;
  }
}
