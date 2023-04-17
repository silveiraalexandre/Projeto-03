const Pacientes = require("../models/pacientes");

const pacientesController = {
  async listarPacientes(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        const listaDePacientes = await Pacientes.findAll({
          where: { status: 1 },
        });
        res.json(listaDePacientes);
      } else {
        const listaDePacientes = await Pacientes.findAll({
          where: {
            id,
            status: 1,
          },
        });
        res.json(listaDePacientes);
      }
    } catch (error) {
      res.status(500).json(`ERRO: ${error}`);
    }
  },

  async cadastrarPacientes(req, res) {
    try {
      const { nome, email, data_nascimento } = req.body;
      const checkEmail = await Pacientes.count({ where: { email } });
      if (checkEmail) {
        return res.status(400).json("Email já cadastrado!");
      }
      const usuarioCadastrado = await Pacientes.create({
        nome,
        email,
        data_nascimento,
      });
      res.json(usuarioCadastrado);
    } catch (error) {
      res.status(500).json(`ERRO: ${error}`);
    }
  },
};

module.exports = pacientesController;
