const newTask = document.querySelector(".new-task");
const btnAddTask = document.querySelector(".btn-add-task");
const taskList = document.querySelector(".task-list");

function createLi() {
  const li = document.createElement("li");
  return li;
}

function createTask(taskInput) {
  const li = createLi();
  li.innerHTML = taskInput;
  taskList.appendChild(li);
  clearInput();
}

function clearInput() {
  newTask.value = "";
  newTask.focus();
}

newTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!newTask.value) return;
    createTask(newTask.value);
  }
});

btnAddTask.addEventListener("click", function () {
  if (!newTask.value) return;
  createTask(newTask.value);
});
