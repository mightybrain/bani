const changeHeaderState = () => {

    if(window.pageYOffset > headerBreakPoint && header.classList.contains("head--wide")){
        header.classList.remove("head--wide");
    }else if(window.pageYOffset < headerBreakPoint && !header.classList.contains("head--wide")){
        header.classList.add("head--wide");
    }

}

if(document.querySelector(".js-head")){

    window.header = document.querySelector(".js-head");
    window.headerBreakPoint = 100;

    window.addEventListener("load", changeHeaderState);
    window.addEventListener("scroll", changeHeaderState);

}