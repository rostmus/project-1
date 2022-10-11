class Tabs {
    //табы
    constructor(element) {
        this.element = element
        this.content = this.element.querySelectorAll('.js-tab')
        this.theme = this.element.querySelectorAll('.js-tabs__theme')
        this.themes = this.element.querySelector('.js-tabs__themes')
        this.activeClassTheme = 'tabs__theme--active'
        this.activeClassTab = 'tabs-list__content--active'
        this.button = this.element.querySelector('.js-button')
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
    workTab() {
        this.theme.forEach((el) => {
            el.addEventListener('click', () => {
                this.erasingClass()
                el.classList.add(this.activeClassTheme)
                this.initIndex()
                this.switchingTab()
                this.themes.style.display = 'none'
            })
        })
    }
    workTab2() {
        this.button.addEventListener('click', () => {
            this.themes.style.display = 'block'
        })
    }
    //инициализация табов
    initTab() {
        this.workTab()
        this.workTab2()
    }
}

