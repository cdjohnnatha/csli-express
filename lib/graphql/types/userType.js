const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

export default new GraphQLObjectType({
  name: 'userType',
  description: 'user type object',
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "user's ID",
        resolve(user) {
          return user.id;
        },
      },
      fullname: {
        type: GraphQLString,
        description: "user's fullname",
        resolve({ fullName }) {
          return fullName;
        },
      },
      email: {
        type: GraphQLString,
        description: "user's email",
        resolve({ email }) {
          return email;
        },
      },
    };
  },
});
