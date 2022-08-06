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
    //табы
    class Tabs {
        constructor(element) {
            this.element = element
            this.contents = this.element.closest('.js-tabs').querySelectorAll('.js-tab')
            this.themes = this.element.closest('.js-tabs').querySelectorAll('.js-tabs__theme')
            this.number
        }
        //переход по заголовкам
        themeWork() {
            this.themes.forEach((el)=> {
                el.classList.remove('tabs__theme--active')
            })
            this.element.classList.add('tabs__theme--active')
        }
        //переход по табам
        contentWork() {
            this.contents.forEach((el)=> {
                el.classList.remove('tabs-list__content--active')
            })
            this.contents[this.number].classList.add('tabs-list__content--active')
        }
        //поиск индекса активного эелемента
        findIndex() {
            this.themes.forEach((el, index)=> {
                if(el.classList.contains('tabs__theme--active')) {
                    this.number = index
                }
            })
        }
        //активация
        tabWork(){
            this.element.addEventListener('click', ()=> {
                this.themeWork()
                this.findIndex()
                this.contentWork()
            })
        }
    }
    window.tabs = Tabs
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


        const tabsThemes = document.querySelectorAll('.js-tabs__theme')
        tabsThemes.forEach((el)=> {
            const tabsPlug = new tabs(el)
            tabsPlug.tabWork()

        })
    })
})();
