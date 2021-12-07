import todoStore from "../stores/todoStore";
import { reducer, DELETE, EDIT } from "../reducers/todoStoreReducer";

const manipulateDOM = (() => {
  const addToTodoList = (todo) => {
    //TODO: Look into refactoring
    const wrapper = document.createElement("div");
    wrapper.classList.add("todo-wrapper");
    wrapper.addEventListener("click", (e) => {
      let target = e.target;

      if (target.classList.contains("todo-item__button--edit")) {
        handleEdit(e);
      }

      if (target.classList.contains("todo-item__button--delete")) {
        handleDelete(e);
      }
    });

    const handleEdit = (e) => {
      console.log("edit", e);
    };

    const handleDelete = (e) => {
      const id = e.target.parentNode.parentNode.id;
      todoStore.todos = reducer(todoStore.todos, { type: DELETE, payload: id });
      console.warn("Deleted!");
      refreshList();
    };

    // Got too used to JSX, I guess
    wrapper.innerHTML = `
    <li class="todo-item list-group-item" id=${todo.getId()}>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="todo-item__title-${todo.getId()}"
          ${todo.getStatus() ? "checked" : ""}
        />
        <label class="form-check-label" for="todo-item__title-${todo.getId()}"
          >${todo.getTitle()}</label
        >
        <button class="button todo-item__button--edit">Edit</button>
        <button class="button todo-item__button--delete">Delete</button>
      </div>
      <div class="todo-item__details">${todo.getDetails()}</div>
      <div class="todo-item__project">Project: ${todo.getProject()}</div>
      <div class="todo-item__dueDate">Due Date: ${todo.getDueDate()}</div>
      <div class="todo-item__priority">${todo.getPriority()}</div>
    </li>
    `;

    document.querySelector("#todo-list").appendChild(wrapper);
  };

  const createList = () => {
    todoStore.todos.forEach((todo) => {
      addToTodoList(todo);
    });
  };

  const deleteList = () => {
    const todoList = document.querySelector("#todo-list");
    todoList.innerHTML = "";
  };

  const refreshList = () => {
    deleteList();
    createList();
  };

  return { addToTodoList, createList };
})();

export default manipulateDOM;
