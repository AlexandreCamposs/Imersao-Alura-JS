var carta1 = {
    nome: "Charmander",
    atributos: {
      ataque: 7,
      defesa: 5,
      magia: 6,
    },
  };
  var carta2 = {
    nome: "Squirtle ",
    atributos: {
      ataque: 6,
      defesa: 4,
      magia: 3,
    },
  };
  var carta3 = {
    nome: "Pikachu ",
    atributos: {
      ataque: 8,
      defesa: 6,
      magia: 9,
    },
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    // console.log(cartaMaquina);
  
    var NumeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == NumeroCartaJogador) {
      NumeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[NumeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirOpcoes();
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo;
      // console.log(atributo);
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu!";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior.";
    } else {
      elementoResultado.innerHTML = "Empatou!";
    }
    console.log(cartaMaquina);
  }