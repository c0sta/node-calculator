var express = require("express");
var bodyParser = require("body-parser");
// Controllers
var OperationsController = require("./controllers/operacoes");
var MainController = require("./controllers/main");
var LogController = require("./controllers/log");
// Uso a função Router do express, que nos permite criar as rotas
var routes = express.Router();
// Esse parser é necessário quando vamos fazer métodos
// post's no express
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Monitora as requisições de GET no caminho raíz "/"
routes.get("/", MainController.main);
routes.get("/log", LogController.log);
/* Monitora as requisições de POST nos caminhos de cada operação
  OBS - Passar esse urlencodedParser foi o que fez funcionar,
  até então os números inseridos estavam vindo como undefined 
  */
routes.post("/sum", urlencodedParser, OperationsController.sum);
routes.post("/subtraction", urlencodedParser, OperationsController.subtraction);
routes.post(
  "/multiplication",
  urlencodedParser,
  OperationsController.multiplication
);
routes.post("/division", urlencodedParser, OperationsController.division);

module.exports = routes;
