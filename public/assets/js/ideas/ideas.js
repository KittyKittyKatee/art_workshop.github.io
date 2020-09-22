$(function(){
    var counter = $('.ideas__slider').find('.slider__counter');

    var slider = $(".owl-carousel.ideas-slider").owlCarousel({
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

    var nextButton = $('.ideas__slider').find('.slider__arrow--next');
    var prevButton = $('.ideas__slider').find('.slider__arrow--prev');

    nextButton.click(function(){
        slider.trigger("next.owl.carousel");
    });
    
    prevButton.click(function(){
        slider.trigger("prev.owl.carousel");
    });

    $('.owl-nav').css('display', 'none')
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpZGVhcy9pZGVhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgY291bnRlciA9ICQoJy5pZGVhc19fc2xpZGVyJykuZmluZCgnLnNsaWRlcl9fY291bnRlcicpO1xyXG5cclxuICAgIHZhciBzbGlkZXIgPSAkKFwiLm93bC1jYXJvdXNlbC5pZGVhcy1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBtb3VzZURyYWc6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogNzAwLFxyXG4gICAgICAgIG9uSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgY291bnRlci5maW5kKCdiJykudGV4dCgnMScpXHJcbiAgICAgICAgICAgIGNvdW50ZXIuZmluZCgnc3BhbicpLnRleHQoJyAvICcrIHRoaXMuaXRlbXMoKS5sZW5ndGgpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpZGVyLm9uKCdjaGFuZ2VkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb3VudGVyLmZpbmQoJ2InKS50ZXh0KCsrZS5wYWdlLmluZGV4KTtcclxuICAgICAgICBjb3VudGVyLmZpbmQoJ3NwYW4nKS50ZXh0KCcgLyAnICsgZS5pdGVtLmNvdW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBuZXh0QnV0dG9uID0gJCgnLmlkZWFzX19zbGlkZXInKS5maW5kKCcuc2xpZGVyX19hcnJvdy0tbmV4dCcpO1xyXG4gICAgdmFyIHByZXZCdXR0b24gPSAkKCcuaWRlYXNfX3NsaWRlcicpLmZpbmQoJy5zbGlkZXJfX2Fycm93LS1wcmV2Jyk7XHJcblxyXG4gICAgbmV4dEJ1dHRvbi5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHNsaWRlci50cmlnZ2VyKFwibmV4dC5vd2wuY2Fyb3VzZWxcIik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgcHJldkJ1dHRvbi5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHNsaWRlci50cmlnZ2VyKFwicHJldi5vd2wuY2Fyb3VzZWxcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcub3dsLW5hdicpLmNzcygnZGlzcGxheScsICdub25lJylcclxufSk7Il0sImZpbGUiOiJpZGVhcy9pZGVhcy5qcyJ9
