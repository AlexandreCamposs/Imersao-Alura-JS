function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  //   console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5.08;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é R$" + valorEmReal;
<<<<<<< HEAD
=======
  elementoValorConvertido.innerHTML = valorConvertido;
}
function converterBiticoin() {
  var valorBitcoin = document.getElementById("valor");
  var valor = valorBitcoin.value;
  var valorRealEmBitcoin = parseFloat(valor); //alterar de texto para número
  // console.log(valorRealEmBitcoin);

  var bitcoinReal = valorRealEmBitcoin * 197.954;
  // console.log(bitcoinReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Bitcoin é R$" + bitcoinReal;
>>>>>>> 556863ff5aad55bd03c4d7b80382cb63397dac7c
  elementoValorConvertido.innerHTML = valorConvertido;
}
function converterBiticoin() {
  var valorBitcoin = document.getElementById("valor");
  var valor = valorBitcoin.value;
  var valorRealEmBitcoin = parseFloat(valor); //alterar de texto para número
  // console.log(valorRealEmBitcoin);

  var bitcoinReal = valorRealEmBitcoin * 197.954;
  // console.log(bitcoinReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Bitcoin é R$" + bitcoinReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}