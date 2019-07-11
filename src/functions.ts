import { Optional } from './optional';

/**
 * @alias for Optional.empty()
 * @see Optional
 */
export function none<T>(): Optional<T> {
  return Optional.empty();
}

/**
 * @alias for Optional.of()
 * @see Optional
 */
export function opt<T>(value: T | undefined | null): Optional<T> {
  return Optional.of(value);
}

/**
 * @alias for Optional.ofTruthy()
 * @see Optional
 */
export function truthyOpt<T>(value: T | undefined | null | false): Optional<T> {
  return Optional.ofTruthy(value);
}
