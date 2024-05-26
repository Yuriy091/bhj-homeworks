document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (input.value.length === 0) {
            return;
        }

        addTask(input.value);

        input.value = '';
    });

    function addTask(text) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <div class="task__title">
                ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `;

        tasksList.appendChild(taskElement);

        const removeButton = taskElement.querySelector('.task__remove');
        removeButton.addEventListener('click', () => {
            deleteTask(taskElement);
        });
    }

    function deleteTask(taskElement) {
        taskElement.remove();
    }
});
