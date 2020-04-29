var express = require("express");
var bodyParser = require("body-parser");
// Controllers
var OperationsController = require("./controllers/operacoes-controller");
var MainController = require("./controllers/main-controller");
var LogController = require("./controllers/log-controller");
// Uso a função Router do express, que nos permite criar as rotas
var routes = express.Router();
// Esse parser é necessário quando vamos fazer métodos
// post's no express
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Monitora as requisições de GET no caminho raíz "/"
routes.get("/", MainController.main);
routes.get("/log", LogController.log);
/* Monitora as requisições de POST na rota /calculate
  OBS - Passar esse urlencodedParser foi o que fez funcionar,
  até então os números inseridos estavam vindo como undefined 
  */
 routes.post('/calculate', urlencodedParser,OperationsController.calculate)

module.exports = routes;
