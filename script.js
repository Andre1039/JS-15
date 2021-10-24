class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.element);
        this.top = obj.top;
        this.element.style.position = 'fixed';
        this.init = obj.init;
        this.element.style.top = this.scroll();


        window.addEventListener('scroll', () => this.scroll());
        window.addEventListener('resize', () => this.scroll());
    }

    scroll() {

        this.window = this.scrollNumber();

        if (this.window - pageYOffset > 0) {
            this.element.style.top = this.window - pageYOffset + 'px';
        } else {
            this.element.style.top = 0;
        }
    }

    scrollNumber() {
        if (this.init == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.init == '%' || this.init == undefined) {
            return this.calc(window.innerHeight, this.top) - this.element.clientHeight;
        }
    }


    calc(height, top) {
        return height / 100 * top;
    }
}

const scroll = new Scroll({
    element: '.header__nav',
    top: 100,
    init: '%'
})

class Remove {
    constructor(e){
        this.element = document.querySelector(e.name);
        this.parent = document.querySelector(e.parent);
        this.parent.style.position = 'relative';
        // console.log(this.element);
        
        this.element.addEventListener('mouseover', () => this.mouseover())
    }

    randomTop(max, min) {
        return this.randomNum = Math.floor(Math.random() * (max + 1 - min) + min) + '%';
        // console.log(this.randomNum);
    }

    randomLeft(max, min) {
        return this.randomNum1 = Math.floor(Math.random() * (max + 1 - min) + min) + '%';
    }

    mouseover(){
            this.element.style.top = this.randomTop(80, 20);
            this.element.style.left = this.randomLeft(80, 20);
            // console.log(this.randomTop());
            this.element.style.margin = 0; 
            this.element.style.position = 'absolute';
    }
}

const remove = new Remove({
    name: '.header__content',
    parent:'.header'
})









