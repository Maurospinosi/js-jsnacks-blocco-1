// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var num = parseInt(prompt("Inserisci numero"))

if (num % 2 == 0) {
  document.getElementById('snack3').innerHTML = num;
} else {
  document.getElementById('snack3').innerHTML = num+1;
}
