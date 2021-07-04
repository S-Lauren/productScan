
import React from 'react';

import MainNavigator from './components/Navigator';
import { ProductProvider } from './context/Products.context';
import { client } from './apollo';
import { ApolloProvider } from '@apollo/client';


export default function App() {
  return (
    <ApolloProvider client={client}>
      <ProductProvider>
        <MainNavigator />
      </ProductProvider>
    </ApolloProvider>
  );
}

