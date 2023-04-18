const Sequelize = require('sequelize');

const DB_NAME = "clinicaLavie"
const DB_USER = "root"
const DB_PASS = "mysql"
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port:3306,
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

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