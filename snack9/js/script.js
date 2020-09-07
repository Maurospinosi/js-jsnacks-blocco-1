// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var numInserito = prompt("Inserisci un numero di 4 cifre");
var totale = 0;
for(var i=0; i< numInserito.length; i++){
  totale = totale + parseInt(numInserito[i]);
}

console.log(totale); 
