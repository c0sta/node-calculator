var fs = require("fs"); // Módulo que lida com arquivos
/*
Fiz essa função para isolar a responsabilidade de 
formatar o texto do log e de salva-lo no arquivo de texto -> log.txt
*/
function log(num1, num2, operation, result) {
  // Monta o log no formato que é pedido no requisito
  var logMsg = `${num1} ${operation} ${num2} = ${result}` + "\r\n";
  // Função que adiciona texto em arquivo.
  /**
   * Aqui estamos salvando a logMsg no arquivo log.txt
   * que se encontra no caminho "src/log/log.txt" e passando uma função
   * para lidar com excessões
   */
  fs.appendFile("src/log/log.txt", logMsg, function (err) {
    if (err) throw err;
    console.log("Log updated!", logMsg);
  });
}

module.exports = log;
