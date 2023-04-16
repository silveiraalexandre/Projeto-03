import Atendimentos from "./atenddimentos/atendimentoModel.js";
import Psicologos from "./psicologos/psicologosModel.js";
import Pacientes from "./pacientes/pacientesModel.js";

const DB_NAME = "projeto-03"
const DB_USER = "root"
const DB_DB_PASSWORD = "mysql"
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port:3000,

}

const Psicologo = sequelize.define('Psicologo', { name: DataTypes.STRING });
const Paciente = sequelize.define('Paciente', { name: DataTypes.STRING });
const Atendimento = sequelize.define('Atendimento', {
 
  PsicologoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Psicologo,
      key: 'id'
    }
  }
});
Psicologo.belongsToMany(Paciente, { através: Atendimento });
Paciente.belongsToMany(Psicologo, { através: Atendimento });