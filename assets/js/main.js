const newTask = document.querySelector(".new-task");
const btnAddTask = document.querySelector(".btn-add-task");
const taskList = document.querySelector(".task-list");

function createLi() {
  const li = document.createElement("li");
  return li;
}

function createDeleteButton(li) {
  li.innerHTML += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Apagar";
  deleteButton.setAttribute('class', 'apagar')
  li.appendChild(deleteButton);
}

function createTask(taskInput) {
  const li = createLi();
  li.innerHTML = taskInput;
  taskList.appendChild(li);
  clearInput();
  createDeleteButton(li);
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

function deleteTask (el) {
  el.parentElement.remove()
}

document.addEventListener("click", function(e) {
  const el = e.target;
  if(el.classList.contains('apagar')) {
    deleteTask(el)
  }
})
