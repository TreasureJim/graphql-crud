/* eslint-disable no-unused-vars */
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DATABASE_URL: string;
			APP_HOST: string;

			AUTH_SECRET: string;
			AUTH_GOOGLE_ID: string;
			AUTH_GOOGLE_SECRET: string;
			AUTH_GITHUB_ID: string;
			AUTH_GITHUB_SECRET: string;

			AUTH0_SECRET: string;
			AUTH0_BASE_URL: string;
			AUTH0_ISSUER_BASE_URL: string;
			AUTH0_CLIENT_ID: string;
			AUTH0_CLIENT_SECRET: string;
		}
	}
}

export { };
