import todoStore from "../stores/todoStore";
import { reducer, DELETE, EDIT } from "../reducers/todoStoreReducer";

const manipulateDOM = (() => {
  const createBtnHandlers = () => {
    const handleEdit = (e) => {
      const id = e.target.parentNode.parentNode.id;
      const todoDOMElement = document.getElementById(id);
      todoDOMElement.classList.toggle("hide-me");

      // TODO: make into own function
      const todoFromStore = todoStore.todos.find((t) => t.getId() === id);
      const editForm = document.createElement("form");
      editForm.innerHTML = `
      <div>
        <input
          class="input form-control"
          type="text"
          id="input__todo-title"
          placeholder="Title: Go to the store"
          value="${todoFromStore.getTitle()}"
        />
      </div>
      <div>
        <textarea
          class="input form-control"
          rows="3"
          id="input__todo-details"
          placeholder="Details: Make sure to pick up milk and eggs"
          
        >${todoFromStore.getDetails()}</textarea>
      </div>
      <div>
        <input
          class="input form-control"
          type="text"
          id="input__todo-project"
          placeholder="Project Name"
          value="${todoFromStore.getProject()}"
        />
      </div>
      <div class="mb-3">
        <input 
          class="input form-control" 
          type="date" 
          id="input__todo-due" 
          value="${todoFromStore.getDueDate()}" 
        />
      </div>
      <div class="form-check">
        <input
          class="input form-check-input"
          type="checkbox"
          id="input__todo-priority"
          ${todoFromStore.getPriority() === "high" ? "checked" : ""}
        />
        <label class="form-check-label" for="input__todo-priority">
          High Priority
        </label>
      </div>

      <button class="button button--accept">Accept</button>
      <button class="button button--cancel">Cancel</button>
      `;
      todoDOMElement.parentElement.appendChild(editForm);
    };

    const handleDelete = (e) => {
      const id = e.target.parentNode.parentNode.id;
      todoStore.todos = reducer(todoStore.todos, { type: DELETE, payload: id });
      refreshList();
    };

    return { handleEdit, handleDelete };
  };

  const createTodoWrapper = () => {
    // create the click handlers first
    const { handleEdit, handleDelete } = createBtnHandlers();

    // creates a wrapper div for each todo
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

    return wrapper;
  };

  const addToTodoList = (todo) => {
    const wrapper = createTodoWrapper();

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
