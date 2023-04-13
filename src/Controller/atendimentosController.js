const { Atendimentos, Psicologos, Pacientes } = require("../models");

const atendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const { id } = req.params;
      const { psicologo_id, paciente_id } = req.body;
      if (!id) {
        const listaDeAtendimentos = await Atendimentos.findAll({
          include: [
            { model: Pacientes, attributes: { exclude: ["status"] } },
            { model: Psicologos, attributes: { exclude: ["senha", "status"] } },
          ],
        });

        res.json(listaDeAtendimentos);
      } else {
        const listaDeAtendimentos = await Atendimentos.findAll({
          where: { id },
          include: [
            { model: Pacientes, attributes: { exclude: ["status"] } },
            { model: Psicologos, attributes: { exclude: ["senha", "status"] } },
          ],
        });

        res.json(listaDeAtendimentos);
      }
    } catch (error) {
      res.status(500).json(`ERRO: ${error}`);
    }
  },
};

module.exports = atendimentosController;