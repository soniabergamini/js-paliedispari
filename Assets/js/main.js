// FUNZIONE PAROLA PALINDROMA
function isPal() {

    // ciclo for che scrive la parola al contrario
    for (let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];
        // console.log("lettera per lettera al contrario:", wordReverse)
    }
    
    console.log("La parola al contrario è:", wordReverse)

    // if controlla se la parola al contrario è uguale alla parola scritta dall'utente e la funzione restituisce true/false.
    if (wordReverse === word) {
        // console.log(`${word} è palindroma!`);
        return true;
    } 
    // console.log(`${word} NON è palindroma!`);
    return false;
}

// DICHIARO VARIABILI
let word = prompt("Inserisci una parola");
console.log("L'utente scrive: ", word);
let wordReverse = "";
let risultato = isPal(word);
console.log("La parola è palindroma? La funzione dice:", risultato)