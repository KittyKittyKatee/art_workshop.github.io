$(function () {
  //анимация элементов
  const tl = new TimelineLite();

  const topArr = $(".advantages__elem").slice(0, 4);
  const bottomArr = $(".advantages__elem").slice(4, 8);

  tl.from(".advantages__title", 1.8, {
    x: -400,
    opacity: 0,
    ease: Power3.easeInOut
  })
    .staggerFrom(topArr, 1.2, {
      x: -400,
      opacity: 0,
      ease: Power3.easeInOut
    }, 0.07)
    .staggerFrom(bottomArr, 1.2, {
      x: 400,
      opacity: 0,
      ease: Power3.easeInOut
    }, 0.07);

  makeScene(tl, ".advantages", 0.4);
})