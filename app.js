const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo__list");
const todoSelect = document.querySelector(".todo__filter");

//Event
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", todoCheck);
todoSelect.addEventListener("click", todoFilter);
//Function

function addTodo(e) {
  e.preventDefault();
  //create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo__item");
  todoDiv.appendChild(newTodo);

  //create check button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i> ';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  //create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i> ';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

//Todo check
function todoCheck(e) {
  const item = e.target;
  console.log(item.classList.value);
  //Delete todo
  if (item.classList.value === "trash-btn") {
    item.parentElement.classList.add("fall");
    item.parentElement.addEventListener("transitionend", () => {
      item.parentElement.remove();
    });
  }

  //check todo
  if (item.classList.value === "complete-btn") {
    item.parentElement.classList.toggle("check__todo");
  }
}

//Todo filter
function todoFilter(e) {
  const todos = todoList.childNodes;
  //   console.log(todos);
  todos.forEach((todo) => {
    if (e.target.value === "all") {
      todo.style.display = "flex";
    }
    if (e.target.value === "completed") {
      if (todo.classList.contains("check__todo")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    }
    if (e.target.value === "uncompleted") {
      if (!todo.classList.contains("check__todo")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    }
  });
}
