const Sequelize = require("sequelize");
const db = require("../db.js");

const Pacientes = db.define("Pacientes", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  idade:{
    type: Sequelize.DATE,
    allowNull: false,
  }
});

module.exports = Pacientes;