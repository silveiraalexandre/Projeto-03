import { Sequelize } from "sequelize";
import db from "../DB/db.js";

const Pacientes = db.define("Pacientes", {
  id: {
    type: Sequelize.INTERGER.UNSIGNED,
    primaryKey: true,
    utoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.toString(200),
    allowNull: false,
  },
  idade:{
    type: Sequelize.Date,
    allowNull: false,
  }
});

export default Pacientes;