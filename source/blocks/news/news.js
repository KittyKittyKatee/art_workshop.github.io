$(function () {
  //анимация элементов
  let arrElems = Array.from($(".news__title")).concat(Array.from($(".news__elem")));
  arrElems = arrElems.concat(Array.from($(".news__more")));
  rightArr = arrElems.filter((item, i) => i % 2 == 0);
  leftArr = arrElems.filter((item, i) => i % 2 !== 0);

  const tween1 = TweenMax.from(".news__subtitle", 0.5, {
    opacity: 0,
    ease: Power3.easeInOut
  })

  const tween2 = TweenMax.staggerFrom(rightArr, 1.2, {
    x: -200,
    opacity: 0,
    ease: Power3.easeInOut
  }, 0.08)

  const tween3 = TweenMax.staggerFrom(leftArr, 1.2, {
    x: 200,
    opacity: 0,
    ease: Power3.easeInOut
  }, 0.08)

  makeScene(tween1, ".news", 0.8);
  makeScene(tween2, ".news", 0.8);
  makeScene(tween3, ".news", 0.8);
  
})