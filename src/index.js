import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import todo from "./scripts/todo";
import manipulateDOM from "./scripts/manipulateDOM";
import todoStore from "./scripts/todoStore";
import { reducer, ADD } from "./scripts/todoStoreReducer";

// TODO:
// 1. Implement Delete functionality - DONE
// 2. Implement Edit functionality
// 3. Display all todo info in the DOM
// 4. Improve Add functionality to accept all parameters
// 5. Clean up index.js
// * 6. Refactor manipulateDOM.addToTodoList()

// TODO: Uncomment
// manipulateDOM.createList();

const addButton = document.querySelector(".button--add");
const input = document.querySelector(".input");

// Clear input on page load
if (input.value !== "") {
  input.value = "";
}

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodo = todo.create({ title: input.value });
  manipulateDOM.addToTodoList(newTodo);
  todoStore.todos = reducer(todoStore.todos, { type: ADD, payload: newTodo });
  input.value = "";
});
