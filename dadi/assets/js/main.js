/*
Mail:
    - Chiedi all’utente la sua email,
    - controlla che sia nella lista di chi può accedere,
    - stampa un messaggio appropriato sull’esito del controllo.
*/

// 1.- Chiedi all'utente la sua email

// 2.- Metto un input sul DOM e lo collego a main.js

// 3.- Creo la condizione attraverso la quale il value dell'input corrisponda oppure no alla lista (insieme array)

// 4.- Quando il value dell'input corrisponde alla condizione stampo un messaggio sull'esito del controllo


/* -------------------------------------------------------------------------------------------- */


// Creo la variabile collegata all'input(#email) nel DOM
const input = document.getElementById(`email`).value;

// Creo l'insieme listaInvitati(array) per avere una lista di email che corrisponda al value inserito nell'input
const listaInvitati = [
    `alvaroarbaiza@gmail.com`,
    `vincenzoroma@gmail.com`,
    `luisabarone@gmail.com`,
    `pincopallino@gmail.com`,
    `bianconero@gmail.com`,
    `gialloblu@gmail.com`,
    `truefalse@gmail.com`,
    `classeid@gmail.com`,
    `htmlcss@gmail.com`,
    `bootstrap@gmail.com`,
    `javascript@gmail.com`
];

console.log(input)

function myFunction() {

    if ()
}