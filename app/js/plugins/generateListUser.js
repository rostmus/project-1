class GenerateUserList {
    constructor(arr, element) {
        this.self = element
        this.data = arr
        this.wrapper = this.self.querySelector('.js-users-wrapper')
        this.name
        this.email
        this.username
        this.element
    }

    greateElemenet() {
        for (let i = 0; i < this.data.length; i++) {
            this.name = this.data[i].name
            this.email = this.data[i].email
            this.username = this.data[i].username
            this.initElement()
            this.wrapper.insertAdjacentHTML('beforeend',this.element)
            console.log(this.name, this.email, this.username)
        }
    }

    initElement() {
        this.element = `<div class="users__item"><div class="users__photo"></div><div class="users__name">Имя: ${this.name}</div><div class="users__username">Логин: ${this.username}</div><div class="users__mail">Почта: ${this.email}</div></div>`
    }
}