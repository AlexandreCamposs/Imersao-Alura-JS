// var filme1 = "Finch";
// var filme2 = "John wick";
// var filme3 = "Matrix";

// // document.write("<p>" + filme1 + "</p>")
// // document.write("<p>" + filme2 + "</p>")
// // document.write("<p>" + filme3 + "</p>")

// var listaFilmes = ["Finch", "John wick", "Matrix"];
// // elemento             1           2          3
// // índice               0           1          2

// // adicionando novos elementos
// listaFilmes.push("Harry Potter 7");

// // document.write("<p>" + listaFilmes[0] + "</p>");
// // document.write("<p>" + listaFilmes[1] + "</p>");
// // document.write("<p>" + listaFilmes[2] + "</p>");
// // document.write("<p>" + listaFilmes[3] + "</p>");

// // Forma de repetição com For
// //Valor inicial.       condição.    expressão final
// // for (var indice = 0; indice < 4; indice = indice + 1) {
//     for (var indice = 0; indice < listaFilmes.length; indice++) {
// document.write("<p>" + listaFilmes[indice] + "</p>");
// }
var nomesFilmes = ["John", "Matrix", "Operação", ];
var listaFilmes = [
  "https://br.web.img3.acsta.net/pictures/17/01/10/15/05/404753.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
  "https://br.web.img3.acsta.net/pictures/19/02/15/20/16/2590161.jpg",
  "https://assets0.minhaserie.com.br/uploads/editor_pictures/000/067/112/content_pic.jpg",
  "https://media.fstatic.com/57VL3WncN-_T4ePswshOl-552F8=/290x478/smart/media/movies/covers/2018/03/bright_ver2_xlg.jpg",
];
 for (var filmes = 0; filmes < listaFilmes.length; filmes++){
     document.write("<img src=" + listaFilmes[filmes] + ">");
    //  document.write("<p>" + nomesFilmes[filmes] + "</p>");
 }


 