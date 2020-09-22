import * as _ from 'lodash'

$(function(){
    var btn = $('.animate-btn');
    var slide = $('.animate-btn').find('span');
    var borderColor = slide.css('border-color');
    btn.mouseenter(_.throttle(
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
    btn.mouseleave(_.throttle(
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiYW5uZXIvYmFubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIGJ0biA9ICQoJy5hbmltYXRlLWJ0bicpO1xyXG4gICAgdmFyIHNsaWRlID0gJCgnLmFuaW1hdGUtYnRuJykuZmluZCgnc3BhbicpO1xyXG4gICAgdmFyIGJvcmRlckNvbG9yID0gc2xpZGUuY3NzKCdib3JkZXItY29sb3InKTtcclxuICAgIGJ0bi5tb3VzZWVudGVyKF8udGhyb3R0bGUoXHJcbiAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc2xpZGUuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnMCUnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJ0bi5jc3MoJ2NvbG9yJywgJyNmZmYnKVxyXG4gICAgICAgICAgICAgICAgYnRuLmNzcygnYm9yZGVyLWNvbG9yJywgJyNmZmJhMDAnKVxyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICApLCAxMDAwKVxyXG4gICAgYnRuLm1vdXNlbGVhdmUoXy50aHJvdHRsZShcclxuICAgICAgICBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzbGlkZS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHRvcDogJzEwMCUnXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jc3MoJ3RvcCcsICctMTAwJScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJ0bi5jc3MoJ2NvbG9yJywgJyNmZmJhMDAnKVxyXG4gICAgICAgIH1cclxuICAgICksIDEwMDApXHJcbn0pXHJcbiJdLCJmaWxlIjoiYmFubmVyL2Jhbm5lci5qcyJ9
