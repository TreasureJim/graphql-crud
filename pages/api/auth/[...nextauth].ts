import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { env } from "process";

export default NextAuth({
	secret: env.AUTH_SECRET,
	providers: [
		// GoogleProvider({
		// 	clientId: env.AUTH_GOOGLE_ID,
		// 	clientSecret: env.AUTH_GOOGLE_SECRET,
		// }),
		GithubProvider({
			clientId: env.AUTH_GITHUB_ID,
			clientSecret: env.AUTH_GITHUB_SECRET,
		}),
	],
});
