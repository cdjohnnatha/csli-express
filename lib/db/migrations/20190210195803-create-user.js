module.exports = {
  up: (queryInterface, { INTEGER, STRING, DATE }) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    fullname: {
      type: STRING,
    },
    email: {
      allowNull: false,
      type: STRING(100),
      unique: true,
    },
    created_at: {
      allowNull: false,
      type: DATE,
    },
    updated_at: {
      allowNull: false,
      type: DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Users'),
};
