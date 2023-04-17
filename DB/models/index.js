import Sequelize from "sequelize";

const DB_NAME = "projeto-03"
const DB_USER = "root"
const DB_DB_PASSWORD = "mysql"
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port:3000,
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_DB_PASSWORD, DB_CONFIG);

const Psicologo = sequelize.define('Psicologo', { name: Sequelize.STRING });
const Paciente = sequelize.define('Paciente', { name: Sequelize.STRING });
const Atendimento = sequelize.define('Atendimento', {
 
  PsicologoId: {
    type: Sequelize.INTEGER,
    references: {
      model: Psicologo,
      key: 'id'
    }
  }
});
Psicologo.belongsToMany(Paciente, { through: Atendimento });
Paciente.belongsToMany(Psicologo, { through: Atendimento });