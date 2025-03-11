import { loadFiles } from "@graphql-tools/load-files";

// Provide resolver functions for your schema fields
export const getResolvers = async () => {
  const resolvers = await loadFiles("src/graphql/modules/**/*resolvers.{js,ts}");
  return resolvers;
};
