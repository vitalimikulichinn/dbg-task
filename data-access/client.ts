import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WEATHER_API } from "../src/constants";

export const client = new ApolloClient({
  uri: WEATHER_API,
  cache: new InMemoryCache(),
});
