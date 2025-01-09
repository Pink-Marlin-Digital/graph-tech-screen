import { Context } from "apollo-server-core";
import { GraphQLFieldResolver } from "graphql";

type Args = { id: string };

// The Query type is our entry point to the graph.
const Query: Record<string, GraphQLFieldResolver<{}, Context, any>> = {
  // swapiCharacterById is a field on the Query type that returns the StarWarsCharacter Object type
  // The return type of this field is a union defined in the swapi.graphql schema
  pokemonByName: async (_, args: Args, ctx) => {
    return { __typename: "Pokemon" };
  },
};

// These are "Field Level Resolvers" which take precident over the Object-Type level resolvers
// const StarWarsCharacter = {
//   name: () => {
//     return "test";
//   },
//   height: () => {
//     return "171";
//   },
//   mass: () => {
//     return "100";
//   },
//   gender: () => {
//     return "MALE";
//   },
// };

// You can add new Object Resolvers to the default export and the server will pick them up automatically
export default {
  Query,
};
