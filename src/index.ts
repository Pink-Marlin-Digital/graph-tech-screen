import { ApolloServer } from "apollo-server-express";
import Express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// Graphql imports
import { getResolvers } from "./resolvers";
import { getTypeDefs } from "./schema";

// REST route imports
import { getRoutes } from "./routes";

const PORT = 4444;

const startServer = async () => {
  const app = Express();
  const server = new ApolloServer({
    typeDefs: await getTypeDefs(),
    resolvers: await getResolvers(),
  });

  await server.start();

  server.applyMiddleware({ app });

  const routes = getRoutes();

  routes.forEach((route: any) => {
    app.use(route.route, route.handler);
  });

  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Hello World",
        version: "1.0.0",
      },
    },
    apis: ["./src/routes/index.ts"], // files containing annotations as above
  };

  const swaggerSpec = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app
    .listen(PORT)
    .once("listening", () => {
      console.log('\n***************************************************************');
      console.log('*                                                             *');
      console.log(`*  🚀 GraphQLServer at http://localhost:${PORT}/graphql          *`);
      console.log('*                                                             *');
      console.log(`*  🌐 REST API Docs at http://localhost:${PORT}/api-docs         *`);
      console.log('*                                                             *');
      console.log('***************************************************************\n');
    })
    .once("error", (err: any): void => {
      console.error("💀 Error starting the node server", err);
    });
};

startServer();
