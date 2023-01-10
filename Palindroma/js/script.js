/* Palidroma
- Chiedere all'utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma */

const answer = prompt('Inserisci una parola qualsiasi e scopri se è palindroma!');

let splitted = answer.split('')
console.log(splitted);

inverted = splitted.reverse();
console.log(inverted);
let reunited = splitted.join('');
console.log(reunited);

if(answer == reunited){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  