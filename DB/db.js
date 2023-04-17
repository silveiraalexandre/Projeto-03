const Sequelize = require('sequelize');
const sequelize = new Sequelize('projeto-3', 'root', 'mysql', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3000
});

module.exports = sequelize;