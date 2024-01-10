import {StatusCodes} from 'http-status-codes';

export const BACKEND_URL = 'https://13.design.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};
