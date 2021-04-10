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
