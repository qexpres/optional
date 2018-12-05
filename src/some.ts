import { none, optional } from './functions';
import { Optional } from './optional';

export class Some<T> extends Optional<T> {
  constructor(public readonly value: T) {
    super();
  }

  public exists(f: (value: T) => boolean): boolean {
    return f(this.value);
  }

  public filter(f: (value: T) => boolean): Optional<T> {
    return this.exists(f) ? this : none();
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

  public getOrElse<S>(value: S): T {
    return this.value;
  }

  public orElse<S>(value: Optional<S>): Some<T> {
    return this;
  }

  public orNull(): T {
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
    return optional(f(this.value));
  }

  public toArray(): T[] {
    return [this.value];
  }
}
