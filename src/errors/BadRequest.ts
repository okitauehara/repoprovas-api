class BadRequest extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequest';
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}

export default BadRequest;
