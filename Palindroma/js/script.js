/* Palidroma
- Chiedere all'utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma */

let answer = prompt('Inserisci una parola qualsiasi e scopri se è palindroma!');
  
function IsPalindrome() {

  let splitted = answer.split('')
  console.log(splitted);

  inverted = splitted.reverse();
  console.log(inverted);
  let reunited = splitted.join('');
  console.log(reunited);

  if(answer == reunited){
      prompt('la parola è palindroma');
    } else {
      prompt('la parola non è palindroma');
    }
}

const palindrome = IsPalindrome();