$(function () {
  //мобильное меню
  const burger = $('.header__burger');
  const menuItems = $('.menu__elems');
  const menuItem = $('.menu__link');
  const menu = $('.menu').find('nav');

  function openMenu() {
    if (burger.css('display') != 'none') {
      burger.toggleClass('close');
      if (menu.css('display') == 'none') {
        menu.fadeIn();
      } else {
        menu.fadeOut();
      }
    }
  }

  burger.click(openMenu);
  menuItems.click(menuItem, openMenu);

  //плавная прокрутка
  const link = $(".menu__link");
  link.click(scrollToBlock);

  function scrollToBlock() {
    const id = $(this).attr("data-link");
    const target = $("#" + id).offset().top;

    $("html, body").animate({ scrollTop: target }, 1300);
  }
})