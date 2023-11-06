const input = document.getElementById('input');
const ul = document.getElementById('list');
const addButton = document.getElementById('add');

// Sayfa yüklendiğinde "localStorage" içeriğini al ve görevleri göster
window.addEventListener('load', () => {
    const storedData = localStorage.getItem('todoList');
    if (storedData) {
        const todoList = JSON.parse(storedData);
        todoList.forEach(task => {
            createTaskElement(task);
        });
    }
});



addButton.addEventListener('click', () => {
    if (!input.value.trim()) {
        alert('Lütfen bir görev girin');
    } else {
        const task = {
            text: input.value,
            completed: false
        };

        createTaskElement(task);

        // Local Storage'da saklamak için görevi "todoList" dizisine ekleyin
        const storedData = localStorage.getItem('todoList');
        const todoList = storedData ? JSON.parse(storedData) : [];
        todoList.push(task);
        localStorage.setItem('todoList', JSON.stringify(todoList));

        input.value = '';
    }
});





function createTaskElement(task) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const deleteButton = document.createElement('button');
    const todo = document.createElement('span');

    li.appendChild(p);
    li.appendChild(todo);
    li.appendChild(deleteButton);

    const text = document.createTextNode(task.text);
    const x = document.createTextNode('X');

    deleteButton.appendChild(x);
    todo.appendChild(text);

    li.classList.add('li');
    p.classList.add('p');
    deleteButton.classList.add('sil');
    deleteButton.type = 'button';

    if (task.completed) {
        p.classList.add('pchecked');
        todo.classList.add('line');
    }

    ul.appendChild(li);


    deleteButton.addEventListener('click', () => {
        ul.removeChild(li);
        removeTask(task);
    });




    li.addEventListener('click', () => {
        p.classList.toggle('pchecked');
        todo.classList.toggle('line');
        task.completed = !task.completed;
        updateTask(task);
    });
}







function removeTask(task) {
    const storedData = localStorage.getItem('todoList');
    if (storedData) {
        const todoList = JSON.parse(storedData);
        const index = todoList.findIndex(t => t.text === task.text);
        if (index !== -1) {
            todoList.splice(index, 1);
            localStorage.setItem('todoList', JSON.stringify(todoList));
        }
    }
}



function updateTask(task) {
    const storedData = localStorage.getItem('todoList');
    if (storedData) {
        const todoList = JSON.parse(storedData);
        const existingTask = todoList.find(t => t.text === task.text);
        if (existingTask) {
            existingTask.completed = task.completed;
            localStorage.setItem('todoList', JSON.stringify(todoList));
        }
    }
}