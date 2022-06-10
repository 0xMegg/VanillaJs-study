const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const loadedTodos = localStorage.getItem("todoList");
let todos = [];

if (loadedTodos) {
  todos = JSON.parse(loadedTodos);
  todos.forEach(paintToDo);
}

function saveToDos() {
  localStorage.setItem("todoList", JSON.stringify(todos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  const filtered = todos.filter((e) => e.id !== parseInt(li.id));
  todos = filtered;
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.value;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = { id: Date.now(), value: toDoInput.value };
  todos.push(newTodo);
  toDoInput.value = "";
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
