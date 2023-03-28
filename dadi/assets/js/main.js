/*
Gioco dei dadi:
    - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    - Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Creo due variabili con numeri decimali random
let playerY = ( Math.floor( Math.random() * 6) + 1 );

let playerX = ( Math.floor( Math.random() * 6) + 1 );

console.log(playerY, playerX);

if (playerX < playerY) {

    risultato = `PlayerX is the WINNER!`
    console.log(true)
} else if (playerX > playerY) {

    risultato = `PlayerY is the WINNER!`
    console.log(false)
} else {

    risultato = `Nobody wins. Try again!`
    console.log(`pari`)
}

document.getElementById(`game`).innerHTML = `

    <div>
        <h2>${playerY}</h2>
        <h2>${playerX}</h2>
    </div> 
    <div>
        <p>${risultato}</p>
    </div> 
`; 