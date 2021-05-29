const Sequelize = require('sequelize');

// create connection pool
const sequelize = new Sequelize('node-complete', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
}); //table name, db name, db password

module.exports = sequelize;
