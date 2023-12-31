/*Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*TO DO*

-Chiedere all’utente di inserire una parola,per poi estrearne il valore e salvarlo in variabile (event listener alla fine, usa prompt per niziare)
- Creare una funzione per capire se la parola inserita è palindroma, che entra in gioco al click del bottone
-Stampare un messagio contenente il risultato per l'utente, ad ogni tentativo
*/

// creo la booleana di controllo 
let check = false;

function reverseWord(parola) {
    // invertire la parola per confrontarla
    //let reversed = 'it works';
    let reversed = '';
    for ( let i = parola.length -1; i >= 0; i--) {
        reversed += parola[i];
    }
    //console.log(reversed);
    // se le parole coincidono la parola è palindroma
    // stampare se la parola è palindoma o meno 
    if (parola == reversed) {
        // cambio la booleana
        check = true;
        //console.log('it works')
    } else {
        check = false;
    }
}


//a questo punto, ho creato la funzione che mi serve triggerare al click dell'event listener, quindi lo inserisco nel mio sistema

//seleziono anche la zona adibita alla ricezione del messaggio da parte del programma per l'utente, cosi da terminare stamoando in pagina il risultato 



//creazione event listener per ottenere la parola
const btn = document.getElementById("checkBtn");
let parola = document.getElementById("wordInput").value;

//seleziono luogo dove stampero il mio output
let resultText = document.getElementById("resultContainer");

btn.addEventListener("click", 
    function() {
        let parola = document.getElementById("wordInput").value;
        //console.log(parola);

        reverseWord(parola);//richiamo la funzione che ho creato in precedenza

        if (parola == '') {
            resultText.innerHTML = 'Devi prima inserire una parola.';
        } else if (check == true) {
            resultText.innerHTML = 'La tua parola è palindroma.';
        } else {
            resultText.innerHTML = 'La tua parola NON è palindroma.';
        }  //condizionale che mi permette di stampare in pagina l'output
    }
);


// dichiarare la funzione per controllare il palindromo, la funzione mi deve ciclare al contrario le parole inserite e dovra avere delle condizioni, quindi serve un ciclo for diverso dal solito e i condizionali con i booleani
