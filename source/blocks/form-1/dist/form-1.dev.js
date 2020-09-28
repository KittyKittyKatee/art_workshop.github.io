"use strict";

$(function () {
  var tween1 = TweenMax.from(".form-1__subtitle", 1, {
    opacity: 0,
    ease: Power3.easeInOut
  });
  var tween2 = TweenMax.from(".form-1__title", 1, {
    opacity: 0,
    ease: Power3.easeInOut
  });
  var rightArr = $(".form-1__elem:odd");
  var leftArr = $(".form-1__elem:even");
  var tween3 = TweenMax.staggerFrom(rightArr, 1.2, {
    x: 400,
    opacity: 0,
    ease: Power3.easeInOut
  }, '-=0.2');
  var tween4 = TweenMax.staggerFrom(leftArr, 1.2, {
    x: -400,
    opacity: 0,
    ease: Power3.easeInOut
  }, '-=0.2');
  var tween5 = TweenMax.from(".form-1__form", 1.2, {
    y: 200,
    opacity: 0,
    ease: Power3.easeInOut
  });
  var tween6 = TweenMax.from(".form-1__agree", 1.2, {
    y: 200,
    opacity: 0,
    ease: Power3.easeInOut
  });
  makeScene(tween1, ".form-1", 0.8);
  makeScene(tween2, ".form-1", 0.8);
  makeScene(tween3, ".form-1", 0.8);
  makeScene(tween4, ".form-1", 0.8);
  makeScene(tween5, ".form-1", 0.8);
  makeScene(tween6, ".form-1", 0.8); //валидация и отправка формы

  $("#form-1-tel").mask("+7(999) 999-9999");
  $('.form-1__form').submit(function (e) {
    e.preventDefault();
    var name = $('[name="form-1-name"]');
    name.val(name.val().trim());
    var tel = $('[name="form-1-tel"]');

    if (name.val().length < 3) {
      name.addClass('error');
      name.one('focus', function (e) {
        name.removeClass('error');
      });
      return false;
    } else if (tel.val().length < 12) {
      tel.addClass('error');
      tel.one('focus', function () {
        tel.removeClass('error');
      });
      return false;
    }

    var form = $('.form-1__form')[0];
    var formData = new FormData(form);
    formData = Object.fromEntries(formData);
    console.log(JSON.stringify(formData));
    var url = 'http://localhost:3000/request';
    ajaxSend(url, formData, function () {
      $('input').val('');
    });
    form.reset();
  });
});