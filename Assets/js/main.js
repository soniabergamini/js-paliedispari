// FUNZIONE PAROLA PALINDROMA
function isPal() {

    // Ciclo for che scrive la parola al contrario
    for (let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];
    }
    // console.log("La parola al contrario è:", wordReverse);

    // Controlla se la parola al contrario è uguale alla parola scritta dall'utente
    if (wordReverse === word) {
        alert("La parola " + word + " è palindroma!");
        return true;
    } 
    alert("La parola " + word + " NON è palindroma!");
    return false;
}

// FUNZIONE GIOCO PARI/DISPARI GENERA NUMERO CASUALE
function getRandomNumber() {

    let number = Math.floor(Math.random() * 101)

    return number;

}

// FUNZIONE GIOCO PARI/DISPARI CONTROLLA SE IL NUMERO É PARI O DISPARI
function isEvenOrOdd(num) {
    
    let gameEvOd = "DISPARI"

    // se è pari
    if (num % 2 == 0) {
        gameEvOd = "PARI"
    }

    return gameEvOd;
}

// DICHIARO VARIABILI

// Variabili Parola Palindroma
let word = prompt("Inserisci una parola");
let wordReverse = "";
let risultato = isPal(word);
// console.log("L'utente scrive la parola: ", word);
// console.log("La parola è palindroma? La funzione dice:", risultato);

// Variabili Gioco Pari/Dispari
const gameResultPage = document.getElementById('game');
const gameInfoPage = document.getElementById('gameInfo');
let inputPariDispari = prompt("Scegli PARI o DISPARI? Scrivilo qui sotto:").toUpperCase()
// console.log("Per il gioco, l'utente sceglie:", inputPariDispari);

// if controlla se l'input pari/dispari inserito è valido
if (inputPariDispari != "PARI" && inputPariDispari != "DISPARI") {

    // Se il valore non è valido la pagina automaticamente si ricarica
    alert("Mi spiace, dato non valido. La prossima volta inserisci solo la parola: pari. Oppure la parola: dispari. La pagina si ricarica in automatico.");
    window.location.reload();

} else {

    // Se il valore è valido l'utente continua:
    let inputNumber = parseInt(prompt("Inserisci un numero:"));
    let computerNumer = getRandomNumber();
    let sommaGioco = inputNumber + computerNumer;
    let gameResult = isEvenOrOdd(sommaGioco);

    // if controlla se l'input numero inserito è valido
    if (isNaN(inputNumber)) {

        // Se il valore non è valido la pagina automaticamente si ricarica
        alert("Mi spiace, dato non valido. La prossima volta inserisci un numero digitando solo caratteri numerici. La pagina si ricarica in automatico.");
        window.location.reload();

    } else {
        
        // Se il valore è valido l'utente continua:
        /* console.log("Per il gioco, l'utente inserisce il numero:", inputNumber);
        console.log("Per il gioco, il computer inserisce il numero:", computerNumer);
        console.log("La somma dei due numeri è uguale a:", sommaGioco + ". Il numero è:", gameResult); */
        alert("Gioco con te! Inserisco anch'io un numero casuale.");
        alert(`Ora sommo i due numeri... se il risultato è ${inputPariDispari}, hai vinto!`);

        // Stampiamo nella pagina se l'utente ha vinto o perso:
        if (gameResult == inputPariDispari) {

            // Se ha vinto
            gameResultPage.innerText = "HAI VINTO!"
            gameInfoPage.innerText = `Tu hai inserito il numero ${inputNumber}. Io ho inserito il numero ${computerNumer}. La somma (${sommaGioco}) è un numero ${gameResult}. Tu hai detto ${inputPariDispari}, quindi HAI VINTO!`

        } else {

            // Se ha perso
            gameResultPage.innerText = "HAI PERSO!"
            gameInfoPage.innerText = `Tu hai inserito il numero ${inputNumber}. Io ho inserito il numero ${computerNumer}. La somma (${sommaGioco}) è un numero ${gameResult}. Tu hai detto ${inputPariDispari}, quindi hai perso.`

        }
    }
}