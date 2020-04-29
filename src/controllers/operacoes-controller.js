var log = require("../helpers/log-helper");
var calculate = require("../helpers/calculate-helper");
/*
 Esse seria o arquivo "operacoes.js" solicitado, masss, ao invés de criar uma rota para cada operação(o que seria repetitivo e contra boas práticas) criei uma rota que pode lidar com as 4 operações básicas( +, -, x, /). 
 Então, quem lida com as operações e contas em si é a função helper calculate, que basicamente identifica qual operação matemática está sendo feita, realiza a conta, adiciona ao log e retorna o resultado para cá.
 Dessa forma cumprimos o requisito e deixamos código mais limpo
*/
module.exports = {
  operacoes(req, res) {
    if (!req.body) return res.sendStatus(400); // Verifica se há um body na requisição
    var {input} = req.body;
    var result = calculate(input)
    // console.log('RESULTADO',result)
    return res.json({ result: `${result}` });
  },

};
