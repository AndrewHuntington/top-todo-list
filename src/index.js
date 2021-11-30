import "./styles/main.css";
import todo from "./scripts/todo";
import manipulateDOM from "./scripts/manipulateDOM";

const button = document.querySelector(".button");
const input = document.querySelector(".input");

// Clear input on page load
if (input.value !== "") {
  input.value = "";
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const newTodo = todo.create(input.value);
  manipulateDOM.addToList(newTodo);
  input.value = "";
});
