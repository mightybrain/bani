class Burger{
    constructor(elem){
        this.burger = elem;
        this.init();
    }

    init(){
        this.burger.addEventListener("click", () => {
            document.body.classList.toggle("js-burger-menu-is-open");
        })
    }

}

if(document.querySelector(".js-burger")){
    new Burger(document.querySelector(".js-burger"));
}


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


if(document.querySelector(".js-baths-slider")){

    const links = document.querySelectorAll(".js-dependent-href");

    new Swiper(".js-baths-slider", {
        speed: 1200,
        slidesPerView: "auto",
        loop: false,
        autoHeight: true,
        direction: "horizontal",
        watchOverflow: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".js-baths-slider-arrow-next",
            prevEl: ".js-baths-slider-arrow-prev",
        },
        on: {
            init: function(){
                changeLinkHrefs(links, this.wrapperEl.childNodes[this.activeIndex]);
            },
            slideChange: function(){
                changeLinkHrefs(links, this.wrapperEl.childNodes[this.activeIndex]);
            }
        }
    })

}

function changeLinkHrefs(nodes, hrefSource){
    console.log(nodes)
    nodes.forEach(function(item){
        item.setAttribute("href", hrefSource.getAttribute("data-href"))
    })
}

if(document.querySelector(".js-advantages-slider")){

    new Swiper(".js-advantages-slider", {
        speed: 1200,
        slidesPerView: "auto",
        loop: false,
        autoHeight: true,
        direction: "horizontal",
        watchOverflow: true,
        navigation: {
            nextEl: ".js-advantages-slider-arrow-next",
            prevEl: ".js-advantages-slider-arrow-prev",
        },
    })

}

if(document.querySelector(".js-events-slider")){

    new Swiper(".js-events-slider", {
        speed: 1200,
        slidesPerView: 1,
        loop: false,
        autoHeight: true,
        direction: "horizontal",
        breakpoints: {
            320: {
                spaceBetween: 15
            },
            600: {
                spaceBetween: 20
            },
            1480: {
                spaceBetween: 38
            }
        },
        watchOverflow: true,
        navigation: {
            nextEl: ".js-events-slider-arrow-next",
            prevEl: ".js-events-slider-arrow-prev",
        },
    })

}

if(document.querySelector(".js-images-slider")){

    new Swiper(".js-images-slider", {
        speed: 1200,
        slidesPerView: "auto",
        loop: false,
        direction: "horizontal",
        breakpoints: {
            320: {
                spaceBetween: 15
            },
            600: {
                spaceBetween: 20
            },
            1480: {
                spaceBetween: 38
            }
        },
        watchOverflow: true,
        navigation: {
            nextEl: ".js-images-slider-arrow-next",
            prevEl: ".js-images-slider-arrow-prev",
        },
    })

}

if(document.querySelector(".js-services-slider")){

    new Swiper(".js-services-slider", {
        speed: 1200,
        slidesPerView: "auto",
        loop: false,
        autoHeight: true,
        direction: "horizontal",
        breakpoints: {
            320: {
                spaceBetween: 15
            },
            600: {
                spaceBetween: 20
            },
            1480: {
                spaceBetween: 38
            }
        },
        watchOverflow: true,
        navigation: {
            nextEl: ".js-services-slider-arrow-next",
            prevEl: ".js-services-slider-arrow-prev",
        },
    })

}


// Инициализация карты Яндекс
if(document.querySelector(".js-map")){

    ymaps.ready(() => {
        let map = new ymaps.Map(document.querySelector(".js-map"), {
            center: [56.803756, 60.723346],
            zoom: 15,
            controls: [],     
        })
    
        map.geoObjects.add(
            new ymaps.Placemark([56.803756, 60.723346], {
                hintContent:"",
                balloonContent:""
            }, {
                iconLayout: "default#image",
                iconImageHref: "../images/pin.png",
                iconImageSize: [32, 37],
                iconImageOffset: [-16, -37]
            })
        )
    })

}


class ScrollButton{

    constructor(button){
        this.button = button;
        this.target = document.querySelector("[data-anchor=" + button.getAttribute("data-target") + "]");
        this.init();
    }

    init(){
        let _this = this;

        this.button.addEventListener("click", function(){

            if(!inScrollNow){
                inScrollNow = true;

                let targetScrollPosition = window.pageYOffset + _this.target.getBoundingClientRect().top;
    
                scrollTo(targetScrollPosition);
            }

        })
    }
}

function scrollTo(target){

    let curScrollPosition = window.pageYOffset;

    if(curScrollPosition > target){
        if(curScrollPosition - target < 80){
            window.scroll(0, target);
            inScrollNow = false;
            return;
        }
        window.scroll(0, window.pageYOffset - 80);
        
    }else if(curScrollPosition < target){
        if(target - curScrollPosition < 80){
            window.scroll(0, target);
            inScrollNow = false;
            return;
        }
        window.scroll(0, window.pageYOffset + 80);
    }

    if(curScrollPosition === window.pageYOffset){
        inScrollNow = false;
        return;  
    }

    setTimeout(function(){
        scrollTo(target);
    }, 15);

}

if(document.querySelector(".js-scroll-button")){

    document.querySelectorAll(".js-scroll-button").forEach(function(item){
        new ScrollButton(item);
    })

    window.inScrollNow = false;

}


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