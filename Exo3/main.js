const tagInput = document.getElementById("tag");                         /* <input>    champ du formulaire   */
const btn = document.getElementsByClassName("js-btn")[0];                /* <button>   bouton du formulaire  */
const description = document.getElementsByClassName("js-description");   /* <p>        description           */
const listTag = document.getElementsByClassName("js-list-tag")[0];       /* <p>        liste des tags        */
const boxTagList = document.querySelectorAll(".js-box-tag > li");        /* <li>       liste des badges      */
const boxTag = document.querySelector(".js-box-tag");                    /* <div>      contenaire des bagdes */

btn.addEventListener("click", function(e){
    e.preventDefault();
    //on récupère la valeur de l'input, on enlève les espace et on transforme en minuscule pour éviter la casse.
    let value = tagInput.value.trim().toLowerCase();

    //On récupère la liste des bages avec .children sur leur parents afin de les récupérer de façon dynamique
    //Array.from pour transformer la liste node en tableau 
    //Suivi d'un parcours du tableau avec la méthode map(), ou je vais transformer le contenu de chaque élément (textContent) avec trim et toLowercase afin de pouvoir les comparer (.children ou querySelectorAll(boxTagList) 
    let tagArray = Array.from(boxTag.children).map(x => x.textContent.trim().toLowerCase());

    //On compare la valeur de l'input et la liste de tag 
    if (tagArray.includes(value) === false ){
        tagArray.push(value);                                     /* Si la valeur n'est pas présente alors on l'insère avec push() */
        Array.from(boxTag.children).forEach( li => li.remove());  /* On suprime tout les badges présents */
        tagArray.sort();                                          /* On tri le nouveau tableau qui contient les anciens + le nouveau tag */
        tagArray.forEach( x => {                                  /* On parcours le tableau */
            const li = document.createElement("li");              /* On créer les nouveaux éléments <li> */
            li.textContent = x ;                                  /* On ajoute la valeur présent dans la case parcouru */
            boxTag.append(li) ;                                   /* ON insère à chaque tour la balise et son contenu dans l'ordre */
        })
    }
})

