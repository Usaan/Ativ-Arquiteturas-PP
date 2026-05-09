const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const conn = require("./db/connection");
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

app.use("/tasks", tasksRoutes);
app.use("/", homeRoute);

conn
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Aplicação em execução");
    });
  })
  .catch((err) =>
    console.log("Ocorreu um erro ao conectar com o banco de dados: ", err),
  );
