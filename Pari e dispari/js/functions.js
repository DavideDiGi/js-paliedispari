// Funzione che verifica se un numero è pari o dispari

function EvenOrOdd(number) {

    if (isNaN(number)) {

        return 'ERRORE';

    }
    else if (number % 2 == 0) {

        return 'pari';
    
    }
        
    return 'dispari';

}

// Funzione che genera un numero casuale tra due numeri definiti min e max

function RandomCreate(min, max) {
    
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;

}

// Funzione che stabilisce il vincitore di pari o dispari

function EvenOrOddWinner(number1, number2) {
    const sum = number1 + number2;

    if (isNaN(number1, number2)) {

        return 'ERRORE';

    }

    else if (sum % 2 == 0) {
        return true;
    }

    return false;
}