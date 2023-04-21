// FUNZIONE PAROLA PALINDROMA
function isPal() {

    // Ciclo for che scrive la parola al contrario
    for (let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];
    }

    // Controlla se la parola al contrario è uguale alla parola scritta dall'utente
    if (wordReverse === word) {
        alert("La parola " + word + " è palindroma!");
        return true;
    } 
    alert("La parola " + word + " NON è palindroma!");
    return false;
}

// FUNZIONE GIOCO PARI/DISPARI GENERA NUMERO CASUALE DA 1 A 5
function getRandomNumber() {

    let number = Math.floor(Math.random() * 5 + 1);
    return number;

}

// FUNZIONE GIOCO PARI/DISPARI CONTROLLA SE IL NUMERO É PARI O DISPARI
function isEvenOrOdd(num) {
    
    let gameEvOd = "DISPARI";

    // se è pari
    if (num % 2 == 0) {
        gameEvOd = "PARI";
    }

    return gameEvOd;
}

// FUNZIONE RICARICA PAGINA WEB 
function reloadPage() {
    window.location.reload();
}

// DICHIARO VARIABILI

// Variabili Parola Palindroma
let word = prompt("Inserisci una parola");
let wordReverse = "";
let risultato = isPal(word);

// Variabili Gioco Pari/Dispari
const gameResultPage = document.getElementById('game');
const gameInfoPage = document.getElementById('gameInfo');
const btnReload = document.getElementById('btnReload');
const win = "HAI VINTO!"
const lose = "HAI PERSO"
let inputPariDispari = prompt("Scegli PARI o DISPARI? Scrivilo qui sotto:").toUpperCase();

// Controlla se l'input pari/dispari inserito è valido
if (inputPariDispari != "PARI" && inputPariDispari != "DISPARI") {

    // Se il valore non è valido la pagina automaticamente si ricarica
    alert("Mi spiace, dato non valido. La prossima volta inserisci solo la parola: pari. Oppure la parola: dispari. La pagina si ricarica in automatico.");
    reloadPage();

} else {

    // Se il valore è valido l'utente continua:
    let inputNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
    let computerNumer = getRandomNumber();
    let sommaGioco = inputNumber + computerNumer;
    let gameResult = isEvenOrOdd(sommaGioco);

    // Controlla se l'input numero inserito è valido
    if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 5) {

        // Se il valore non è valido la pagina automaticamente si ricarica
        alert("Mi spiace, dato non valido. La prossima volta inserisci un numero da 1 a 5, digitando solo caratteri numerici. La pagina si ricarica in automatico.");
        reloadPage();

    } else {
        
        // Se il valore è valido l'utente continua:
        alert("Gioco con te! Inserisco anch'io un numero casuale da 1 a 5.");
        alert(`Ora sommo i due numeri... se il risultato è ${inputPariDispari}, hai vinto!`);
        btnReload.classList.remove('dNone');
        btnReload.addEventListener("click", reloadPage);
        gameInfoPage.innerText = `Tu hai inserito il numero ${inputNumber}. Io ho inserito il numero ${computerNumer}. La somma (${sommaGioco}) è un numero ${gameResult}. Tu hai detto ${inputPariDispari}, quindi`;

        // Stampiamo nella pagina se l'utente ha vinto o perso:
        if (gameResult == inputPariDispari) {

            // Se ha vinto
            gameResultPage.innerText = win;
            gameInfoPage.innerText += ` ${win}`;
            document.querySelector('.firework').classList.remove('dNone');

        } else {

            // Se ha perso
            gameResultPage.innerText = lose + " 🫤";
            gameInfoPage.innerText += " " + lose.toLowerCase() + ".";

        }
    }
}