// var nome = "Alexandre"

// var notaPrimeiroBimestre = 9

// var notaSegundoBimestre = 7

// var notaTerceiroBimestre = 4

// var notaQuartoBimestre = 2

// var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

// var notaFixa = notaFinal.toFixed(1)

// console.log("Bem vindo" + nome)
// console.log(notaFinal)

function adicionarnota() {
  var nota1 = parseInt(document.getElementById("nota1").value);
  var nota2 = parseInt(document.getElementById("nota2").value);
  var nota3 = parseInt(document.getElementById("nota3").value);
  var nota4 = parseInt(document.getElementById("nota4").value);
  var mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
  var notaAprovado = 7;
//   var calc ="(" + nota1 + " + " + nota2 + " + " + nota3 + " + " + nota4 + ") = " + "/ 4 = " +
//   mediaFinal;

  if (mediaFinal > notaAprovado) {
    console.log("Aprovado");
    var elementoResultado = document.getElementById("resultado")
    var resultado = "Aprovado!" 
    elementoResultado.innerHTML = resultado
  } else {
    // console.log("Reprovado");
    // alert('reprovado');
    var elementoResultado = document.getElementById("reprovado")
    var resultado = "Reprovado!" 
    elementoResultado.innerHTML = resultado
  }
}
