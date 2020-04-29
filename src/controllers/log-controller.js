var path = require("path");

module.exports = {
  log(req, res) {
    /* 
        Para essa func sendFile nós precisamos passar o caminho absoluto! Ou seja, o caminho completo para o log.txt desde a raíz do sistema.
        E para isso adicionamos a função path.resolve que faz esse trabalho pra gente  
    */
    // Retorna o arquivo log.txt como resposta da requisição
    return res.sendFile(path.resolve("src/log/log.txt"));
  },
};
