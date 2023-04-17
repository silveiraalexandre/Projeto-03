(async () => {
  const database = require('./DB');
  await database.sync();
  })();

  const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = "sua_chave_secreta_aqui";

const users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    password: "$2a$10$9X0mWm8Mvev.EkbZ4u4eP.YrlpC/zYO7VzDu6S5UM9VdG6P5U5F5S", // "password"
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    password: "$2a$10$rNzN8G98SPq3DWhB/CF9PuHooR.SuwbYRRab4m4uV7m0C0IuV7UaS", // "password123"
  },
];

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(401).json({ message: "Usuário não encontrado." });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Senha incorreta." });
  }

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  res.status(200).json({ token });
});

app.get("/profile", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.status(200).json(decoded);
  } catch (error) {
    res.status(401).json({ message: "Token inválido." });
  }
});

app.listen(3000, () => {
  console.log("Servidor em execução na porta 3000.");
});