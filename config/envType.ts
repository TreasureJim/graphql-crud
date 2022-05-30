declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_HASURA_HOST: string;
      APP_HOST: string;

      //   GOOGLE_OATH_CLIENTID: string;
      //   GOOGLE_OATH_CLIENTSECRET: string;
      //   GITHUB_ID: string;
      //   GITHUB_SECRET: string;

      AUTH0_SECRET: string;
      AUTH0_BASE_URL: string;
      AUTH0_ISSUER_BASE_URL: string;
      AUTH0_CLIENT_ID: string;
      AUTH0_CLIENT_SECRET: string;
    }
  }
}

export {};
