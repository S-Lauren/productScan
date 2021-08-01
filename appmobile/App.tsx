
import React from 'react';


import { ProductProvider } from './context/Products.context';
import { client } from './apollo';
import { ApolloProvider } from '@apollo/client';
import MainNavigator from './screens/Navigator/MainNavigator';


export default function App() {
  return (
    <ApolloProvider client={client}>
      <ProductProvider>
        <MainNavigator />
      </ProductProvider>
    </ApolloProvider>
  );
}

