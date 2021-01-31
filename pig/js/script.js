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