// const info = document.querySelector('.info')
// const infoWrapper = document.querySelector('.info-wrapper')
// const infoEnd = document.querySelector('.info-end')
// const infoBtnRepeat = document.querySelector('.info__btn-repeat')
// const infoText = document.querySelector('.info__text')
// const startBtn = document.querySelector('.info__btn-start')
// const width = info.clientWidth
// const height = info.clientHeight

// document.ondragstart = noselect;
// document.onselectstart = noselect;
// document.oncontextmenu = noselect;

// function noselect() {
//     return false
// }

// startBtn.addEventListener('click', startGame)
// infoBtnRepeat.addEventListener('click', startGame)

// function startGame() {
//     infoWrapper.style.display = 'none'
//     infoEnd.style.display = 'none'
//     infoText.style.display = 'block'
//     const point = document.createElement('img')
//     point.src = 'img/point.png'
//     point.classList.add('point')
//     document.body.append(point)
//     point.addEventListener('mousedown', stopGame)
//     setInterval(() => {
//         let randomLeft = Math.random() * ((width - point.offsetWidth) - point.offsetWidth)
//         let randomTop = Math.random() * ((height- point.offsetHeight)- point.offsetHeight)
//         point.style.left = randomLeft + 'px'
//         point.style.top = randomTop + 'px'
//     }, 350);
// }

// function stopGame(e) {
//     if(e.target.classList.contains('point')) {
//         e.target.remove()
//     }
//     infoText.style.display = 'none'
//     infoEnd.style.display = 'flex'
// }


document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;

function noselect() {
    return false
}

function render() {
    menuStartComponent.render()

}

render()