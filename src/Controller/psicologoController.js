import Psicologos from "../models/Psicologos.js";
import bcrypt from "bcryptjs";

const psicologosController = {
  async cadastrarPsicologo(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;

      const psicologoExistente = await Psicologos.findOne({ where: { email } });
      if (psicologoExistente) {
        return res.status(400).json({ error: "E-mail já cadastrado." });
      }

      const hashSenha = await bcrypt.hash(senha, 10);

      const novoPsicologo = await Psicologos.create({
        nome,
        email,
        senha: hashSenha,
        apresentacao,
      });

      res.status(201).json(novoPsicologo);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Erro ao cadastrar psicólogo." });
    }
  },

  async listarPsicologos(req, res) {
    try {
      const psicologos = await Psicologos.findAll({
        attributes: { exclude: ["senha"] },
      });
      res.status(200).json(psicologos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  },

  async buscarPsicologo(req, res) {
    try {
      const { id } = req.params;
      const psicologo = await Psicologos.findByPk(id, {
        attributes: { exclude: ["senha"] },
      });
      if (!psicologo) {
        return res.status(404).json({ error: "Psicólogo não encontrado." });
      }
      res.status(200).json(psicologo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  },

  async atualizarPsicologo(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;

      const psicologo = await Psicologos.findByPk(id);

      if (!psicologo) {
        return res.status(404).json({ error: "Psicólogo não encontrado." });
      }

      const hashSenha = await bcrypt.hash(senha, 10);

      await Psicologos.update(
        {
          nome,
          email,
          senha: hashSenha,
          apresentacao,
        },
        { where: { id } }
      );

      const psicologoAtualizado = await Psicologos.findByPk(id, {
        attributes: { exclude: ["senha"] },
      });

      res.status(200).json(psicologoAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  },
};

export default psicologosController;