let menu = document.querySelector(".menu");
let ul = document.querySelector(".collapse nav ul");
menu.addEventListener("click",function(){
    ul.classList.toggle("showNav");

    console.log(ul);
})
