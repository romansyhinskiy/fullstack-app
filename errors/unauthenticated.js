import { CustomAPIError } from "./custom-api.js";
import { StatusCodes } from "http-status-codes";
export class Unauthenticated extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
