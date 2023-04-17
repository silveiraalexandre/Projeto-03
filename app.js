const express = require("express");
const routes = require("./routes");
const db = require("./src/connection");
const app = express();

const app = express();
db.hasConnection();

app.use(express.json());

app.use(express.json());

app.use(routes);

app.listen(3000,() => {
    console.log('Servidor rodando na porta 3000')
});

