class Game {

    constructor() {
        this.counter = 0
    }

    stop() {
        ROOT.innerHTML = ``
        // console.log(this.counter);
        menuEndComponent.render(this.counter)
        this.counter = 0
    }

    counterIncrease() {
        this.counter++
        document.querySelector('.game__counter').innerHTML = `УДАРОВ ПО СВИНЬЕ: ${this.counter}`
    }

    start() {

        let interval = 600
        let gameTime = 10

        const html = `
            <p class="game__text">КЛИКНИ НА СВИНЬЮ, ЧТОБЫ УДАРИТЬ ЕЕ</p>
            <img class="point" src="img/point.png" onpointerdown="gameComponent.counterIncrease()"/>
            <p class="game__counter">УДАРОВ ПО СВИНЬЕ: 0</p>
            <p class="game__time">ВРЕМЕНИ ОСТАЛОСЬ: ${gameTime} СЕК.</p>
        `
        ROOT.innerHTML = html

        const point = document.querySelector('.point')

        function movePig() {
            let randomLeft = Math.random() * ((width - point.offsetWidth) - point.offsetWidth)
            let randomTop = Math.random() * ((height- point.offsetHeight)- point.offsetHeight)
            point.style.left = randomLeft + 'px'
            point.style.top = randomTop + 'px'
            // console.log(interval);
            setTimeout(() => {
                return typeof movePig == 'function' ? movePig() : false
            }, interval -= interval * 0.01);
        }

        movePig()

        const timeShowInterval = setInterval(() => {
            document.querySelector('.game__time').innerHTML = `ВРЕМЕНИ ОСТАЛОСЬ: ${gameTime = gameTime - 1} СЕК.`
        }, 1000);

        setTimeout(() => {
            movePig = null
            this.stop()
            gameTime = 10
            window.clearInterval(timeShowInterval)
        }, gameTime * 1000);

    }

}

const gameComponent = new Game()