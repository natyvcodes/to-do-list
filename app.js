numTask = 0;
const tContainer = document.querySelector(".t-item");
const AllTasks = document.querySelector(".task-container");
/** Funcion por defecto */
function defaultTask() {
    tContainer.classList.remove("visibility");
    let task = tContainer.querySelector(".check-task");
    let text = tContainer.querySelector(".text");
    task.addEventListener('click', () => {
        if (task.checked) {
            text.style.textDecoration = "line-through"
        } else {
            text.style.textDecoration = "none"
        }
    })
    const removeButton = tContainer.querySelector('.dlt-task');
    removeButton.addEventListener('click', () => {
       removeTask(tContainer)
    });
}

/** Funcion para añadir Tereas */
function AddNextTask(event) {

    event.preventDefault();

    const nextTask = tContainer.cloneNode(true);
    let taskContent = document.querySelector("#item");
    const tText = nextTask.querySelector(".text");
    if (taskContent.value == "") {
        alert("Add some text")
    } else {
        numTask++
        nextTask.id = `task-${numTask}`;
        tText.innerText = taskContent.value;
        nextTask.classList.remove("visibility");
        AllTasks.appendChild(nextTask);
    }
    taskContent.value = "";
    const removeButton = nextTask.querySelector('.dlt-task');
    removeButton.addEventListener('click', () => {
        removeTask(nextTask);
    });
    const check = nextTask.querySelector(".check-task");
    check.addEventListener('click', () => {
        checkTask(nextTask);
    });

}
/** Funcion evento que aplica la funcion añadir tarea */
const AddTasks = () => {
    let addButton = document.querySelector("#addButton");
    addButton.addEventListener('click', AddNextTask)
}
/** Eliminar tareas */
const removeTask = (task) => {
    AllTasks.removeChild(task);
}
/** Marcar tareas */
const checkTask = (checkedTask) => {
    let task = checkedTask.querySelector(".check-task");
    let text = checkedTask.querySelector(".text");
    if (task.checked) {
        text.style.textDecoration = "line-through"
    } else {
        text.style.textDecoration = "none"
    }
}
defaultTask();
AddTasks();