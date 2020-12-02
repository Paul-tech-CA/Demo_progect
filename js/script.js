$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToScroll:3,
        speed:1000,
        easing:'ease',
        infinite:false,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:15000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:false,
        swipe:true,
        touchThreshold:10,
        touchMove:true,
        waitForAnimaite:true,
        centerMode:true,
        variableWidth:true,
        // rows:2,
        // slidesPerRow:2,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow:1
                }
            }
        ],
        mobileFirst:true
    });
});