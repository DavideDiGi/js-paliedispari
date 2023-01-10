/* Pari e dispari
- L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto. */

/* STEP:
- Definisco una funzione che verifichi se il numero scelto dall'utente è pari o dispari.
- Definisco una funzione che generi un numero casuale da 1 a 5.
- Chiedo all'utente di scegliere pari o dispari.
- Chiedo all'utente di inserire un numero da 1 e 5.
- Verifico se il numero scelto dall'utente è pari o dispari.
- Genero un numero casuale da 1 a 5 per il computer e verifico se è pari o dispari.
- Sommo i due numeri stabilendo se la loro somma è pari o dispari.
- Dichiaro il vincitore. */



const answer = prompt('Pari o Dispari? Scrivi la tua risposta qua sotto! \n(Scrivere la propria scelta con la lettera maiuscola)');

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));

const choose = EvenOrOdd(userNumber);

const computerNumber = RandomCreate(1,5);

const sum = EvenOrOddWinner(userNumber, computerNumber);


if (sum == true && answer === 'Pari') {
    prompt('Il tuo avversario ha scelto ' + computerNumber + ', quindi è pari! Hai vinto!');
}
else if (sum == false && answer === 'Pari') {
    prompt('Il tuo avversario ha scelto ' + computerNumber + ', quindi è dispari! Hai perso..\naggiorna la pagina per riprovare!');
}

else if (sum == true && answer === 'Dispari') {
    prompt('Il tuo avversario ha scelto ' + computerNumber + ', quindi è pari! Hai perso..\naggiorna la pagina per riprovare!');
}

else if (sum == false && answer === 'Dispari') {
    prompt('Il tuo avversario ha scelto ' + computerNumber + ', quindi è dispari! Hai vinto!');
}

else {
    prompt('ERRORE, i dati inseriti non sono validi');
}


