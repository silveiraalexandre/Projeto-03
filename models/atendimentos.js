const Sequelize = require("sequelize");
const sequelize = require("../Controller/atendimentosController.js");

class Atendimentos extends Sequelize.Model {}

Atendimentos.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    psicologo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    paciente_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    hora: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    duracao: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    observacoes: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "atendimentos",
    underscored: true,
  }
);

module.exports = Atendimentos;