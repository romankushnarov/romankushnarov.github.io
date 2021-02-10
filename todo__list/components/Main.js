class List {

    render() {

        let content = ``

        let tasks = localStorageUtil.getTasks()
        tasks.forEach(item => {
            let task = `
                <div class="list__item" data-id="${item.number}">
                    <span class="list__item-remove" data-name="remove" onclick="listComponent.removeItem(this)">&times;</span>
                    <input type="checkbox" class="list__item-checkbox" onclick="listComponent.undoItem(this)">
                    <span class="list__item-text">${item.text}</span>
                </div>

            `
            content += task
        })

        const html = `
            <div class="list-wrapper">
                <h1 class="list__title">TO-DO LIST</h1>
                <form action="#" class="list__form">
                    <input type="text" class="list__input" placeholder="NEW TASK">
                    <button class="list__btn">ADD</button>
                </form>
                <div class="list__inner">${content}</div>
                <div class="list__clear" onclick="listComponent.clearList()">CLEAR</div>
            </div>
        `

        ROOT_LIST.innerHTML = html
        
        let items = Array.from(document.querySelectorAll('.list__item-text'))

        items.forEach(item => {
            const tasks = localStorageUtil.undidTasks()
            const task = item.closest('.list__item').getAttribute('data-id')
            const checkbox = item.closest('.list__item').querySelector('.list__item-checkbox')
            if(tasks.includes(task)) {
                item.classList.add('undid')
                checkbox.checked = true
            }
        });
    
        this.input = document.querySelector('.list__input')
        this.btn = document.querySelector('.list__btn')
        this.list = document.querySelector('.list__inner')

        this.btn.addEventListener('click', e => {
            e.preventDefault()
            listComponent.addItem(this.input.value)
        })

        listComponent.checkEmpty()
    }

    addItem(itemText) {
        if(itemText.trim() == '') {
            return
        }
        
        this.input.value = ''

        let item = document.createElement('div')
        item.classList.add('list__item')
        item.innerHTML = `
            <span class="list__item-remove" data-name="remove" onclick="listComponent.removeItem(this)">&times;</span>
            <input type="checkbox" class="list__item-checkbox" onclick="listComponent.undoItem(this)">
            <span class="list__item-text">${itemText}</span>
        `

        this.list.append(item)
        
        let resultLocalStorage = localStorageUtil.editTasks(item, itemText)
        
        item.setAttribute('data-id',resultLocalStorage)

        listComponent.checkEmpty()
    }

    removeItem(el) {
        localStorageUtil.deleteUndoTask(el.closest('.list__item'))
        localStorageUtil.editTasks(el.closest('.list__item'))

        el.closest('.list__item').remove()

        listComponent.checkEmpty()
    }

    undoItem(el) {
        const text = el.closest('.list__item').querySelector('.list__item-text')
        if(el.checked) {
            text.classList.add('undid')
        } else {
            text.classList.remove('undid')
        }
        
        localStorageUtil.undoTasks(el.closest('.list__item'))
    }

    checkEmpty() {
        if(this.list.innerHTML.trim() == '') {
            const html = '<p class="list__notice">ADD YOUR FIRST NOTE</p>'
            this.list.insertAdjacentHTML('afterend', html)
            const notice = document.querySelector('.list__notice')
            notice.ondragstart = noselect;
            notice.onselectstart = noselect;
            notice.oncontextmenu = noselect;
            function noselect() {return false;}
        } else {
            if(this.list.parentNode.querySelectorAll('.list__notice').length !== 0) {
                this.list.parentNode.querySelector('.list__notice').remove()
            }
        }
    }

    clearList() {
        this.list.innerHTML = ''
        localStorageUtil.clearTasks()
        listComponent.checkEmpty()
    }

}

const listComponent = new List()