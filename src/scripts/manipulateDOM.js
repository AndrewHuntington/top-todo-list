import todoStore from "./todoStore";
import { reducer, DELETE, EDIT } from "./todoStoreReducer";

const manipulateDOM = (() => {
  const addToTodoList = (todo) => {
    //TODO: Look into refactoring
    const wrapper = document.createElement("div");
    const todoItem = document.createElement("li");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    todoItem.id = todo.getId();
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";

    wrapper.classList.add("todo-wrapper");
    todoItem.classList.add("todo__item");
    editBtn.classList.add("button", "button--edit");
    deleteBtn.classList.add("button", "button--delete");

    editBtn.addEventListener("click", (e) => {
      console.log("edit");
    });

    deleteBtn.addEventListener("click", (e) => {
      const id = +e.target.parentNode.id;
      todoStore.todos = reducer(todoStore.todos, { type: DELETE, payload: id });
      refreshList();
    });

    todoItem.textContent = todo.getTitle();
    document.querySelector("#todo__list").appendChild(wrapper);
    wrapper.appendChild(todoItem);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
  };

  const createList = () => {
    todoStore.todos.forEach((todo) => {
      addToTodoList(todo);
    });
  };

  const deleteList = () => {
    const todoList = document.querySelector("#todo__list");
    todoList.innerHTML = "";
  };

  const refreshList = () => {
    deleteList();
    createList();
  };

  return { addToTodoList, createList };
})();

export default manipulateDOM;
