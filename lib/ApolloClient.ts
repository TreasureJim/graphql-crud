import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import fetch from "isomorphic-unfetch";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "@apollo/client/link/ws";
import { env } from "process";

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
  //   return new WebSocketLink(
  //     new SubscriptionClient(`wss://hasura:8080/v1/graphql`, {
  //       lazy: true,
  //       reconnect: true,
  //       connectionParams: async () => {
  //         await RequestAccessToken(); // happens on the client
  //         return {
  //           headers: {
  //             authorization: accessToken ? `Bearer ${accessToken}` : "",
  //           },
  //         };
  //       },
  //     })
  //   );
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

export default function CreateApolloClient(
  initialState: NormalizedCacheObject,
  headers: any
) {
  const ssrMode = typeof window === "undefined";
  let link;
  if (ssrMode) {
    // link = createHttpLink(headers);
    link = CreateWSLink();
  } else {
    link = CreateWSLink();
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
