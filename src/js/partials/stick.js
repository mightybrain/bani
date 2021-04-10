class Sticky{
    constructor(container){
        this.stickyContainer = container;
        this.stickyElem = container.querySelector(".js-sticky");
    }
}

if(document.querySelector(".js-sticky-container")){
    window.stickyElems = [];

    document.querySelectorAll(".js-sticky-container").forEach(function(item){
        stickyElems.push(new Sticky(item));
    })

    window.addEventListener("scroll", function(){
        window.stickyElems.forEach(function(item){
            stick(item.stickyContainer, item.stickyElem);
        })
    })

    window.addEventListener("resize", function(){
        window.stickyElems.forEach(function(item){
            stick(item.stickyContainer, item.stickyElem);
        })
    })

}

function stick(container, elem){

    const containerTopScrolled = container.getBoundingClientRect().top < 0 ? true : false;
    const containerBottomScrolled = container.getBoundingClientRect().bottom < elem.clientHeight ? true : false;

    if(containerBottomScrolled){

        elem.classList.add("js-stick-to-bottom");
        elem.classList.remove("js-stick-to-screen");

    }else if(!containerBottomScrolled && containerTopScrolled){

        elem.classList.add("js-stick-to-screen");
        elem.classList.remove("js-stick-to-bottom");        

    }else if(!containerTopScrolled){

        elem.classList.remove("js-stick-to-screen");
        elem.classList.remove("js-stick-to-bottom");     

    }

}