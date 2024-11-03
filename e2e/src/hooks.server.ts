import helmet from "sveltekit-helmet";

export const handle = helmet({
  contentSecurityPolicy: {
    directives: {
      scriptSrc: [
        "'self'",
        "'unsafe-inline'", // Allow  SvelteKit hot reload
        "example.com",
      ],
    },
  },
});
