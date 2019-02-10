const { buildSchema } = require('../schemas/userSchema');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', buildSchema(DataTypes), {});
  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
