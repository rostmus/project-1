(function () {
    'use strict'
    class SpoilerPlugin {
        constructor(setting) {
            this.height = setting.height
            this.element = setting.element
            this.button = this.element.querySelector('.js-spoiler__button')
            this.text = this.element.querySelector('.js-spoiler__text')
            this.content = this.element.querySelector('.js-spoiler__content')
            this.svg = this.element.querySelector('.js-spoiler__svg')
            this.MAX_HEIGHT_SLIDER = '100%'
            this.MIN_HEIGHT_SLIDER = '300px'
            this.contentDiv = this.content.querySelector('div')
            this.contentDivHeight = this.contentDiv.offsetHeight
        }

        open() {
            this.svg.classList.add('spoiler__svg-active')
            this.element.classList.add('active')
            this.text.textContent = 'Свернуть'
            this.content.style.maxHeight = this.MAX_HEIGHT_SLIDER
        }

        close() {
            this.element.classList.remove('active')
            this.svg.classList.remove('spoiler__svg-active')
            this.text.textContent = 'Развернуть'
            this.content.style.maxHeight = this.MIN_HEIGHT_SLIDER
        }

        spoilerWork() {
            this.button.addEventListener('click', ()=> {
                if (this.svg.classList.contains('spoiler__svg-active')) {
                    this.close()
                } else {
                    this.open()
                }
                console.log(this.contentDiv, this.contentDivHeight)
            })
        }
    }
    window.SpoilerPlugin = SpoilerPlugin
})();

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
