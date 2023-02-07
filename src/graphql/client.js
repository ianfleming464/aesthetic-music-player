import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { GET_QUEUED_SONGS } from './queries';

import { WebSocketLink } from '@apollo/client/link/ws';

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://aesthetic-music.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          'x-hasura-admin-secret':
            '0CdHzyk1H5yC1oJHn1Wy9ouH5i4R2UxMOh4uInUkozCrxzzXtHyA43mDAvDaHWtA',
        },
      },
    },
  }),
  cache: new InMemoryCache(),
  typeDefs: gql`
    type Song {
      id: uuid!
      title: String!
      artist: String!
      thumbnail: String!
      duration: Float!
      url: String!
    }
    input SongInput {
      id: uuid!
      title: String!
      artist: String!
      thumbnail: String!
      duration: Float!
      url: String!
    }
    type Query {
      queue: [Song]!
    }
    type Mutation {
      addOrRemoveFromQueue(input: SongInput!): [Song]!
    }
  `,
  resolvers: {
    Mutation: {
      addOrRemoveFromQueue: (_, { input }, { cache }) => {
        const queryResult = cache.readQuery({
          query: GET_QUEUED_SONGS,
        });
        // read from the queue; read from the query; update queue
        if (queryResult) {
          const { queue } = queryResult;
          const isInQueue = queue.some(song => song.id === input.id);
          const newQueue = isInQueue
            ? queue.filter(song => song.id !== input.id)
            : [...queue, input];
          cache.writeQuery({
            query: GET_QUEUED_SONGS,
            data: { queue: newQueue },
          });
          return newQueue;
        }
        return [];
      },
    },
  },
});

const data = {
  queue: [],
};

client.writeQuery({
  query: GET_QUEUED_SONGS,
  data,
});

export default client;

// POTENTIAL TO-DO: Refactor to split links between Http and Websocket, depending on Query or Subscription?

// The following commented code is an unsuccessful attempt at incorporating graphql-ws

// import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// import { createClient } from 'graphql-ws';
// import { getMainDefinition } from '@apollo/client/utilities';

// const DOMAIN = 'https://aesthetic-music.hasura.app/v1/graphql';

// const httpLink = () => {
//   new HttpLink({
//     uri: `https://${DOMAIN}`,
//     credentials: 'include',
//     headers: {
//       'x-hasura-admin-secret': '0CdHzyk1H5yC1oJHn1Wy9ouH5i4R2UxMOh4uInUkozCrxzzXtHyA43mDAvDaHWtA',
//     },
//   });
// };

// const wsLink = () => {
//   new GraphQLWsLink(
//     createClient({
//       url: 'ws://where.is:4000/graphql',
//       connectionParams: {
//         headers: {
//           'x-hasura-admin-secret':
//             '0CdHzyk1H5yC1oJHn1Wy9ouH5i4R2UxMOh4uInUkozCrxzzXtHyA43mDAvDaHWtA',
//         },
//       },
//     }),
//   );
// };

// const splitLink = () => {
//   split(
//     ({ query }) => {
//       const definition = getMainDefinition(query);
//       return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
//     },
//     wsLink(),
//     httpLink(),
//   );
// };

// const client = new ApolloClient({
//   ssrMode: typeof window === 'undefined',
//   link: typeof window === 'undefined' ? httpLink() : splitLink(),
//   cache: new InMemoryCache(),
// });

// export default client;
