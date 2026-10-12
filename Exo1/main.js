const btn = document.querySelector(".js-btn");
const description = document.querySelector(".js-description");
const count = document.querySelector(".js-count");


let countdown = "" ;
btn.addEventListener("click" , function(e) {
    e.preventDefault();
    clearInterval(countdown);
    let counter = 3 ;
    description.classList.add("display");
    count.classList.add("display");
    count.textContent = counter ;
    countdown = setInterval( function (){
        if(counter <= 1){
            description.classList.remove("display");
            count.classList.remove("display");
            clearInterval(countdown);
        }
        if (counter >= 1){
            counter -- ;
           count.textContent = counter ;
        }
        console.log(counter);
    },1000);
})
