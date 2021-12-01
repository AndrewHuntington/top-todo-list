import "./styles/main.css";
import todo from "./scripts/todo";
import manipulateDOM from "./scripts/manipulateDOM";
import todoStore from "./scripts/todoStore";
import { reducer, ADD } from "./scripts/todoStoreReducer";

const buttonAdd = document.querySelector(".button--add");
const buttonEdit = document.querySelector(".button--edit");
const input = document.querySelector(".input");

// Clear input on page load
if (input.value !== "") {
  input.value = "";
}

manipulateDOM.createList();

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodo = todo.create({ title: input.value });
  manipulateDOM.addToTodoList(newTodo);
  todoStore.todos = reducer(todoStore.todos, { type: ADD, payload: newTodo });
  input.value = "";
});

buttonEdit.addEventListener("click", (e) => {
  console.log(e);
});
