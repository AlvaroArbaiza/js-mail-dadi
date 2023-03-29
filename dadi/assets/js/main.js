/*
Gioco dei dadi:
    - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    - Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Creo due variabili con numeri decimali random
let playerY = ( Math.floor( Math.random() * 6) + 1 );

let playerX = ( Math.floor( Math.random() * 6) + 1 );

console.log(playerY, playerX);

let risultato;

if (playerX < playerY) {

    risultato = `CPU is the WINNER!`
} else if (playerX > playerY) {

    risultato = `You are the WINNER!`
} else {

    risultato = `Nobody wins. Try again!`
    console.log(`pari`)
}

document.getElementById(`container`).innerHTML = `

    <div id="game">
    
        <div class="players">
            <img src="./assets/img/Dice_${playerX}.png" alt="">
            <h2>You</h2>
        </div> 

        <div id="btn">
            <button id="gioca">
                <h2>Gioca!</h2>
            </button>
        </div>  

        <div class="players">
            <img src="./assets/img/Dice_${playerY}.png" alt="">
            <h2>CPU</h2>
        </div>
        
    </div>

    <div id="result">
        <p>${risultato}</p>
    </div> 
`; 