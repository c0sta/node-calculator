
function calculate(text) {
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
  
  module.exports = calculate;