import { ApolloClient, gql, InMemoryCache } from "@apollo/client";



// const QUERY = gql`
// query products {
//   products {
//     name
//   }
// }
// `;


export const client = new ApolloClient({
  uri: "https://productscanapp.herokuapp.com/graphql",
  cache: new InMemoryCache()
});


// client.query({ query: QUERY })
//   .then(result => console.log(result.data))
//   .catch(e => console.log(e))