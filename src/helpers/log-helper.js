var fs = require("fs"); // Módulo que lida com arquivos
/*
Fiz essa função para isolar a responsabilidade de 
formatar o texto do calc e salvar no arquivo de log.txt
*/
function log(num1, num2, operation, result) {
  var calc = `${num1} ${operation} ${num2} = ${result}` + "\r\n";
  fs.appendFile("src/log/log.txt", calc, function (err) {
    if (err) throw err;
    console.log("Log updated!", calc);
  });
}

module.exports = log;