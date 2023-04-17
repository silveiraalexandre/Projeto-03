const { atendimentosModel, pacientesModel } = require("../src/models");

const consultasController = {
  async listarTodosAtendimentos(req, res) {
    try {
      const listaDeAtendimentos =
        await atendimentosModel.listarTodosAtendimentos();
      return res.json(listaDeAtendimentos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar atendimentos" });
    }
  },

  async listarAtendimentosPorId(req, res) {
    const { id } = req.params;
    try {
      const listaDeAtendimentos =
        await atendimentosModel.listarAtendimentosPorId(id);
      return res.json(listaDeAtendimentos);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao buscar atendimento por id" });
    }
  },

  async listarPacientesAtivos(req, res) {
    try {
      const pacientesAtivos = await pacientesModel.listarPacientesAtivos();
      return res.json(pacientesAtivos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar pacientes ativos" });
    }
  },
};

module.exports = consultasController;
