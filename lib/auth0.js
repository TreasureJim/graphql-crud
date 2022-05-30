import { initAuth0 } from "@auth0/nextjs-auth0";
import { env } from "process";
import config from "./auth0-config";

export default initAuth0({
  clientID: config.AUTH0_CLIENT_ID,
  clientSecret: config.AUTH0_CLIENT_SECRET,
  issuerBaseURL: config.AUTH0_DOMAIN,
  secret: config.SESSION_COOKIE_SECRET,
  baseURL: env.APP_HOST,
  routes: {
    postLogoutRedirect: "/",
  },
  session: {
    rollingDuration: 60 * 60 * 8,
  },
});
