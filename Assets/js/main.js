// FUNZIONE PAROLE PALINDROME
function isPal() {

    for (let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];
        // console.log("lettera per lettera al contrario:", wordReverse)
    }
    
    console.log("La parola al contrario è:", wordReverse)

    if (wordReverse === word) {
        // console.log(`${word} è palindroma!`);
        return true;
    } 
    // console.log(`${word} NON è palindroma!`);
    return false;
}

// Dichiaro Variabili
let word = prompt("Inserisci una parola");
console.log("L'utente scrive: ", word);
let wordReverse = "";
let risultato = isPal(word);
console.log("La parola è palindroma? La funzione dice:", risultato)