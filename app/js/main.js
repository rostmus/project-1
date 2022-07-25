(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        console.log('main js');
        let settingArr = {}

        document.addEventListener('click', (e) => {
            e.preventDefault()
            settingArr.element = e.target.className.baseVal
            activate(settingArr)
        });
    })
})();
