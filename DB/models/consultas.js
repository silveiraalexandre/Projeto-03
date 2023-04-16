const { Atendimentos, Psicologos, Pacientes } = require("../models");

const atendimentosModel = {
  async listarTodosAtendimentos() {
    try {
      const listaDeAtendimentos = await Atendimentos.findAll({
        include: [
          { model: Pacientes, attributes: { exclude: ["status"] } },
          { model: Psicologos, attributes: { exclude: ["senha", "status"] } },
        ],
      });

      return listaDeAtendimentos;
    } catch (error) {
      console.error(error);
    }
  },

  async listarAtendimentosPorId(id) {
    try {
      const listaDeAtendimentos = await Atendimentos.findAll({
        where: { id },
        include: [
          { model: Pacientes, attributes: { exclude: ["status"] } },
          { model: Psicologos, attributes: { exclude: ["senha", "status"] } },
        ],
      });

      return listaDeAtendimentos;
    } catch (error) {
      console.error(error);
    }
  },
};

const pacientesModel = {
  async listarPacientesAtivos() {
    try {
      const pacientesAtivos = await Pacientes.findAll({
        where: { status: "ativo" },
      });

      return pacientesAtivos;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = { atendimentosModel, pacientesModel };