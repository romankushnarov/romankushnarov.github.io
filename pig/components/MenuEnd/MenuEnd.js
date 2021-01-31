class MenuEnd {

    hide() {
        ROOT.innerHTML = ''
    } 

    render(value) {
        const html = `
            <div class="info-end">
            <h1 class="info-end__title">ТЫ НАНЕС ${value} УДАРОВ! ЕЩЕ РАЗОЧЕК?</h1>
            <i class="fas fa-redo info-end__btn-repeat" onclick="gameComponent.start()"></i>
            </div>
        `
        ROOT.innerHTML = html
    }

}

const menuEndComponent = new MenuEnd()