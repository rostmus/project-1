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

