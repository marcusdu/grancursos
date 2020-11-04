import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "apollo-boost";
import { onError } from "apollo-link-error";

const httpLink = new HttpLink({
  uri: "http://localhost:8888/graphql",
});

export default function createClient(token) {
  const tokenJson = JSON.parse(token);
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([
      onError(console.error),
      new ApolloLink((operation, forward) => {
        if (token) {
          operation.setContext({
            headers: {
              Authorization: `${tokenJson.type} ${tokenJson.token}`,
            },
          });
        }
        return forward(operation);
      }),
      httpLink,
    ]),
  });

  return client;
}
