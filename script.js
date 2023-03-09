// Selecionando os elementos do HTML
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const calcularButton = document.getElementById("btn_calcular");
const resultadoInput = document.getElementById("resp");

// Função para calcular o IMC
function calcularIMC() {
  // Convertendo os valores de peso e altura para números
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value) / 100; // Convertendo cm para m

  // Calculando o IMC
  const imc = peso / (altura * altura);

  // Arredondando o resultado para duas casas decimais
  const imcArredondado = imc.toFixed(2);

  // Exibindo o resultado na tela
  resultadoInput.value = `${imcArredondado}`;

  // Verificando a classificação do IMC e exibindo uma mensagem
  if (imc < 18.5) {
    resultadoInput.value += " (Abaixo do peso)";
  } else if (imc >= 18.6 && imc < 24.9) {
    resultadoInput.value += " (Peso normal)";
  } else if (imc >= 25 && imc < 29.9) {
    resultadoInput.value += " (Sobrepeso)";
  } else if (imc >= 30 && imc < 34.9) {
    resultadoInput.value += " (Obesidade grau 1)";
  } else if (imc >= 35 && imc < 39.9) {
    resultadoInput.value += " (Obesidade grau 2)";
  } else {
    resultadoInput.value += " (Obesidade grau 3)";
  }
}

// Adicionando um listener de evento para o botão "Calcular"
calcularButton.addEventListener("click", calcularIMC);
