const { GraphQLServer } = require("graphql-yoga");

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

let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (root, args) => links.find(link => link.id === args.id)
  },
  // Link: {
  //   id: root => root.id,
  //   description: root => root.description,
  //   url: root => root.url
  // }
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    updateLink: (root, args) => {
      let link = links.find(link => link.id === args.id);
      updateLink = { ...link, ...args };
      links = links.map(link => (link.id === args.id ? updateLink : link));
      return updateLink;
    },
    deleteLink: (root, { id }) => {
      let link = links.find(link => link.id === id);
      links = links.filter(link => link.id !== id);
      return link;
    }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
