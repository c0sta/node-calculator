// importando o microframework Express, para facilitar o roteamento da aplicação
var express = require("express"),
  morgan = require("morgan"),
  routes = require("./src/routes");

var server = express();

// Configura os middlewares
server.use(morgan("dev")); // Middleware que auxilia com o debug do app
server.use(routes); // Middleware das rotas
server.use(express.static("./src/public")); // Servindo os arquivos estáticos, html, css.

// Roda servidor na porta 8080
server.listen(8080, function () {
  console.log("==== SERVER LISTENING IN 8080 ====");
});
