/* 

DESCRIZIONE

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.

*/

/*

Tools
- prompt
- if/else
- console log
- getElementById
- x.toFixed(2)

*/

// Chiedi i km da percorrere

const kmToDo = Number(prompt('Quanti km devi percorrere?', '10'));

console.log(kmToDo);

// Verifica dati inseriti
if (isNaN(kmToDo)) {
    alert('inserisci il numero di km da percorrere');
}

// Chiedi età passeggero

const anniPasseggero = Number(prompt('Quanti anni hai?', '34'));

console.log(anniPasseggero);

// Verifica dati inseriti
if (isNaN(anniPasseggero)) {
    alert('inserisci il numero dei tuoi anni');
}


// Calcola prezzo

const prezzoPerKm = 0.21;

console.log(prezzoPerKm + '€');

let costoTot = kmToDo * prezzoPerKm;

console.log(costoTot + '€');

// Verifica se è minore di 18
// Verifica se è maggiore di 65
// Stampa il risultato


if (anniPasseggero < 18) {
    let costoTot = ((kmToDo * prezzoPerKm) / 100) * 80;
    console.log(costoTot.toFixed(2) + '€');
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è ' + (costoTot.toFixed(2));
} else if (anniPasseggero > 65) {
    let costoTot = ((kmToDo * prezzoPerKm) / 100) * 60;
    console.log(costoTot.toFixed(2) + '€');
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è ' + (costoTot.toFixed(2));
} else if (isNaN(costoTot)) {
    console.log('riprova');
    document.getElementById('price').innerHTML = 'Riprova';
} else {
    console.log(costoTot.toFixed(2));
    document.getElementById('price').innerHTML = 'Il prezzo del tuo biglietto è ' + (costoTot.toFixed(2));
}

