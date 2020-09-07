// Dare la possibilità di inserire due parole. Verificare tramite
// una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe
// altrimenti stampare la più lunga delle due.

var primaParola = prompt("Inserisci una parola");
var secondaParola = prompt("Inserisci una parola");

function lunghezzaParola(parola1, parola2) {
  if (parola1.length == parola2.length){
  return true;
}
  return false;
}

if(lunghezzaParola(primaParola, secondaParola)){
  console.log(primaParola + " " + secondaParola + " " + "Le parole hanno la stessa lunghezza");
} else if (primaParola.length > secondaParola.length){
  console.log("La parola " + primaParola + " " + "è più lunga");
} else if(primaParola.length < secondaParola.length){
  console.log("La parola " + secondaParola + " " + "è più lunga");
}
