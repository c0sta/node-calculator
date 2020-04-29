// importando o microframework Express, para facilitar o roteamento da aplicação
var express = require("express"),
  morgan = require("morgan"),
  routes = require("./src/routes"),
  cors = require("cors");

var server = express();

var whitelist = [
  "https://node-calculator.herokuapp.com",
  "http://localhost:8080",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
// Configura os middlewares
server.use(morgan("dev")); // Middleware que auxilia com o debug do app
server.use(routes); // Middleware das rotas
server.use(express.static("./src/public")); // Servindo os arquivos estáticos, html, css.
server.use(cors(corsOptions));

var port = process.env.PORT || 8080;
// Roda servidor na porta 8080
server.listen(port, function () {
  console.log(`==== SERVER LISTENING ON ${port} ====`);
});
