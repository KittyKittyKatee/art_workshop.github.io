"use strict";

$(function () {
  //мобильное меню
  var burger = $('.header__burger');
  var menuItems = $('.menu__elems');
  var menuItem = $('.menu__link');
  var menu = $('.menu').find('nav');

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
  menuItems.click(menuItem, openMenu); //плавная прокрутка

  var link = $(".menu__link");
  link.click(scrollToBlock);

  function scrollToBlock() {
    var id = $(this).attr("data-link");
    var target = $("#" + id).offset().top;
    $("html, body").animate({
      scrollTop: target
    }, 1300);
  }
});