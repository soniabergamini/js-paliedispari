// FUNZIONE PAROLA PALINDROMA
function isPal() {

    // ciclo for che scrive la parola al contrario
    for (let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];
        // console.log("lettera per lettera al contrario:", wordReverse)
    }
    
    console.log("La parola al contrario è:", wordReverse);

    // if controlla se la parola al contrario è uguale alla parola scritta dall'utente e la funzione restituisce true/false.
    if (wordReverse === word) {
        // console.log(`${word} è palindroma!`);
        alert("La parola " + word + " è palindroma!");
        return true;
    } 
    // console.log(`${word} NON è palindroma!`);
    alert("La parola " + word + " NON è palindroma!");
    return false;
}

// DICHIARO VARIABILI

// Variabili Parola Palindroma
let word = prompt("Inserisci una parola");
console.log("L'utente scrive la parola: ", word);
let wordReverse = "";
let risultato = isPal(word);

// PAROLA PALINDROMA: Stampa il risultato
console.log("La parola è palindroma? La funzione dice:", risultato);

// Variabili Gioco Pari/Dispari
let inputPariDispari = prompt("Scegli PARI o DISPARI? Scrivilo qui sotto:").toUpperCase()
console.log("Per il gioco, l'utente sceglie:", inputPariDispari);

// IF CONTROLLA SE L'INPUT PARI/DISPARI INSERITO É VALIDO
if (inputPariDispari != "PARI" && inputPariDispari != "DISPARI") {

    // Se il valore non è valido la pagina automaticamente si ricarica
    alert("Mi spiace, dato non valido. La prossima volta inserisci solo la parola: pari. Oppure la parola: dispari. La pagina si ricarica in automatico.");
    window.location.reload();

} else {

    // Se il valore è valido l'utente continua:
    let inputNumber = parseInt(prompt("Inserisci un numero:"));

    // IF CONTROLLA SE L'INPUT NUMERO INSERITO É VALIDO
    if (isNaN(inputNumber)) {

        // Se il valore non è valido la pagina automaticamente si ricarica
        alert("Mi spiace, dato non valido. La prossima volta inserisci un numero digitando solo caratteri numerici. La pagina si ricarica in automatico.");
        window.location.reload();

    } else {
        
        // Se il valore è valido l'utente continua:
        console.log("Per il gioco, l'utente inserisce il numero:", inputNumber);

    }
}