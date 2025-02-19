document.addEventListener("DOMContentLoaded", async () => {
    await loadTasks();

    document.addEventListener("click", (event) => {
        closeMenus(event);
    });
});

function toggleTaskForm(button) {
    closeMenus();
    button.nextElementSibling.classList.toggle("hidden");
}

async function saveTask(button) {
    const parentList = button.closest(".task-list");
    const listName = parentList.id === "todo" ? "To Do" : parentList.id === "doing" ? "Doing" : "In Review";

    const title = parentList.querySelector(".title").value;
    const description = parentList.querySelector(".description").value;
    const deadline = parentList.querySelector(".deadline").value;

    if (!title || !deadline) {
        alert("Title and Deadline are required!");
        return;
    }

    const taskData = { title, description, deadline, list_name: listName };

    const response = await fetch("http://127.0.0.1:8000/tasks/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData)
    });

    if (response.ok) {
        const newTask = await response.json();
        addTaskToUI(newTask);
        closeMenus();
    } else {
        alert("Error adding task!");
    }
}

async function loadTasks() {
    const response = await fetch("http://127.0.0.1:8000/tasks/");
    if (response.ok) {
        const tasks = await response.json();
        document.querySelectorAll(".task-items").forEach(el => el.innerHTML = "");
        tasks.forEach(task => addTaskToUI(task));
    }
}

function addTaskToUI(task) {
    const parentList = document.getElementById(task.list_name.toLowerCase().replace(" ", ""));
    if (!parentList) return;

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-card");
    taskItem.innerHTML = `
        <div class="task-category">${task.title}</div>
        <div class="task-options" onclick="toggleOptionsMenu(this)">⋮</div>
        <div class="options-menu hidden">
            <button onclick="editTask(${task.id}, this)">Edit</button>
            <button onclick="deleteTask(${task.id}, this)">Delete</button>
        </div>
        <h3 class="task-title">${task.title}</h3>
        <p class="task-description">${task.description}</p>
        <span class="task-date">🗓 ${new Date(task.deadline).toLocaleString()}</span>
        <span class="task-checkbox" onclick="toggleCheckbox(this)">☐</span>
    `;

    parentList.querySelector(".task-items").appendChild(taskItem);
}

function toggleOptionsMenu(element) {
    closeMenus();
    element.nextElementSibling.classList.toggle("hidden");
}

async function deleteTask(taskId, button) {
    const response = await fetch(`http://127.0.0.1:8000/tasks/${taskId}`, { method: "DELETE" });

    if (response.ok) {
        button.closest(".task-card").remove();

    } else {
        alert("Error deleting task!");
    }
}

function closeMenus(event) {
    document.querySelectorAll(".task-form, .options-menu").forEach(menu => {
        if (event && event.target.closest(".task-form, .options-menu, .add-task-btn, .task-options")) return;
        menu.classList.add("hidden");
    });
}

function toggleCheckbox(element) {
    element.textContent = element.textContent === "☐" ? "☑" : "☐";
}