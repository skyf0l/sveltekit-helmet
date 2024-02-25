import helmet from "../src";

describe("test", () => {
  it("default", () => {
    helmet();
  });

  it("with options", () => {
    helmet({
      contentSecurityPolicy: {
        directives: {
          "script-src": ["'self'", "example.com"],
        },
      },
    });
  });
});
