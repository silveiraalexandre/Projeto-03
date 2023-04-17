const { atendimentosModel, pacientesModel } = require("../models");

const atendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const { id } = req.params;
      const { psicologo_id, paciente_id } = req.body;
      if (!id) {
        const listaDeAtendimentos =
          await atendimentosModel.listarTodosAtendimentos();
        res.json(listaDeAtendimentos);
      } else {
        const listaDeAtendimentos =
          await atendimentosModel.listarAtendimentosPorId(id);
        res.json(listaDeAtendimentos);
      }
    } catch (error) {
      res.status(500).json(`ERRO: ${error}`);
    }
  },

  async listarPacientesAtivos(req, res) {
    try {
      const pacientesAtivos = await pacientesModel.listarPacientesAtivos();
      res.json(pacientesAtivos);
    } catch (error) {
      res.status(500).json(`ERRO: ${error}`);
    }
  },
};

module.exports = atendimentosController;
