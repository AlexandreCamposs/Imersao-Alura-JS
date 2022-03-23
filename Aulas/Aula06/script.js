var ale = {nome:"ale", vitorias:0, empates:0, derrotas:0, pontos:0 };
// console.log(ale.vitorias);
var pedro = {nome:"pedro", vitorias:0, empates:0, derrotas:0, pontos:0};
// console.log(pedro.empates);
var enzo = {nome:"pedro", vitorias:0, empates:0, derrotas:0, pontos:0};


function calcularPontos (jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
} 

ale.pontos = calcularPontos(ale);
pedro.pontos = calcularPontos(pedro);
enzo.pontos = calcularPontos(enzo);


var jogadores = [ale,pedro,enzo];

function exibeJogadoresNaTela(jogadores) {
  var elemento = ""
  for(var i = 0; i < jogadores.length; i++){
  elemento +="<tr><td>" + jogadores[i].nome + "</td>"
          elemento +="<td>" + jogadores[i].vitorias + "</td>"
          elemento +="<td>" + jogadores[i].empates + "</td>"
          elemento +="<td>" + jogadores[i].derrotas + "</td>"
          elemento +="<td>" + jogadores[i].pontos + "</td>"
          elemento +="<td><button onClick='adicionarVitoria(" + i + " )'>Vitória</button></td>"
          elemento +="<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
          elemento +="<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
          elemento += "</tr>"
      }
      var tabelaJogadores = document.getElementById("tabelaJogadores");
      tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate (i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota (i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}