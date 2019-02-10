const buildSchema = ({
  INTEGER, STRING, BOOLEAN, DATE,
}) => {
  const schema = {
    attributes: {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      eamil: {
        type: STRING,
        unique: true,
        required: true,
        validate: {
          isEmail: true,
        },
      },
      password: STRING,
      full_name: STRING,
      active: BOOLEAN,
      deleted_at: DATE,
    },
    settings: {
      underscored: true,
      paranoid: true,
    },
  };
  return schema;
};

module.exports = { buildSchema };
