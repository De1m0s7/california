
const swiper = new Swiper('.slider',{
    loop: true,
    grabCursor: false,
    autoHeight: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

let search = document.querySelector('.action__search-btn');
let searchForm = document.querySelector('.action__search-form');
search.onclick = function() {
    search.classList.toggle('remove');
    searchForm.classList.toggle('active');
}

let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.menu__body');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu__list');
header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header__menu.classList.toggle('active');
    back.classList.toggle('lock');
}
header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}

let subMenu = document.querySelector('.menu__submenu');
let subMenuList = document.querySelector('.menu__submenu-list');
subMenu.onclick = function() {
    subMenuList.classList.toggle('active');
    back.classList.toggle('lock');
}

let basket = document.querySelector('.basket');
let basketButton = document.querySelector('.action__basket-btn');
basketButton.onclick = function() {
    basket.classList.toggle('active');
}