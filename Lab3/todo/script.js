const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", completeTask);

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(li));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }
}

function completeTask(event) {
  const checkbox = event.target;
  const taskText = checkbox.nextElementSibling;

  if (checkbox.checked) {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "gray";
  } else {
    taskText.style.textDecoration = "none";
    taskText.style.color = "black";
  }
}

function deleteTask(taskElement) {
  taskElement.remove();
}
