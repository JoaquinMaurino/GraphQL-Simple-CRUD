require('dotenv').config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const dbConnect = require('./database/db_connection')
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

async function startServer() {
  await dbConnect();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    listen: {port: process.env.PORT},
  });

  console.log(`Server ready at: ${url}`);
}

startServer();