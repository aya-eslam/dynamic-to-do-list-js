document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        
        const li = document.createElement('li');
        li.textContent = taskText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const addButton = document.getElementById('add-task-btn');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');
    
        function addTask() {
            const taskText = taskInput.value.trim();
            
            if (taskText === "") {
                alert("Please enter a task.");
                return;
            }
            
            // Create new li element
            const li = document.createElement('li');
            li.textContent = taskText;
            
            // Create new remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            
            // Attach event to remove button
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };
            
            // Append remove button to li
            li.appendChild(removeButton);
            
            // Append li to taskList
            taskList.appendChild(li);
            
            // Clear the task input field
            taskInput.value = "";
        }
    
        // Add event listener for Add Task button
        addButton.addEventListener('click', addTask);
    
        // Add event listener for Enter key
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        
        // Create new li element
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create new remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Attach event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append remove button to li
        li.appendChild(removeButton);
        
        // Append li to taskList
        taskList.appendChild(li);
        
        // Clear the task input field
        taskInput.value = "";
    }

    // Add event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

});
