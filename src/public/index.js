// Pega o input
var input = document.querySelector(".input");
// Pega os botões com o name="digit"
var buttons = document.querySelectorAll('[name="digit"], [name="operation"]');
console.log(buttons);

/* Percorre a lista de digitos e adiciona
um eventListener no evento de click
*/
input.addEventListener("change", () => {}); // Faz com que o input seja atualizado quando clicar nos botões
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    var clickedButton = event.target.textContent;
    var newValue = (input.value += clickedButton);
    console.log(newValue);
  });
});

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


// Botão que limpa o campo de input da calculadora
var clearButton = document.querySelector('[name="clear"]').addEventListener('click', (event) => {
    event.preventDefault();
    input.value = "";
})