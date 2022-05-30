import withApollo from "next-with-apollo";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import auth0 from "./auth0";
import { Session } from "@auth0/nextjs-auth0";
import { env } from "process";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws/dist/client";


let accessToken: string | null;

/**
 * This should only be used on the client side
 */
async function RequestAccessToken() {
	if (accessToken) return;

	const res = await fetch(`${process.env.APP_HOST}/api/session`);
	if (res.ok) {
		const json = await res.json();
		accessToken = json.accessToken;
	} else {
		accessToken = "public";
	}
}

function CreateWSLink() {
	// return new WebSocketLink(
	// 	new SubscriptionClient(`wss://${env.HASURA_HOST}`, {
	// 		lazy: true,
	// 		reconnect: true,
	// 		connectionParams: async () => {
	// 			await RequestAccessToken(); // happens on the client
	// 			return {
	// 				headers: {
	// 					Authorization: accessToken ? `Bearer ${accessToken}` : "",
	// 				},
	// 			};
	// 		},
	// 	})
	// );
	const httpLink = new HttpLink({
		uri: `http://${env.NEXT_PUBLIC_HASURA_HOST}`,
		credentials: "include",
		// headers, // auth token is fetched on the server side
		fetch,
	});
	return httpLink;

}

function createHttpLink(headers: any) {
	const httpLink = new HttpLink({
		uri: `http://${env.NEXT_PUBLIC_HASURA_HOST}`,
		credentials: "include",
		headers, // auth token is fetched on the server side
		fetch,
	});
	return httpLink;
}

export default withApollo(
	// async ({ initialState, ctx, headers, router }) => {
	// 	// RequestAccessToken();
	// 	if (ctx) {
	// 		/**
	// 		 * Server side
	// 		 */

	// 		// if request or response doesnt exist exit
	// 		if (!ctx?.req || !ctx.res) return null;
	// 		const session = await auth0.getSession(ctx?.req!, ctx?.res!);
	// 		// if session invalid exit
	// 		if (!(session instanceof Session) || session.accessToken == null) return null;

	// 		headers = {
	// 			Authorization: `Bearer ${session.accessToken}`
	// 		};

	// 		return new ApolloClient({
	// 			ssrMode: true,
	// 			uri: `http://${env.HASURA_HOST}`,
	// 			link: createHttpLink(headers),
	// 			cache: new InMemoryCache()
	// 		});
	// 		// return CreateApolloClient({}, headers)
	// 	} else {
	// 		/**
	// 		* Client side
	// 		*/
	// 		return new ApolloClient({
	// 			ssrMode: false,
	// 			uri: `http://localhost:8080/v1/graphql`,
	// 			link: CreateWSLink(),
	// 			cache: new InMemoryCache().restore(initialState),
	// 		});
	// 	}
	// },
	({ initialState }) => {
		return new ApolloClient({
			uri: `http://${env.NEXT_PUBLIC_HASURA_HOST}`,
			cache: new InMemoryCache().restore(initialState || {})
		});
	},
	{
		render: ({ Page, props }) => {
			return (
				<ApolloProvider client={props.apollo}>
					<Page {...props} />
				</ApolloProvider>
			);
		}
	}
);