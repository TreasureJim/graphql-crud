import { env } from "process";

if (typeof window === "undefined") {
  7;
  /**
   * Settings exposed to the server.
   */
  module.exports = {
    AUTH0_CLIENT_ID: env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: env.AUTH0_SECRET,
    AUTH0_DOMAIN: env.AUTH0_ISSUER_BASE_URL,
    SESSION_COOKIE_SECRET: env.AUTH0_SECRET,
  };
} else {
  /**
   * Settings exposed to the client.
   */
  module.exports = {
    AUTH0_CLIENT_ID: env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN: env.AUTH0_ISSUER_BASE_URL,
  };
}
