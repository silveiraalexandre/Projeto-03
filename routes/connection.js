const express = require('express');
const psicologosController = require("../controllers/psicologosController");
const pacientesController = require("../controllers/pacientesController");
const atendimentosController = require("../controllers/atendimentosController");
const authController = require("../controllers/authController");
const pacienteCreateValidation = require("../src/validationpaciente");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");


const routes = express.Router();


routes.get("/psicologos", requestLog, psicologosController.listarPsicologo);
routes.get("/psicologos/:id", psicologosController.listarPsicologoID);
routes.post("/psicologos", usuarioCreateValidation, psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id_psicologo", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id_psicologo", usuarioCreateValidation, psicologosController.atualizarPsicologo);

routes.get("/pacientes", requestLog, pacientesController.listarPaciente);
routes.get("/pacientes/:id", pacientesController.listarPacienteID);
routes.post("/pacientes",pacienteCreateValidation, pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id",pacienteCreateValidation, pacientesController.atualizarPaciente);

routes.get("/atendimentos", requestLog, atendimentosController.listarAtendimento);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentoID);
routes.post("/atendimentos", auth,atendimentosController.cadastrarAtendimento);
routes.delete("/atendimentos/:id", atendimentosController.deletarAtendimento);

routes.post("/login", authLoginValidation, authController.login);


module.exports = routes;
