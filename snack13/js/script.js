// Scrivi una funzione per stabilire se un numero è primo.
// Chiedi un numero all’utente e utilizza la funzione per
// comunicargli se il numero inserito è primo oppure no.

function numPrimo(num) {
 for (i=2; i<num; i++){
   if(num % i == 0){
     return false;
   }
   return true;
 }
}

var numero = parseInt(prompt("Inserisci un numero"));

if(numPrimo(numero) == true){
  console.log("Il numero è primo");
} else{
  console.log("Il numero non è primo");
}
