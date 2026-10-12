const btn = document.querySelector(".js-btn");
const description = document.querySelector(".js-description");
const count = document.querySelector(".js-count");

let counter = 0 ;

const countDown = function (){
   const interval = setInterval( function () {
    if (btn.textContent == "Pause" ){
        counter++ ; 
        count.textContent = counter ;
       }
    else {
        clearInterval(interval);
        count.textContent = counter ;
    }
    },1000)
}

btn.addEventListener("click", function (){
   if (btn.textContent === "Pause"){
    btn.textContent = "Démarrer" ;
   } else{
    countDown();
    btn.textContent = "Pause" ;
   }
})