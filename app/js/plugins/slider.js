
(function () {
    'use strict'
    function activating(setting) {
        let sliderButton = document.querySelector("." + setting.element).closest('.js-slider__beginning').querySelector('.js-slider__button')
        function sliderStart() {
            const sliderText = sliderButton.closest('.js-slider__beginning').querySelector('.js-slider__text')
            const sliderContent = sliderButton.closest('.js-slider__beginning').querySelector('.js-slider__content')
            if (sliderButton.classList.contains('active')) {
                sliderButton.classList.remove('active')
                sliderText.textContent = 'Развернуть'
                sliderContent.style.maxHeight = 300 + 'px'
                // sliderContent.style.height = 300 + 'px'
                sliderButton.style.transform = 'rotate(0deg)'
                return
            }
            sliderButton.classList.add('active')
            sliderText.textContent = 'Свернуть'
            // sliderContent.style.height = 'auto'
            sliderContent.style.maxHeight = 10000 + 'px'
            sliderButton.style.transform = 'rotate(180deg)'
        }
        sliderStart()
        // sliderButton.addEventListener('click', sliderStart)
    }
    window.activate = activating

})();
