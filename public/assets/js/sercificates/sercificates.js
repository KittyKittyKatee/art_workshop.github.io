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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZXJjaWZpY2F0ZXMvc2VyY2lmaWNhdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuICAgIHZhciBzbGlkZXIgPSAkKFwiLm93bC1jYXJvdXNlbC5zZXJ0aWZpY2F0ZXMtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuICAgICAgICBtb3VzZURyYWc6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogNTAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgNDIwOiB7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTYwOiB7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBuZXh0QnV0dG9uID0gJCgnLnNlcmNpZmljYXRlc19fc2xpZGVyJykuZmluZCgnLnNsaWRlcl9fYXJyb3ctLW5leHQnKTtcclxuICAgIHZhciBwcmV2QnV0dG9uID0gJCgnLnNlcmNpZmljYXRlc19fc2xpZGVyJykuZmluZCgnLnNsaWRlcl9fYXJyb3ctLXByZXYnKTtcclxuXHJcbiAgICBuZXh0QnV0dG9uLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2xpZGVyLnRyaWdnZXIoXCJuZXh0Lm93bC5jYXJvdXNlbFwiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBwcmV2QnV0dG9uLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2xpZGVyLnRyaWdnZXIoXCJwcmV2Lm93bC5jYXJvdXNlbFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5vd2wtbmF2JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxyXG59KTtcclxuXHJcbiJdLCJmaWxlIjoic2VyY2lmaWNhdGVzL3NlcmNpZmljYXRlcy5qcyJ9
