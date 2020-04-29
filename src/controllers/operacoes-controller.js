var log = require("../helpers/log-helper");
/*
  Arquivo contendo a função respectiva de cada operação.
  OBS: Essa sintaxe de exports é por causa do requisito de usar CommonJS nas operações
*/
module.exports = {
  calculate(req, res) {
    if (!req.body) return res.sendStatus(400); // Verifica se há um body na requisição
    var {input} = req.body;
    var result = splitAndCalculate(input)
    console.log('RESULTADO',result)
    return res.json({ result: `${result}` });
  },

};

function splitAndCalculate(text) {
  if(!text) throw Error('No operation')
  var splited = text.split(' ')
  var number1 = parseInt(splited[0])
  var number2 = parseInt(splited[2])
  var result;
  splited.forEach(value => {
    switch(value) {
      case "+":
        var calc = number1 + number2
        console.log('Soma: ', calc)
        result = calc
        log(number1, number2, value, result)
        break
      case "-":
        var calc = number1 - number2
        console.log('Subtração: ', calc)
        result = calc
        log(number1, number2, value, result)
        break
      case "x":
        var calc = number1 * number2
        console.log('Multiplicação: ', calc)
        result = calc
        log(number1, number2, value, result)
        break
      case "/":
        var calc = number1 / number2
        console.log('Divisão: ', calc.toString())
        result = calc
        log(number1, number2, value, result)
        break
      default:
        return value
    }
  })
  
  return result;
}
