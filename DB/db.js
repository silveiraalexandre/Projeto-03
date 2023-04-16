const Sequelize = require('sequelize');
const sequelize = new Sequelize('Projeto3', 'root', 'mysql', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
});

module.exports = sequelize;