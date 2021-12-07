import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import todo from "./scripts/todo";
import manipulateDOM from "./scripts/manipulateDOM";
import todoStore from "./stores/todoStore";
import { reducer, ADD } from "./reducers/todoStoreReducer";

// TODO:
// 1. Implement Delete functionality - DONE
// 2. Implement Edit functionality
// 3. Display all todo info in the DOM
// 4. Improve Add functionality to accept all parameters
// 5. Clean up index.js
//  6. Refactor manipulateDOM.addToTodoList() - DONE (for now)

manipulateDOM.createList();

const addButton = document.querySelector(".button--add");
const inputs = document.querySelectorAll(".input");
const [title, details, project, dueDate, priority] = inputs;

// Clear input on page load
//TODO: Make function
inputs.forEach((input) => {
  if (input.value !== "") input.value = "";
  if (input.checked) input.checked = false;
});

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodo = todo.create({
    title: title.value,
    details: details.value,
    project: project.value,
    dueDate: dueDate.value,
    priority: priority.checked ? "high" : "low",
  });
  manipulateDOM.addToTodoList(newTodo);
  todoStore.todos = reducer(todoStore.todos, { type: ADD, payload: newTodo });

  // TODO: Refactor
  inputs.forEach((input) => {
    if (input.value !== "") input.value = "";
    if (input.checked) input.checked = false;
  });
});
