$(function(){
    var btn = $('.animate-btn');
    var slide = $('.animate-btn').find('span');
    var borderColor = slide.css('border-color');
    btn.mouseenter(throttle(
        function(){
            setTimeout(function(){
                slide.animate({
                    top: '0%'
                }, {
                    duration: 200
                })
                btn.css('color', '#fff')
                btn.css('border-color', '#ffba00')
            }, 0);
        }
    ), 1000)
    btn.mouseleave(throttle(
        function(){
            slide.animate({
                top: '100%'
            }, {
                duration: 200,
                complete: function(){
                    slide.css('top', '-100%')
                }
            })
            btn.css('color', '#ffba00')
        }
    ), 1000)
})