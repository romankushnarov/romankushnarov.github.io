class LocalStorageUtil {

    constructor() {
        this.keyName = 'tasks'
        this.itemName = 'undid'
    }

    getTasks() {
        const tasksLocalStorage = localStorage.getItem(this.keyName)
        if(tasksLocalStorage !== null) {
            return JSON.parse(tasksLocalStorage)
        }
        return []
    }

    editTasks(item, taskText = '') {
        let tasks = this.getTasks()
        let id
        if(tasks.length == 0) {
            id = 0
            const task = {text: taskText, number: id}
            tasks.push(task)
        } else if(item.hasAttribute('data-id')) {
            id = item.getAttribute('data-id')
            let index = tasks.findIndex(item => item.number == +id)
            tasks.splice(index, 1)
        } else {
            id = tasks[tasks.length - 1].number + 1
            const task = {text: taskText, number: id}
            tasks.push(task)
        }

        localStorage.setItem(this.keyName, JSON.stringify(tasks))
        return id
    }

    undidTasks() {
        const undidLocalStorage = localStorage.getItem(this.itemName)
        if(undidLocalStorage !== null) {
            return JSON.parse(undidLocalStorage)
        }
        return []
    }

    undoTasks(item) {
        const undid = this.undidTasks()
        const id = item.getAttribute('data-id')
        const index = undid.findIndex(item => item == id)
        if(index !== -1) {
            undid.splice(index, 1)
        } else {
            undid.push(id)
        }
        localStorage.setItem(this.itemName, JSON.stringify(undid))
    }

    deleteUndoTask(item) {
        let undid = this.undidTasks()
        const id = item.getAttribute('data-id')
        const index = undid.indexOf(id)
        if(index !== -1) {
            undid.splice(index, 1)
        }
        localStorage.setItem(this.itemName, JSON.stringify(undid)) 
    }

    clearTasks() {
        localStorage.clear()
    }
    
}

const localStorageUtil = new LocalStorageUtil()