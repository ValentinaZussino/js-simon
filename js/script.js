// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 3 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// prendo btn play
const btnPlay = document.getElementById('play');
// prendo span rand-num
const spanNumeri = document.getElementById('rand-num');
// funzione per generare numeri e farli sparire al timeout
function playAndHide(){
    // var per il numero di nm rand
    let maxNumRand = 5;
    // creo un array vuoto dove pushare i 5 num random
    let numeri = []
    // creo ciclo while che genera i 5 numeri random fino a length < maxNumRand. Pusho i num nell'array se numeri non include numero generato
    while (numeri.length < maxNumRand) {
        let numero = randomNumber(1, 30);
        if(!numeri.includes(numero)){
            numeri.push(numero);
        }
    }
    console.log(numeri);
    //stampare i num dell'array nello span
    spanNumeri.innerHTML = numeri;
    // imposto il timeout function di 3 secondi
    const timeOut = setTimeout(numeriHidden, 3000);
    // la funzione da chiamare al timeout deve far sparire i numeri
    function numeriHidden(){
        spanNumeri.innerHTML = '';
        // chiedo all'utente i num visti inserrendoli in input
        const question = document.querySelector('p');
        question.innerHTML = 'Inserisci i numeri che hai visto uno alla volta';
    }
}
// on click di play
btnPlay.addEventListener('click', playAndHide);

// al click del bottone invia invio il valore in un array e far sì che non possa inserire più di 5 volte
// quindi creo array vuoto
const arrayUtente = [];
// prendo btn per usare dopo il click
const buttonSend = document.getElementById('btn-send');
// prendo campo input 
const inputHtml = document.getElementById('answer');
// creo funzione per pushare il value dentro array utento al click
function valuePushInArrayUt(){
    //se length array utente minore di maxNumRand prendo value e lo pusho altrimenti tolgo il click
    if(arrayUtente.length < maxNumRand){
        let inputValue = parseInt(inputHtml.value);
        arrayUtente.push(inputValue);
        console.log(arrayUtente);
        inputHtml.value = '';
    }else{
       buttonSend.removeEventListener('click', valuePushInArrayUt); 
    }
}
buttonSend.addEventListener('click', valuePushInArrayUt);

// devo controllare che i num in arrayUtente siano uguali a quelli in numeri
// prendo btn verifica
const btnVerify = document.getElementById('verify');
// mi faccio funzione per confrontare gli elem dei due array e far vedere quelli giusti all'utente
function verify(){
    // definisco var per perdita/vittoria
    let perdita = false;
    // controlla se il numero inserito dall'utente sia lo stesso mostrato in quell'ordine
    for(let i = 0; i < arrayUtente.length; i++){
        if(arrayUtente[i] != numeri[i]){
    //in caso l'utente sbagli anche solo una volta
        perdita = true;
        }
    }
    // creo un p da appendere al div per dichiarare visivamente vittoria o perdita e prendo il div
    const divResult = document.querySelector('div');
    const textResult = document.createElement('div');
    // stabilisco cosa succede se perdita true/false
    if(perdita) {
        textResult.innerHTML = `
        <p>Sfortunatamente i numeri da te inseriti sono: ${arrayUtente}</p>
        <p>Mentre i numeri presentati erano: ${numeri}</p>
        `;
    } else {
        textResult.innerHTML = `<p>Complimenti ottima memoria!</p>`;
    }
    divResult.appendChild(textResult);
}
btnVerify.addEventListener('click', verify);