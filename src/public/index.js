// Valores inseridos
var num1 = document.querySelector(".inputs__num1").value;
var num2 = document.querySelector(".inputs__num2").value;

function postSum() {
  // POST - Aqui estamos enviando no corpo do post os numeros inseridos
  // pelo usuário
  console.log("Inputs: ", num1, num2);
  fetch("http://localhost:8080/sum", {
    method: "POST",
    body: { calc: { num1: num1, num2: num2 } },
  }).then(function (data) {
    console.log(data);
    return data;
  });
}
function postSub() {
  // POST - Aqui estamos enviando no corpo do post os numeros inseridos
  // pelo usuário
  console.log("Inputs: ", num1, num2);
  fetch("http://localhost:8080/sum", {
    method: "POST",
    body: { calc: { num1: num1, num2: num2 } },
  }).then(function (data) {
    console.log(data);
    return data;
  });
}
