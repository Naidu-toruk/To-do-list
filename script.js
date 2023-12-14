document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    function addTask(text) {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const icon = document.createElement('img');
        icon.src = 'icon.png';
        icon.alt = 'Icon';

        const span = document.createElement('span');
        span.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', function () {
            taskContainer.remove();
        });

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(icon);
        taskContainer.appendChild(span);
        taskContainer.appendChild(deleteButton);

        todoList.appendChild(taskContainer);
    }
});
