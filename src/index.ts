import { IncomingMessage, ServerResponse } from "http";
import type { Handle } from "@sveltejs/kit";
import helmet, { type HelmetOptions } from "helmet";

function extendResponse(
  originalResponse: Response,
): Response & ServerResponse<IncomingMessage> {
  const res = originalResponse as Response & ServerResponse<IncomingMessage>;

  res.setHeader = res.headers.set.bind(res.headers) as typeof res.setHeader;
  res.removeHeader = res.headers.delete.bind(
    res.headers,
  ) as typeof res.removeHeader;

  return res;
}

export default (options?: HelmetOptions): Handle => {
  const middleware = helmet(options);

  // `req` is never used, but it's required by the `helmet` middleware
  const req = {} as IncomingMessage;

  return async ({ event, resolve }) => {
    const response = await resolve(event);
    const extendedResponse = extendResponse(response);

    return new Promise((resolve, reject) => {
      middleware(req, extendedResponse, (err) =>
        err ? reject(err) : resolve(response),
      );
    });
  };
};
