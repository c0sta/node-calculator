
// Pega o input da calculadora
var input = document.querySelector(".input");
// Pega os botões numéricos e de operações
var buttons = document.querySelectorAll('[name="digit"], [name="operation"]');

input.addEventListener("change", () => {}); // Faz com que o input seja atualizado quando o botão for clicado

/* Percorre a lista de botões e adiciona
um eventListener, para que quando qualquer um desses botões - [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, /, x] - for clicado o seu texto seja concatenado no input da calculadora
*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    var clickedButton = event.target.textContent;
    var newValue = (input.value += clickedButton);
    console.log(newValue);
  });
});

/**
 * Botão que limpa o input da calculadora, essa função define o valor do input para uma 
 * string vazia = ""
 */
var clearButton = document.querySelector('[name="clear"]').addEventListener('click', (event) => {
  event.preventDefault();
  input.value = "";
})


// var calculateButton = document
//   .querySelector('[name="calculate"]')
//   .addEventListener("click", (event) => {
//       event.preventDefault()
 
//     fetch("http://localhost:8080/calculate", {
//       method: "POST",
//       body: {data: input.value},
//     })
//       .then((response) => {
//         return response.json(); 
//       })
//       .then((data) => input.value = data.result)
//   });

// console.log("input", input);
