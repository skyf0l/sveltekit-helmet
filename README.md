# sveltekit-helmet

[![Version](https://img.shields.io/npm/v/sveltekit-helmet.svg)](https://www.npmjs.com/package/sveltekit-helmet)
[![Helmet version](https://img.shields.io/badge/Helmet%20version-latest-g.svg)](https://github.com/helmetjs/helmet)
[![Downloads](https://img.shields.io/npm/dm/sveltekit-helmet.svg)](https://www.npmjs.com/package/sveltekit-helmet)

sveltekit-helmet is a wrapper for [helmet](https://github.com/helmetjs/helmet)
to work with [SvelteKit](https://github.com/sveltejs/kit). It provides important
security headers to make your app more secure by default.

## Installation

```sh
npm i sveltekit-helmet

# or:

yarn add sveltekit-helmet
```

## Usage

Usage is the same as helmet, see the
[helmet documentation](https://helmetjs.github.io) for more information.

> [!WARNING]  
> Hot reload is blocked by default, you need to allow scriptSrc's
> `'unsafe-inline'` directive to use it.

Just add the following to your `src/hooks.server.ts`:

```ts
import helmet from "sveltekit-helmet";

// With default helmet options
export const handle = helmet();

// With custom helmet options
export const handle = helmet({
  contentSecurityPolicy: {
    directives: {
      scriptSrc: [
        "'self'",
        "'unsafe-inline'", // Allow SvelteKit hot reload
      ],
    },
  },
});

// Works with other middlewares
import { sequence } from "@sveltejs/kit/hooks";
export const handle = sequence(helmet(), fooMiddleware, barMiddleware);
```

Currently, only the full helmet middleware is supported, you can just disable
unwanted rules in options instead of using the individual middleware.

## Versioning

sveltekit-helmet currently only supports SvleteKit v2.

If you are using SvelteKit v1, you can open an issue and I will consider adding
support for it.
