// 1. OUR DATA (The Notebook)
// We start with an empty list.
let todoList = [];

// 2. SELECTING ELEMENTS
// We tell the Manager which parts of the HTML to watch.
const input = document.getElementById('searchInput');
const addBtn = document.getElementById('addBtn');
const listContainer = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');

// 3. THE "ADD" LOGIC
function addTask() {
    const taskText = input.value;

    if (taskText !== "") {
        // Create a new task object
        const newTask = {
            id: Date.now(), // Unique ID using the current time
            text: taskText,
            completed: false
        };

        // Add it to our "Notebook"
        todoList.push(newTask);
        
        // Clear the input field
        input.value = "";
        
        // Tell the Secretary to update the screen
        renderTasks();
    } else {
        alert("Type something first!");
    }
}

// 4. THE "SECRETARY" (The Render Function)
// This function wipes the screen and redraws the list based on the Array.
function renderTasks() {
    // Clear the current list on screen
    listContainer.innerHTML = "";

    // If list is empty, show the "Empty" illustration
    if (todoList.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
        
        // Draw each task from the Array onto the screen
        todoList.forEach(task => {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <span style="${task.completed ? 'text-decoration: line-through; opacity: 0.5;' : ''}">
                    ${task.text}
                </span>
            `;
            listContainer.appendChild(li);
        });
    }
}

// 5. THE "LISTENER"
// Tell the Manager: "When the plus button is clicked, run addTask"
addBtn.addEventListener('click', addTask);