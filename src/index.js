const { GraphQLServer } = require("graphql-yoga");

// 1
const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }
  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

let links = [
  {
    id: "link-0",
    url: "www.howtograhql.com",
    description: "Fullstack tutorial for GraphQL"
  },
  {
    id: "link-1",
    url: "www.ufersa.edu.br",
    description: "UFERSA website"
  }
];

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
