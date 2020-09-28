"use strict";

$(function () {
  //анимация кнопки
  var btn = $('.animate-btn');
  var btnBlack = $('.animate-btn--black');

  function addAnimation(text, mainColor, border, btn) {
    btn.mouseenter(function () {
      var elem = $(this);
      setTimeout(function () {
        elem.find('span').animate({
          top: '0%'
        }, {
          duration: 200
        });
        elem.css('color', text);
        elem.css('border-color', mainColor);
      }, 0);
    });
    btn.mouseleave(function () {
      var elem = $(this);
      elem.find('span').animate({
        top: '100%'
      }, {
        duration: 200,
        complete: function complete() {
          elem.find('span').css('top', '-100%');
        }
      });
      elem.css('color', mainColor);
      elem.css('border-color', border);
    });
  }

  addAnimation('#fff', '#ffba00', '#ffba00', btn);
  addAnimation('#fff', '#000', '#000', btnBlack);
});