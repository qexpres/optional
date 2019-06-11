export class NoSuchElementException extends Error {
  public constructor(message: string = 'No value present') {
    super(message);
  }
}
