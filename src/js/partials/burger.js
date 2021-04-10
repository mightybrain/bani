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