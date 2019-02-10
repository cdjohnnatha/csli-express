const {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const { users: UserModel } = require('../../../db/models/index');
const UserType = require('../../types/userType.js');

export default {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, { id }) {
    return UserModel.findByFk(id);
  },
};
