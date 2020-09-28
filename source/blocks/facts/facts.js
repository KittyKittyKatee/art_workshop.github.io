$(function () {
  //анимация элементов
  const tween1 = TweenMax.from(".facts__subtitle", 1, {
    opacity: 0,
    ease: Power3.easeInOut
  })

  const tween2 = TweenMax.staggerFrom(".facts__elem", 1.2, {
    y: 200,
    opacity: 0,
    ease: Power3.easeInOut
  }, 0.2)

  const tween3 = TweenMax.from(".ideas__title", 1.5, {
    x: -400,
    opacity: 0,
    ease: Power3.easeInOut
  })

  makeScene(tween1, '.facts', 0.8);
  makeScene(tween2, '.facts', 0.8);
  makeScene(tween3, '.facts', 0.8);
})