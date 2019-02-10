const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');


export default new GraphQLInputObjectType({
  name: 'userInput',
  fields: () => ({
    fullName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
