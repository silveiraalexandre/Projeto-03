import express from "express";
import db from "./db/db.js";
import routes from"./routes.js";

const app = express();

app.use(express.json());
app.use(routes);

try {
  await db.sync({alter:true});
  console.log("DB conectado!");

  app.listen(3000, ()=>{
    console.log("Servidor iniciado na porta 3000");
});
} catch (error) {
  console.log("Não foi possivel se conectar com o BD!", error);
  PerformanceObserverEntryList.exit(1);
}