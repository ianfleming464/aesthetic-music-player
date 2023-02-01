import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://aesthetic-music.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': '0CdHzyk1H5yC1oJHn1Wy9ouH5i4R2UxMOh4uInUkozCrxzzXtHyA43mDAvDaHWtA',
  },
});

export default client;
