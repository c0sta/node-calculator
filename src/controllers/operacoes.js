var log = require("../helpers/log-helper");
/*
  Arquivo contendo a função respectiva de cada operação.
  OBS: Essa sintaxe de exports é por causa do requisito de usar CommonJS nas operações
*/
module.exports = {
  sum(req, res) {
    if (!req.body) return res.sendStatus(400); // Verifica se há um body na requisição
    var { number1, number2 } = req.body;
    var result = parseInt(number1) + parseInt(number2); // realiza a conta

    log(number1, number2, "+", result); // Passa os parametros necessarios p/ func helper, que criará os logs

    return res.send({ result: result });
  },
  subtraction(req, res) {
    if (!req.body) return res.sendStatus(400);
    var { number1, number2 } = req.body;
    var result = parseInt(number1) - parseInt(number2);
    log(number1, number2, "-", result);
    return res.send({ result: result });
  },
  multiplication(req, res) {
    if (!req.body) return res.sendStatus(400);
    var { number1, number2 } = req.body;
    var result = parseInt(number1) * parseInt(number2);
    log(number1, number2, "*", result);
    return res.send({ result: result });
  },
  division(req, res) {
    if (!req.body) return res.sendStatus(400);
    var { number1, number2 } = req.body;
    var result = parseInt(number1) / parseInt(number2);
    log(number1, number2, "/", result);
    return res.send({ result: result });
  },
};
