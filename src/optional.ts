import { NoSuchElementException } from './no-such-element-exception';
import { None } from './none';
import { Some } from './some';

export abstract class Optional<T> {
  public static none: Optional<any>;
  public static resolver: <S>(value: S | undefined | null) => Optional<S>;

  public static empty<S>(): Optional<S> {
    return Optional.none;
  }

  public static of<S>(value: S | undefined | null): Optional<S> {
    return Optional.resolver(value);
  }

  public static ofTruthy<S>(value: S | undefined | null | false): Optional<S> {
    return Optional.of(value || null);
  }

  /**
   * If the value is present, and it matches the given value, return true; otherwise return false.
   * @param value the value
   * @return true if the value is present and matches the given value; otherwise false
   */
  public abstract contains(value: any): boolean;

  /**
   * Checks if the given Optional for equality. Two Optionals are equal if they are both empty or if they both contain
   * the same value.
   * @param other the optional to compare with
   * @return true if they are equal; otherwise false
   */
  public abstract equals<S>(other: Optional<S>): boolean;

  /**
   * If the value is present, and it matches the given predicate, return true; otherwise return false.
   * @param predicate the predicate
   * @return true if the value is present and matches the given predicate; otherwise false
   */
  public abstract exists(predicate: (value: T) => boolean): boolean;

  /**
   * If the value is present, and it matches the given predicate, return an Optional containing this value; otherwise
   * return an empty Optional.
   * @param predicate the predicate
   * @return an Optional with this value if the value is present and matches the given predicate; otherwise an empty
   * Optional
   */
  public abstract filter(predicate: (value: T) => boolean): Optional<T>;

  /**
   * If the value is present, apply the mapper function to it, and return the Optional that it produces. Otherwise
   * return an empty Optional.
   * @param mapper the mapper function
   * @return the Optional that the mapper produces; otherwise an empty Optional
   */
  public abstract flatMap<S>(mapper: (value: T) => Optional<S>): Optional<S>;

  /**
   * If the value is present, invoke the consumer function, otherwise do nothing.
   * @param consumer the consumer function
   */
  public abstract forEach(consumer: (value: T) => any): void;

  /**
   * TODO: docs
   */
  public abstract isDefined(): boolean;

  /**
   * If the value is present, apply the mapper function to it, and return an Optional based on the value that it
   * produces. Otherwise return an empty Optional. The mapper's result will be evaluated and null and undefined result
   * in an empty Optional.
   * @param mapper the mapper function
   * @return an Optional based on the value that the mapper produces; otherwise an empty Optional
   */
  public abstract map<S>(mapper: (value: T) => S | undefined | null): Optional<S>;

  /**
   * TODO: docs
   */
  public abstract or<S>(supplier: () => Optional<S>): Optional<S | T>;

  /**
   * TODO: docs
   */
  public abstract orElse<S>(value: S): S | T;

  /**
   * TODO: docs
   */
  public abstract orElseGet<S>(supplier: () => S): S | T;

  /**
   * TODO: docs
   */
  public abstract orThrow<E extends Error>(thrower: () => E): T;

  /**
   * TODO: docs
   */
  public abstract toArray(): T[];

  /**
   * TODO: docs
   */
  public abstract toString(): string;

  public [Symbol.iterator](): IterableIterator<T> {
    return this.toArray().values();
  }

  /**
   * TODO: docs
   */
  public get(): T {
    return this.orThrow(() => new NoSuchElementException());
  }

  /**
   * TODO: docs
   */
  public isEmpty(): boolean {
    return !this.isDefined();
  }

  /**
   * Similar to forEach(), if the value is present, invoke the consumer function, otherwise do nothing. Returns this
   * Optional for chaining purposes.
   * @param consumer the consumer function
   */
  public tap(consumer: (value: T) => any): Optional<T> {
    this.forEach(consumer);
    return this;
  }

  /**
   * TODO: docs
   */
  public orNull(): T | null {
    return this.orElse(null);
  }

  /**
   * TODO: docs
   */
  public orUndefined(): T | undefined {
    return this.orElse(undefined);
  }
}

Optional.none = new None();
Optional.resolver = value => (value === null || typeof value === 'undefined' ? Optional.empty() : new Some(value));
