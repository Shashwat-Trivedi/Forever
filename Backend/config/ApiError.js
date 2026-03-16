class ApiError extends Error {
  constructor(
    statuscode,
    message = 'something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statuscode = statuscode;
    this.message = message;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      statuscode: this.statuscode,
      message: this.message,
      errors: this.errors,
    };
  }
}

export { ApiError };
