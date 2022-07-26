
(function () {
    'use strict'
    function spoilerPlugin(setting) {
        const sliderHeight = setting.sliderHeight
        const sliderElements = setting.elements
        for (let i = 0; i < sliderElements.length; i++) {
            const sliderElement = sliderElements[i]
            const sliderButton = sliderElement.querySelector('.js-slider__button')
            const sliderText = sliderElement.querySelector('.js-slider__text')
            const sliderContent = sliderElement.querySelector('.js-slider__content')
            const sliderSvg = sliderElement.querySelector('.js-slider__svg')
            const MAX_HEIGHT_SLIDER = '100%'
            const MIN_HEIGHT_SLIDER = '300px'
            sliderButton.addEventListener('click', () => {
                if (sliderSvg.classList.contains('spoiler__svg-active')) {
                    sliderSvg.classList.remove('spoiler__svg-active')
                    sliderText.textContent = 'Развернуть'
                    sliderContent.style.maxHeight = MIN_HEIGHT_SLIDER
                    return
                }
                sliderSvg.classList.add('spoiler__svg-active')
                sliderText.textContent = 'Свернуть'
                sliderContent.style.maxHeight = MAX_HEIGHT_SLIDER
            })
        }
    }
    window.spoilerPlugin = spoilerPlugin

})();
(function () {
    'use strict'
    console.log('tabs');
})();

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        console.log('main js');
        const sliderList = document.querySelectorAll('.js-slider')
            spoilerPlugin({elements: sliderList, height: 300})
    })
})();
