(function () {
    'use strict'
    //плагин спойлера
    class SpoilerPlugin {
        constructor(setting) {
            this.height = setting.height;
            this.element = setting.element;
            this.button = this.element.querySelector('.js-spoiler__button');
            this.text = this.element.querySelector('.js-spoiler__text');
            this.content = this.element.querySelector('.js-spoiler__content');
            this.svg = this.element.querySelector('.js-spoiler__svg');
            this.MAX_HEIGHT_SLIDER = '100%';
            this.MIN_HEIGHT_SLIDER = '300px';
            this.holder = this.element.querySelector('.js-spoiler__holder');
            this.contentHeight;
            this.isActive = false;
        }
//открытие спойлера
        open() {
            this.element.classList.add('spoiler__active');
            this.text.textContent = 'Свернуть';
            this.isActive = true;
            this.contentHeight = `${this.content.offsetHeight}px`;
            this.holder.style.maxHeight = this.contentHeight;
        }
//закрытие спойлера
        close() {
            this.element.classList.remove('spoiler__active');
            this.text.textContent = 'Развернуть';
            this.holder.style.maxHeight = this.MIN_HEIGHT_SLIDER;
            this.isActive = false;
        }
//инициализация работы спойлера
        initSpoiler() {
            this.button.addEventListener('click', ()=> {
                if (this.isActive) {
                    this.close();
                } else {
                    this.open();
                }
            })
        }
    }
    window.SpoilerPlugin = SpoilerPlugin;
})();

(function () {
    'use strict'
    console.log('tabs');
})();

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        console.log('main js');
        const sliderList = document.querySelectorAll('.js-spoiler');
        sliderList.forEach((el)=> {
            const spoilerPlug = new SpoilerPlugin({ element: el, height: 300 });
            spoilerPlug.initSpoiler();
        })
    })
})();
