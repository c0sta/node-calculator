var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");
var OperationsController = require("./controllers/operacoes");
var MainController = require("./controllers/main");

var jsonParser = bodyParser.json(),
  urlencodedParser = bodyParser.urlencoded({ extended: false });

var routes = express.Router();

// Monitora as requisições no path raíz "/"
routes.get("/", MainController.main);
routes.post("/sum", urlencodedParser, OperationsController.sum);
routes.post("/subtraction", urlencodedParser, OperationsController.subtraction);
routes.post(
  "/multiplication",
  urlencodedParser,
  OperationsController.multiplication
);
routes.post("/division", urlencodedParser, OperationsController.division);

module.exports = routes;
