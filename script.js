// ======================
// 화면 슉슉 이동
// ======================

const sections = document.querySelectorAll("section");

let currentSection = 0;

let isScrolling = false;


window.addEventListener("wheel", (e)=>{


    if(isScrolling) return;


    isScrolling = true;


    if(e.deltaY > 0){

        currentSection++;

    }
    else{

        currentSection--;

    }


    if(currentSection < 0){

        currentSection = 0;

    }


    if(currentSection >= sections.length){

        currentSection = sections.length - 1;

    }


    sections[currentSection].scrollIntoView({

        behavior:"smooth"

    });


    setTimeout(()=>{

        isScrolling = false;

    },1000);


});




// ======================
// 등장 애니메이션
// ======================


const observer = new IntersectionObserver((entries)=>{


    entries.forEach((entry)=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{

    threshold:0.3

});



// 등장시키고 싶은 요소들

const animatedElements = document.querySelectorAll(

    ".about-content, .project-card, .skill-card"

);


animatedElements.forEach((el)=>{

    observer.observe(el);

});