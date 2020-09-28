const controller = new ScrollMagic.Controller();

function makeScene(tween, trigger, hook) {
  const scene = new ScrollMagic.Scene({
    reverse: false,
    triggerElement: trigger,
    triggerHook: hook
  })
    .addIndicators({
      name: "Box Timeline",
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black"
    })
    .setTween(tween)
    .addTo(controller)
}
$(function () {
  const tween1 = TweenMax.from(".about__subtitle", 1, {
    opacity: 0,
    ease: Power3.easeInOut
  })

  const tween2 = TweenMax.from(".about__content .about__title", 1.5, {
    x: -400,
    opacity: 0,
    ease: Power3.easeInOut
  })

  const tween3 = TweenMax.staggerFrom(".about__text p", 1.2, {
    y: 200,
    opacity: 0,
    ease: Power3.easeInOut
  }, 0.2)

  const tween4 = TweenMax.from(".about__right .about__title", 1.5, {
    x: 400,
    opacity: 0,
    ease: Power3.easeInOut
  })

  makeScene(tween1, ".banner__menu", 0.4);
  makeScene(tween2, ".banner__menu", 0.4);
  makeScene(tween3, ".about", 0.4);
  makeScene(tween4, ".about", 0.4);
})