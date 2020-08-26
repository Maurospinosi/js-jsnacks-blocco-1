// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var name = prompt("Inserisci il nome");

var nameList = ["gino", "esposito", "carol", "mauro", "gesu", "kratos"];

var n = "Non può entrare";

for(var i = 0; i<nameList.length; i++){
  if(name == nameList[i]){
    n = "Può entrare";
  }
}

document.getElementById('snack6').innerHTML = n;
