// genera un numero casuale e poi stampalo se è pari nel box rosso altrimenti in nel box verde
var num = Math.round(Math.random()*100 ) + 1;

if (num % 2 == 0) {
  document.getElementById('snack5-r').innerHTML = num;
} else {
  document.getElementById('snack5-g').innerHTML = num;
}
