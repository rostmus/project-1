(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        console.log('main js');
        const sliderList = document.querySelectorAll('.js-slider')
            spoilerPlugin({elements: sliderList, height: 300})
    })
})();
