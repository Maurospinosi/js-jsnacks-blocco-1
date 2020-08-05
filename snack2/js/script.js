// L'utente inserisce due parole in successione, con due prompt. Il software stampa prima la parole più corta, poi la parola più lunga
var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserisci la seconda parola");

if (primaParola.length < secondaParola.length) {
  document.getElementById('snack2').innerHTML = primaParola + " " + secondaParola;
} else if (secondaParola.length < primaParola.length) {
  document.getElementById('snack2').innerHTML = secondaParola + " " + primaParola;
} else {
  document.getElementById('snack2').innerHTML = "Le due parole hanno la stessa lunghezza";
}
