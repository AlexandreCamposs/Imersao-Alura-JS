function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  //   console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5.08;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é R$" + valorEmReal;
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
