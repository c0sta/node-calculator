// importando o microframework Express, para facilitar o roteamento da aplicação
var express = require("express"),
  morgan = require("morgan"),
  routes = require("./src/routes"),
  bodyParser = require("body-parser");

var server = express();

// Configura os middlewares
server.use(morgan("dev"));
// server.use(bodyParser);
// server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(routes);
server.use(express.static("./src/public"));

// Roda servidor na porta 8080
server.listen(8080, function () {
  console.log("==== SERVER LISTENING IN 8080 ====");
});
