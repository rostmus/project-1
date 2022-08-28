export class SpoilerPlugin {
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


export class Tabs {
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
