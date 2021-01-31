class MenuStart {

    hide() {
        ROOT.innerHTML.innerHTML = ''
    }

    render() {
        const html = `
            <div class="info-start">
                <h1 class="info-start__title">НАЖМИ НА КНОПКУ ЧТОБЫ НАЧАТЬ ИГРУ</h1>
                <i class="info-start__arrow fas fa-arrow-down animate__animated animate__bounce animate__infinite"></i>
                <button class="info-start__btn" onclick="gameComponent.start()">СТАРТ</button>
            </div>
        `
        ROOT.innerHTML = html
    }

}

const menuStartComponent = new MenuStart()