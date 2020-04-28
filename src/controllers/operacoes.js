/* 
  Arquivo contendo a função respectiva de cada operação.
  Essa sintaxe de exports é por causa do requisito de usar CommonJS
*/

module.exports = {
  calc(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log("dentro da soma", JSON.stringify(req.body));
    var nums = req.body;

    var result = parseInt(nums.number1) + parseInt(nums.number2);
    return res.send({ result: result });
  },

  sum(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log("dentro da soma", JSON.stringify(req.body));
    var nums = req.body;

    var result = parseInt(nums.number1) + parseInt(nums.number2);
    return res.send({ result: result });
  },
  subtraction(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log("dentro da soma", JSON.stringify(req.body));
    var nums = req.body;

    var result = parseInt(nums.number1) - parseInt(nums.number2);
    return res.send({ result: result });
  },
  multiplication(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log("dentro da soma", JSON.stringify(req.body));
    var nums = req.body;

    var result = parseInt(nums.number1) * parseInt(nums.number2);
    return res.send({ result: result });
  },
  division(req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log("dentro da soma", JSON.stringify(req.body));
    var nums = req.body;

    var result = parseInt(nums.number1) / parseInt(nums.number2);
    return res.send({ result: result });
  },
};
