$(function () {
  const nextButton = $(".sercificates__slider").find(".slider__arrow--next");
  const prevButton = $(".sercificates__slider").find(".slider__arrow--prev");
  function createSlick() {
    $(".sertificates-slider")
      .not(".slick-initialized")
      .slick({
        infinite: false,
        speed: 400,
        prevArrow: prevButton,
        nextArrow: nextButton,
        responsive: [
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }

  createSlick();

  $(window).on("resize", createSlick);

  //анимация элементов

  const tween1 = TweenMax.from(".sercificates__subtitle", 1, {
    opacity: 0,
    ease: Power3.easeInOut,
  });

  const tween2 = TweenMax.from(".sercificates__title", 1.5, {
    x: -400,
    opacity: 0,
    ease: Power3.easeInOut,
  });

});

makeScene(tween1, ".sercificates", 0.8);
makeScene(tween2, ".sercificates", 0.8);