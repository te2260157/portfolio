const about = document.querySelector(".about-content");


window.addEventListener("scroll",()=>{

    const position = about.getBoundingClientRect().top;

    const screen = window.innerHeight;


    if(position < screen - 100){

        about.classList.add("show");

    }

});