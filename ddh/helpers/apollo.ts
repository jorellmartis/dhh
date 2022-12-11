import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API,
    cache: new InMemoryCache(),
    ssrMode: true,
    });

export default apolloClient
