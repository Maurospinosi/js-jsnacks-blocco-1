//Genera un numero casuale per il pc poi chiedi all’utente di inserire un numero con un prompt infine stampa la somma dei due numeri
var numeroCasuale = Math.round(Math.random()*100) + 1;
alert("Numero casuale :" + " " + numeroCasuale);
// document.getElementById("snack4").innerHTML ="Numero casuale " + numCasuale;

var num = parseInt(prompt("Inserici il numero"));

document.getElementById('snack4').innerHTML = numeroCasuale + num;
