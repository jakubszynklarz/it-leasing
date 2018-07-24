$(document).ready(function(){

    
    var counter = 0;
    var c = 0;
    var i = setInterval(function(){

            $(".loading-page .counter h1").html(c);
            $(".loading-page").css("width", c + "%");

            counter++;
            c++;
            if(counter === 101){
                clearInterval(i);
                var loading = document.querySelector(".loading");
                loading.remove();
                                
            }
            
        }, 30);

        

});

(function() {

    button = document.querySelector(".backToTop");

    function animateScroll(){
        if(document.documentElement.scrollTop > 0){
            window.scrollBy(0, -50);
            setTimeout(animateScroll, 5);
        }
    }


    button.addEventListener("click", function(e){

        e.stopPropagation();

        animateScroll();

    }, false);
    

    window.addEventListener("scroll", function() {
        
        if(document.documentElement.scrollTop >= 50) {
            button.classList.remove("hidden");
           
        } else {
            button.classList.add("hidden");
            
        }

    }, false);



})();

(function() {

    social = document.querySelector(".socialMedia");
    nav = document.querySelector(".sidebar");
    menu = document.querySelector(".navContainer");
    menuOpen = document.querySelector(".navContainerOpen");
    nav.addEventListener("mouseover", function(){
            nav.className = "sidebarOpen";
            social.classList.remove("hidden");
            menu.classList.add("hidden");
            menuOpen.classList.remove("hidden");
    }, false);

    
    nav.addEventListener("mouseout", function (){
        nav.className = "sidebar";
        social.classList.add("hidden");
        menuOpen.classList.add("hidden");
        menu.classList.remove("hidden");
        
    }, false);


})();