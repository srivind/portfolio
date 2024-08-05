
function appLoaded() {
    AOS.init();

    const typed= document.getElementById('typer'); 
    new Typewriter(typed, {
        loop: true,
        strings: ['Software Engineer', 'Full-Stack Developer','UI Designer'],
        autoStart: true,
    });  

    $(document).ready(function(){
        setTimeout(() => {   
            $('.slick-slider').slick({
                slidesToShow: 3,
                infinite:true,
                autoplay: true,
                dots: true,
                arrows: false,
                responsive: [
                    {
                    breakpoint: 906, 
                    settings: {
                        slidesToShow: 2 
                    }
                    },
                    {
                        breakpoint: 550, 
                        settings: {
                        slidesToShow: 1 
                        }
                    }
                ]
            });
        }, 2000);
    });
}
