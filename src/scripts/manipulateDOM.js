const manipulateDOM = (() => {
  const addToTodoList = (todo) => {
    const wrapper = document.createElement("div");
    const todoItem = document.createElement("li");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";

    wrapper.classList.add("todo-wrapper");
    todoItem.classList.add("todo__item");
    editBtn.classList.add("todo--edit");
    deleteBtn.classList.add("todo--delete");

    todoItem.textContent = todo.getTitle();
    document.querySelector("#todo__list").appendChild(wrapper);
    wrapper.appendChild(todoItem);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
  };

  return { addToTodoList };
})();

export default manipulateDOM;
