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
