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
