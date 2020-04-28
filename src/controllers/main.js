var path = require("path");

module.exports.main = function (req, res) {
  /* 
    Para essa func sendFile nós precisamos passar o caminho absoluto! 
    Ou seja, o caminho completo para o form.html desde a raíz do sistema!
    E para isso adicionamos a função path.resolve que faz esse trabalho pra gente  
*/

  // Retorno o Formulário como resposta da requisição
  return res.sendFile(path.resolve("src/public/form.html"));
};
