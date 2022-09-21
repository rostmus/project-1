
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
