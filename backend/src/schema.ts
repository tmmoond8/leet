import { IResolvers } from 'graphql-middleware/dist/types';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

// get all  *.graphql file under src/api. fileLoader did that.
const allTypes: string[] = fileLoader(
  path.join(__dirname, "./api/**/*.graphql")
);

// get all  *.resolvers.* file under src/api. fileLoader did that.
// ts files translate to js
const allResolvers: IResolvers[] = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*")
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

export default schema;