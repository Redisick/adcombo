var isMobileView = false; //global variable

$(document).ready(function(){
    function setScreenWidthFlag() {
        if ( $(window).width() >= 900) {   
            isMobileView = false;
        }
        else {
            isMobileView = true;
        }
    };

    setScreenWidthFlag();

    $(window).on("resize", function (e) {
        setScreenWidthFlag();
    });
    
    if (isMobileView) {
        $('.intro__content').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500
        });
    }   
});