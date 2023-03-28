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

// Creazione variabile booleana per verifica condizione
let invitato = false;

// Creazione evento al click di submit
function myFunction() {
    
    // Creo la variabile collegata all'input(#email) nel DOM
    let input = document.getElementById(`email`).value;
    
    // Creazione ciclo per dare una numerazione a ogni stringa della lista array
    for (i = 0; i < listaInvitati.length; i++) {
    
        if ( listaInvitati[i] == input ) {
    
            invitato = true;
        }          
    }

    if ( invitato ) {
        document.getElementById("risposta").innerHTML = `Sei stato invitato!`;
    } else {
        document.getElementById("risposta").innerHTML = `Non sei stato invitato!`;
    }

}

