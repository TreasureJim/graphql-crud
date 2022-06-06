import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";

// eslint-disable-next-line require-jsdoc
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</UserProvider>
	);
}

export default MyApp;
