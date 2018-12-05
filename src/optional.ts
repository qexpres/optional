export abstract class Optional<T> {
  public abstract exists(f: (value: T) => boolean): boolean;

  public abstract filter(f: (value: T) => boolean): Optional<T>;

  public abstract flatMap<S>(f: (value: T) => Optional<S>): Optional<S>;

  public abstract forEach(f: (value: T) => any): void;

  public abstract get(): T;

  public abstract getOrElse<S>(value: S): T | S;

  public abstract isDefined(): boolean;

  public abstract isEmpty(): boolean;

  public abstract map<S>(f: (value: T) => S | null | undefined): Optional<S>;

  public abstract orElse<S>(value: Optional<S>): Optional<S | T>;

  public abstract orNull(): T | null;

  public abstract orUndefined(): T | undefined;

  public abstract toArray(): T[];
}
