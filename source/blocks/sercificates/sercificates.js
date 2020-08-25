$(function(){
    var slider = $(".owl-carousel.sertificates-slider").owlCarousel({
        loop: true,
        nav: true,
        responsiveClass:true,
        mouseDrag: true,
        smartSpeed: 500,
        responsive: {
            420: {
              items: 1
            },
            560: {
              items: 2
            },
            992: {
              items: 4
            }
        }
    });

    var nextButton = $('.sercificates__slider').find('.slider__arrow--next');
    var prevButton = $('.sercificates__slider').find('.slider__arrow--prev');

    nextButton.click(function(){
        slider.trigger("next.owl.carousel");
    });
    
    prevButton.click(function(){
        slider.trigger("prev.owl.carousel");
    });

    $('.owl-nav').css('display', 'none')
});

