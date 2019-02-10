const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const queries = require('./queries');
const mutations = require('./mutations');

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations,
  }),
});
