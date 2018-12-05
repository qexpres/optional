import { none } from './functions';
import { Optional } from './optional';

export class None<T> extends Optional<T> {
  public exists(f: (value: T) => boolean): boolean {
    return false;
  }

  public filter(f: (value: T) => boolean): Optional<T> {
    return this;
  }

  public flatMap<S>(f: (value: T) => Optional<S>): Optional<S> {
    return none();
  }

  public forEach(f: (value: T) => void): void {
    // do nothing
  }

  public get(): T {
    throw new Error('Cannot get empty optional');
  }

  public getOrElse<S>(value: S): S {
    return value;
  }

  public orElse<S>(value: Optional<S>): Optional<S> {
    return value;
  }

  public orNull(): null {
    return null;
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

  public map<S>(f: (value: T) => S | null | undefined): None<S> {
    return none();
  }

  public toArray(): T[] {
    return [];
  }
}
