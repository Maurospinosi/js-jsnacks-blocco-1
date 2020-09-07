// Crea un array vuoto e chiedi all’utente un numero da
// inserire nell’array. Continua a chiedere i numeri all’utente e
// a inserirli nell’array fino a quando la somma degli elementi
// è minore di 50.

function sommaNumArray(numArray) {
 var somma = 0;
 for (var i=0; i<numArray.length; i++){
   somma += numArray[i];
 }
 return somma;
 console.log(somma);
}

var arr = [];

do {
  var numeri = parseInt(prompt("Inserisci un numero"));
  arr.push(numeri);
} while (sommaNumArray(arr) < 50);
console.log(arr);
console.log(numeri);
