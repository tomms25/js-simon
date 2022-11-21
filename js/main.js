// Descrizione:
// Un alert() espone 5 numeri generati casualmente.

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function enterNumber(num, array){
    for (let i = 0; i < num; i++){
        let userChoice = parseInt(prompt("Inserisci un numero!"));
        array.push(userChoice);
    }
    return userNumbers;
}

function elementInArray(element, array){
    for (let i = 0; i < array.length; i++){
        if (element == array[i]){
            return true;
        }
    }
    return false;
}

let randomNumbers = [];
let score = [];
let userNumbers = [];

for (let i = 0; i < 5; i++){
    let casualNumbers = randomNumber(1,100);
    randomNumbers.push(casualNumbers);
}

alert("Memorizza questi numeri!:\n" + randomNumbers);

// Da li parte un timer di 30 secondi.
setTimeout(function() {
    // Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
    enterNumber(5, userNumbers);

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    for (let i = 0; i<userNumbers.length; i++) {
        if (elementInArray(userNumbers[i], randomNumbers)) {
            score.push(userNumbers[i]);
        }
    }
    console.log("Hai indovinato " + score.length + " numeri: " + score.join(", "));
    // [1, 2, 3].join(", ") => "1, 2, 3"
}, 3000);