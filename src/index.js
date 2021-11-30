import "./styles/main.css";
import todo from "./scripts/todo";
import manipulateDOM from "./scripts/manipulateDOM";

const buttonAdd = document.querySelector(".button--add");
const buttonEdit = document.querySelector(".button--edit");
const input = document.querySelector(".input");

// Clear input on page load
if (input.value !== "") {
  input.value = "";
}

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodo = todo.create(input.value);
  manipulateDOM.addToTodoList(newTodo);
  input.value = "";
});

buttonEdit.addEventListener("click", (e) => {
  console.log(e);
});
