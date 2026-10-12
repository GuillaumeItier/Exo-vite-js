const tagInput = document.getElementById("tag");
const btn = document.getElementsByClassName("js-btn")[0];
const description = document.getElementsByClassName("js-description");
const listTag = document.getElementsByClassName("js-list-tag");
const boxTagList = document.querySelectorAll(".js-box-tag > li");
const boxTag = document.querySelector(".js-box-tag");

btn.addEventListener("click", function(e){
    e.preventDefault();
    let value = tagInput.value.trim().toLowerCase();
    let tagArray = Array.from(boxTag.children).map(x => x.textContent.trim().toLowerCase());
    if (tagArray.includes(value) === false ){
        tagArray.push(value);
        Array.from(boxTag.children).forEach( li => li.remove());
        tagArray.sort();
        tagArray.forEach( x => {
            const li = document.createElement("li");
            li.textContent = x ;
            boxTag.append(li) ;
        })
    }
})

