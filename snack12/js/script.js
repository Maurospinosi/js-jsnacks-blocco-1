// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali
// tra 1 e 100.
// Ogni volta che ne crei uno, stampalo a schermo.

function numeriCasuali(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var n = parseInt(prompt("Inserisci un numero"));

for (var i=0; i<n; i++){
  var arr = [];
  for(var j=0; j<10; j++){
    arr.push(numeriCasuali(1, 100));
  }
  console.log("Array numero :" + " " + (i+1));
  console.log(arr);
}
