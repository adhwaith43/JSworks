
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let editIndex = null;



function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}



function renderTasks() {

    let list = document.getElementById("taskList");

    let empty = document.getElementById("emptyState");

    let search = document.getElementById("searchInput").value.toLowerCase();

    let filter = document.getElementById("filterSelect").value;


    list.innerHTML = "";


    let filtered = tasks.filter(task => {

        if (filter == "active") return !task.completed;

        if (filter == "completed") return task.completed;

        return true;

    }).filter(task => task.text.toLowerCase().includes(search));


    empty.style.display = filtered.length ? "none" : "block";


    filtered.forEach((task, index) => {

        let li = document.createElement("li");

        let left = document.createElement("div");

        left.className = "task-left";



        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = task.completed;


        checkbox.onchange = () => {

            task.completed = !task.completed;

            saveTasks();

            renderTasks();

        };



        let text = document.createElement("span");

        text.innerText = task.text;

        if (task.completed) text.classList.add("completed");


        left.append(checkbox, text);


        let right = document.createElement("div");

        right.className = "task-right";



        // EDIT BUTTON

        let edit = document.createElement("span");

        edit.className = "icon-btn";

        edit.innerHTML = `<img src="icons/Frame 6.svg">`;

        edit.onclick = () => {

            editIndex = index;

            openModal(task.text);

        };




        // DELETE BUTTON

        let del = document.createElement("span");

        del.className = "icon-btn";

        del.innerHTML = `<img src="icons/trash-svgrepo-com 1.svg">`;

        del.onclick = () => {

            tasks.splice(index, 1);

            saveTasks();

            renderTasks();

        };



        right.append(edit, del);


        li.append(left, right);

        list.append(li);


    });

}


function openModal(text = "") {

    let modal = document.getElementById("modal");

    modal.style.display = "flex";

    setTimeout(() => {

        modal.classList.add("show");

    }, 10);

    if (typeof text === "string")

        document.getElementById("taskInput").value = text;

    else

        document.getElementById("taskInput").value = "";

}



function closeModal() {

    let modal = document.getElementById("modal");

    modal.classList.remove("show");

    setTimeout(() => {

        modal.style.display = "none";

    }, 200);

    editIndex = null;

}



document.getElementById("applyBtn").onclick = () => {

    let value = document.getElementById("taskInput").value.trim();

    if (!value) return alert("Empty not allowed");

    if (editIndex != null)

        tasks[editIndex].text = value;

    else

        tasks.push({ text: value, completed: false });

    saveTasks();

    renderTasks();

    closeModal();

};



document.getElementById("cancelBtn").onclick = closeModal;

document.getElementById("addBtn").onclick = () => openModal();

document.getElementById("searchInput").oninput = renderTasks;

document.getElementById("filterSelect").onchange = renderTasks;



document.getElementById("themeToggle").onclick = () => {

    document.body.classList.toggle("dark");

    document.body.classList.toggle("light");

    localStorage.setItem("theme", document.body.className);

};

document.body.className = localStorage.getItem("theme") || "light";


renderTasks();