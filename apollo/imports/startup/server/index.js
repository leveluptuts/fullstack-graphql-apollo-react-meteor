import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Query {
  hi: String
}
`;

const resolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
