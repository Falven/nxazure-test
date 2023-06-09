import '../_registerPaths'; // Import before any other lib imports

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateHandler } from '@as-integrations/azure-functions';

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateHandler(server);