export type RequestErrorContent = {
  message: string;
  context?: { [key: string]: any };
};

export abstract class RequestError extends Error {
  abstract readonly statusCode: number;
  abstract readonly errors: RequestErrorContent[];
  abstract readonly logging: boolean;

  constructor(message: string) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestError.prototype);
  }
}
