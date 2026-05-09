const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const conn = require("./shared-backend/db/connection");
require("custom-env").env("development.local");

const tasksRoutes = require("./routes/tasksRoutes");
const homeRoute = require("./routes/homeRoute");

const app = express();

// Configuração do Handlebars com views compartilhadas
const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "./shared-frontend/views/layouts"),
  partialsDir: path.join(__dirname, "./shared-frontend/views/partials"),
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "./shared-frontend/views"));

// Arquivos estáticos compartilhados
app.use(express.static(path.join(__dirname, "./shared-frontend/public")));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Rotas
app.use("/tasks", tasksRoutes);
app.use("/", homeRoute);

// Sincronização com banco e inicialização
conn
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`[MVVM] Aplicação rodando na porta ${process.env.PORT}`);
    });
  })
  .catch((err) =>
    console.log("Ocorreu um erro ao conectar com o banco de dados: ", err),
  );
