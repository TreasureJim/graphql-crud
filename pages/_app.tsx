import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";

// eslint-disable-next-line require-jsdoc
function MyApp({
	Component,
	pageProps: {
		session, ...pageProps
	},
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</SessionProvider>
	);
}

export default MyApp;
