$(function () {
  //анимация элементов

  const tween1 = TweenMax.from(".form-2__subtitle", 1, {
    opacity: 0,
    ease: Power3.easeInOut
  })

  const tween2 = TweenMax.from(".form-2__title", 1, {
    opacity: 0,
    ease: Power3.easeInOut
  })

  const tween3 = TweenMax.from(".form-2__form", 1.2, {
    y: 200,
    opacity: 0,
    ease: Power3.easeInOut
  })

  const tween4 = TweenMax.from(".form-2__agree", 1.2, {
    y: 200,
    opacity: 0,
    ease: Power3.easeInOut
  })

  const tween5 = TweenMax.from(".form-2__text", 1, {
    delay: 0.3,
    opacity: 0,
    ease: Power3.easeInOut
  })

  makeScene(tween1, '.form-2', 0.4)
  makeScene(tween2, '.form-2', 0.4)
  makeScene(tween3, '.form-2', 0.4)
  makeScene(tween4, '.form-2', 0.4)
  makeScene(tween5, '.form-2', 0.4)

  //валидация и отправка формы

  $("#form-2-tel").mask("+7(999) 999-9999");

  $('.form-2__form').submit(function (e) {

    e.preventDefault();

    let tel = $('[name="form-2-tel"]')

    if (tel.val().length < 12) {
      tel.addClass('error')
      tel.one('focus', function () {
        tel.removeClass('error')
      })
      return false
    }

    let form = $('.form-2__form')[0];
    let formData = new FormData(form);
    formData = Object.fromEntries(formData);
    console.log(JSON.stringify(formData))

    let url = 'http://localhost:3000/request';
    ajaxSend(url, formData, function () {
      $('input').val('');
    });
    form.reset();
  })
})