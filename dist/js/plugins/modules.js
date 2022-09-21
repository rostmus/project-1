(function ($) {
    $.fn.burgerWork = function () {
        const $self = $(this);
        const $wrapper = $self.find(".js-navigation-wrapper");
        const $content = $self.find(".js-navigation-content");
        const $button = $self.find(".js-navigation-buttons");
        const init = function () {
            $button.click(function () {
                $button.addClass('navigation-buttons--active')
                $wrapper.slideToggle()
            })
        }
        init()
    }

    $('.js-navigator-wrapper').each(function () {
        $(this).data('burgerWork', $(this).burgerWork());
    });
})(jQuery);

class Calculate {
    //плагин спойлера
    constructor(element) {
        this.displayRight = element.querySelector('.js-calculate-display-right');
        this.displayLeft = element.querySelector('.js-calculate-display-left');
        this.buttonNumber = element.querySelectorAll('.js-button-number');
        this.buttonApperand = element.querySelectorAll('.js-button-apperand');
        this.buttonResult = element.querySelector('.js-button');
        this.buttonClear = element.querySelector('.js-button-clear')
        this.result = 0
        this.primer
        this.number = 0
        this.number2 = 0
        this.apperand = null

    }
    calculation() {

    }

    //инициализация работы спойлера
    init() {
        this.buttonNumber.forEach((el)=> {
            el.addEventListener('click', ()=> {
                this.displayRight.innerHTML = ''
                console.log(this.number, this.number2)
                if(this.apperand != null) {
                    if(this.number2 === 0) {
                        this.number2 = el.textContent
                        this.displayRight.innerHTML = this.number2
                    } else {
                        this.number2 += el.textContent
                        this.displayRight.innerHTML = this.number2
                    }
                    return
                }
                if(this.number === 0) {
                    this.number = el.textContent
                    this.displayRight.innerHTML = this.number
                } else {
                    this.number += el.textContent
                    this.displayRight.innerHTML = this.number
                }
            })
        })
        this.buttonApperand.forEach((el)=> {
            el.addEventListener('click', ()=> {
                this.displayLeft.innerHTML = el.textContent
                this.apperand = el.textContent
            })
        })

        this.buttonResult.addEventListener('click', ()=> {
            if(this.number > 0 && this.number2 > 0) {
                console.log(this.number, this.number2, this.apperand)
                switch(this.apperand) {
                    case('+'): this.primer = Number(this.number) + Number(this.number2);
                    break;
                    case('-'): this.primer = Number(this.number) - Number(this.number2);
                    break;
                    case('*'): this.primer = Number(this.number) * Number(this.number2);
                    break;
                    case('/'): this.primer = Number(this.number) / Number(this.number2);
                    break;
                    default: this.primer = 'error';
                }
                this.result = this.primer
                this.displayLeft.innerHTML = ''
                this.displayRight.innerHTML = 
                this.number = this.result
                this.number2 = 0
                this.apperand = null
            }
        })

        this.buttonClear.addEventListener('click', ()=> {
            this.number = 0
            this.number2 = 0
            this.apperand = null
            this.displayRight.innerHTML = 0
        })
    }
}

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

class SpoilerPlugin {
    //плагин спойлера
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
        this.button.addEventListener('click', () => {
            if (this.isActive) {
                this.close();
            } else {
                this.open();
            }
        })
    }
}


(function ($) {
    $.fn.sliderj = function () {
        const $self = $(this)
        const $button = $self.find('.js-text-button')
        const $content = $self.find('.js-text-answer')

        const init = function () {
            $button.click(function () {
                if ($button.hasClass('active')) {
                    $button.css({ transform: 'rotate(' + 0 + 'deg)' })
                    $button.removeClass('active')
                } else {
                    $button.addClass('active')
                    $button.css({ transform: 'rotate(' + 180 + 'deg)' })
                }
                $content.slideToggle()
            })
        }
        init()
    }

    $('.js-text-slider').each(function () {
        $(this).data('sliderj', $(this).sliderj());
    });
})(jQuery);
class Tabs {
    //табы
    constructor(element) {
        this.element = element
        this.content = this.element.querySelectorAll('.js-tab')
        this.theme = this.element.querySelectorAll('.js-tabs__theme')
        this.activeClassTheme = 'tabs__theme--active'
        this.activeClassTab = 'tabs-list__content--active'
        this.indexActiveTab

    }
    //удаление активного класса у заголовков
    erasingClass() {
        this.theme.forEach((el) => {
            el.classList.remove(this.activeClassTheme)
        })
    }
    //переход по табам
    switchingTab() {
        this.content.forEach((el) => {
            el.classList.remove(this.activeClassTab)
        })
        if (this.content[this.indexActiveTab]) {
            this.content[this.indexActiveTab].classList.add(this.activeClassTab)
        }
    }
    //инициализация активного элемента
    initIndex() {
        this.theme.forEach((el, index) => {
            if (el.classList.contains(this.activeClassTheme)) {
                this.indexActiveTab = index
            }
        })
    }
    //инициализация табов
    initTab() {
        this.theme.forEach((el) => {
            el.addEventListener('click', () => {
                this.erasingClass()
                el.classList.add(this.activeClassTheme)
                this.initIndex()
                this.switchingTab()
            })
        })
    }
}

