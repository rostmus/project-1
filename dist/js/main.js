
(function () {
    'use strict'
    class SpoilerPlugin {
        constructor(setting) {
            this.spoilerHeight = setting.height
            this.spoilerElement = setting.element
            this.spoilerButton = this.spoilerElement.querySelector('.js-spoiler__button')
            this.spoilerText = this.spoilerElement.querySelector('.js-spoiler__text')
            this.spoilerContent = this.spoilerElement.querySelector('.js-spoiler__content')
            this.spoilerSvg = this.spoilerElement.querySelector('.js-spoiler__svg')
            this.MAX_HEIGHT_SLIDER = '100%'
            this.MIN_HEIGHT_SLIDER = '300px'
        }

        spoilerActive() {
            this.spoilerSvg.classList.add('spoiler__svg-active')
            this.spoilerElement.classList.add('active')
            this.spoilerText.textContent = 'Свернуть'
            this.spoilerContent.style.maxHeight = this.MAX_HEIGHT_SLIDER
        }

        spoilerDeactive() {
            this.spoilerElement.classList.remove('active')
            this.spoilerSvg.classList.remove('spoiler__svg-active')
            this.spoilerText.textContent = 'Развернуть'
            this.spoilerContent.style.maxHeight = this.MIN_HEIGHT_SLIDER
        }

        spoilerWork() {
            this.spoilerButton.addEventListener('click', ()=> {
                if (this.spoilerSvg.classList.contains('spoiler__svg-active')) {
                    this.spoilerDeactive()
                } else {
                    this.spoilerActive()
                }
            })
        }
    }
    window.SpoilerPlugin = SpoilerPlugin
})();




// (function () {
//     'use strict'
//     function spoilerPlugin(setting) {
//         const sliderHeight = setting.sliderHeight
//         const sliderElements = setting.elements
//         for (let i = 0; i < sliderElements.length; i++) {
//             const sliderElement = sliderElements[i]
//             const sliderButton = sliderElement.querySelector('.js-spoiler__button')
//             const sliderText = sliderElement.querySelector('.js-spoiler__text')
//             const sliderContent = sliderElement.querySelector('.js-spoiler__content')
//             const sliderSvg = sliderElement.querySelector('.js-spoiler__svg')
//             const MAX_HEIGHT_SLIDER = '100%'
//             const MIN_HEIGHT_SLIDER = '300px'
//             sliderButton.addEventListener('click', () => {
//                 if (sliderSvg.classList.contains('spoiler__svg-active')) {
                    //    sliderElement.classList.remove('active')
//                     sliderSvg.classList.remove('spoiler__svg-active')
//                     sliderText.textContent = 'Развернуть'
//                     sliderContent.style.maxHeight = MIN_HEIGHT_SLIDER
//                     return
//                 }
//                 sliderSvg.classList.add('spoiler__svg-active')
            //    sliderElement.classList.add('active')

//                 sliderText.textContent = 'Свернуть'
//                 sliderContent.style.maxHeight = MAX_HEIGHT_SLIDER
//             })
//         }
//     }
//     window.spoilerPlugin = spoilerPlugin
// })();
(function () {
    'use strict'
    console.log('tabs');
})();

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        console.log('main js');
        const sliderList = document.querySelectorAll('.js-spoiler')
        sliderList.forEach((el)=> {
            const spoilerPlug = new SpoilerPlugin({ element: el, height: 300 })
            spoilerPlug.spoilerWork()
        })
    })
})();
