import Swiper, { Navigation, Pagination } from 'swiper-bundle.esm.browser.min.js';
    const swiper = new Swiper('.js-swiper-container', {
        modules: [Navigation, Pagination],
    pagination: {
        el: '.js-swiper-pagination',
    },
    navigation: {
        nextEl: '.js-swiper-button-next',
        prevEl: '.js-swiper-button-prev',
    },
    speed: 400,
})

