const Sequelize = require('sequelize');
const sequelize = new Sequelize('Projeto3','root','8f8ac5c7',{
  dialect: 'mysql',
  host: 'localhost'
})

module.exports = sequelize;