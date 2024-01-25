function addTask(){


    let ul = document.querySelector('ul')

    // creazione dinamica dell'ul in html con verifica se già presente
    if(!ul) {
        ul = document.createElement('ul')
        document.querySelector('button').insertAdjacentElement('afterend', ul);
    }

    let taskInput= document.querySelector('input')

    // verifica che il campo di input della task non sia vuoto
    if(taskInput.value.trim() !== '') {

        let task = document.querySelector('input').value

        let newTask = document.createElement('li')
        newTask.textContent = task

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        // inserimento in pagina
        newTask.appendChild(checkbox)
        ul.appendChild(newTask)

        taskInput.value = '';
    }
}