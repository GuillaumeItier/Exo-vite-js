const btn = document.querySelector(".js-btn");
const description = document.querySelector(".js-description");
const count = document.querySelector(".js-count");

let counter = 0;                          // Déclarer le compteur au début pour qu'il ne se redéclare pas
let interval = null;                      // Déclarer la variable interval en dehors pour pouvoir l'arréter n'importe ou

const countDown = function () {
    interval = setInterval(function () {  // On affecte setInterval
        counter++;                        // On incrémente counter 
        count.textContent = counter;      // On affiche le compteur
    }, 1000);                             // Répétition toutes les secondes
};

btn.addEventListener("click", function () {
    if (btn.textContent === "Pause") {    // Si le bouton affiche Pause (le chrono tourne)
        clearInterval(interval);          // Arrêt du chrono
        btn.textContent = "Démarrer";     // On change la valeur du bouton
    } else {
        countDown();                      // Sinon on relance le chrono
        btn.textContent = "Pause";        // On change la valeur du bouton 
    }
});