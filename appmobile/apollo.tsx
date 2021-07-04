import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

//const networkInterface = createNetworkInterface({ uri: 'http://YOURIPADDRESS:3000/graphql' });
// const URI = 'http://192.168.43.35:19000:4000/graphql';




export const client = new ApolloClient({
    uri: 'http://192.168.43.35:4000/graphql',
    cache: new InMemoryCache()
});