// import {Tabs, SpoilerPlugin} from './modules.js'
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('main js');
        const sliderList = document.querySelectorAll('.js-spoiler');
        sliderList.forEach((el)=> {
            const spoilerPlug = new SpoilerPlugin({ element: el, height: 300 });
            spoilerPlug.initSpoiler();
        })


        const tabsThemes = document.querySelectorAll('.js-tabs');
        tabsThemes.forEach((el)=> {
            const tabsPlug = new Tabs(el);
            tabsPlug.initTab();
        })

        const calculatePlagin = document.querySelectorAll('.js-calculate');
        calculatePlagin.forEach((el)=> {
            const calculate = new Calculate(el)
            calculate.init()
        })
    })
})();
