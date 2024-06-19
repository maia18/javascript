const newTask = document.querySelector('.input-new-task');
const btnTask = document.querySelector('.btn-add-task');
const listTask = document.querySelector('.tasks');

function createButton(li) {
    li.innerText += ' '; 
    const button = document.createElement('button');
    button.innerText = 'Clear';
    button.setAttribute('class', 'clear');
    button.setAttribute('title', 'clear this task');
    li.appendChild(button);
}
function createTask(textInput) {
    const li = document.createElement('li');
    li.innerText = textInput;
    listTask.appendChild(li);

    newTask.value = '';
    newTask.focus();

    createButton(li);
    saveTasks();
}
function saveTasks() {
    const liTasks = listTask.querySelectorAll('li');
    const Taskslist = [];

    for (let list of liTasks) {
        let TaskText = list.innerText;
        TaskText = TaskText.replace('Clear', '').trim();
        Taskslist.push(TaskText);
    }
    const tasksJSON = JSON.stringify(Taskslist);
    localStorage.setItem('Tasks', tasksJSON);
}
function AddSvedTasks() {
    const tasks = localStorage.getItem('tasks');
    const Taskslist = JSON.parse(tasks);
    for (let list of Taskslist) {
        createTask(list);
    }
}
AddSvedTasks();

newTask.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        if (!newTask.value) return;
        createTask(newTask.value);
    }
})
btnTask.addEventListener('click', function(event) {
    if (!newTask.value) return;
    createTask(newTask.value);
})
document.addEventListener('click', function(event) {
    const el = event.target;
    if (el.classList.contains('clear')) {
        el.parentElement.remove();
        saveTasks();
    }
})