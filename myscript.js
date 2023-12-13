/*Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*TO DO*

-Chiedere all’utente di inserire una parola,per poi estrearne il valore e salvarlo in variabile (event listener alla fine, usa prompt per niziare)
- Creare una funzione per capire se la parola inserita è palindroma, che entra in gioco al click del bottone
-Stampare un messagio contenente il risultato per l'utente, ad ogni tentativo
*/

//creazione event listener per ottenere la parola
const btn = document.getElementById("checkBtn");
let parola = document.getElementById("wordInput").value;

btn.addEventListener("click", 
    function() {
        let parola = document.getElementById("wordInput").value;
        console.log(parola);
    }
);
