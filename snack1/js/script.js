// l'utente inserisce due numeri in successione, con due prompt.Il software stampa il maggiore
var primoNumero = prompt("Inserici il primo numero");
var secondoNumero = prompt("Inserici il secondo numero");

if (primoNumero > secondoNumero) {
  document.getElementById('snack1').innerHTML = "Il numero" + " " + primoNumero + " " + "è meggiore di" + " " + secondoNumero;
} else if (secondoNumero > primoNumero) {
  document.getElementById('snack1').innerHTML = "Il numero" + " " + secondoNumero + " " + "è meggiore di" + " " + primoNumero;
} else {
  document.getElementById('snack1').innerHTML = "I due numeri sono uguali";
}
