import { Context } from "apollo-server-core";

export const resolvers = {
  Query: {
    hello: (root: null, args: {}, context: Context): string => {
      throw new Error("Not implemented");
    },
  },
};
