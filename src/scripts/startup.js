import todo from "./todo";
import manipulateDOM from "./manipulateDOM";
import todoStore from "../stores/todoStore";
import { reducer, ADD } from "../reducers/todoStoreReducer";

const startup = (() => {
  manipulateDOM.createList();

  const addButton = document.querySelector(".button--add");
  const inputs = document.querySelectorAll(".input");
  const [title, details, project, dueDate, priority] = inputs;

  // Clear input on page load
  const clearInputs = () => {
    inputs.forEach((input) => {
      if (input.value !== "") input.value = "";
      if (input.checked) input.checked = false;
    });
  };

  clearInputs();

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newTodo = todo.create({
      title: title.value,
      details: details.value,
      project: project.value || "Inbox",
      dueDate: dueDate.value,
      priority: priority.checked ? "high" : "low",
    });

    manipulateDOM.addToTodoList(newTodo);
    todoStore.todos = reducer(todoStore.todos, { type: ADD, payload: newTodo });

    clearInputs();
  });
})();

export default startup;
