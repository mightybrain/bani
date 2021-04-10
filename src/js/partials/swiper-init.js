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