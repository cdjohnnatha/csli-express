const { enviromentPath } = require('../config/enviroments/env');
require('dotenv').config({ path: enviromentPath() });

module.exports = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_USER || 'postgres',
  database: process.env.DB_NAME || 'assista_gateway_development',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'postgres',
};
