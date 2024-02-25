# sveltekit-helmet

[![Version](https://img.shields.io/npm/v/sveltekit-helmet.svg)](https://www.npmjs.com/package/sveltekit-helmet)
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

Just add the following to your `src/hooks.server.js`:

```js
import helmet from "sveltekit-helmet";

// Default
export const handle = helmet();

// With options
export const handle = helmet({
  contentSecurityPolicy: {
    directives: {
      "script-src": ["'self'", "example.com"],
    },
  },
});

// With other middleware
import { sequence } from "@sveltejs/kit/hooks";
export const handle = sequence(helmet(), fooMiddleware, barMiddleware);
```

Currently, only the full helmet middleware is supported, you can just disable
unwanted rules in options instead of using the individual middleware.

## Versioning

sveltekit-helmet currently only supports SvleteKit v2.

If you are using SvelteKit v1, you can open an issue and I will consider adding
support for it.
