$(function(){
    const counter = $('.ideas__slider').find('.slider__counter');

    const slider = $(".owl-carousel.ideas-slider").owlCarousel({
        loop: true,
        nav: true,
        margin: 0,
        items: 1,
        mouseDrag: true,
        smartSpeed: 700,
        onInitialized: function(e) {
            counter.find('b').text('1')
            counter.find('span').text(' / '+ this.items().length)
        }
    });

    slider.on('changed.owl.carousel', function(e) {
        counter.find('b').text(++e.page.index);
        counter.find('span').text(' / ' + e.item.count);
    });

    const nextButton = $('.ideas__slider').find('.slider__arrow--next');
    const prevButton = $('.ideas__slider').find('.slider__arrow--prev');

    nextButton.click(function(){
        slider.trigger("next.owl.carousel");
    });
    
    prevButton.click(function(){
        slider.trigger("prev.owl.carousel");
    });

    $('.owl-nav').css('display', 'none')
});