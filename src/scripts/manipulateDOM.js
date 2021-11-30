const manipulateDOM = (() => {
  const addToList = (todo) => {
    const li = document.createElement("li");
    li.textContent = todo.getTitle();
    document.querySelector(".todo__list").appendChild(li);
  };

  return { addToList };
})();

export default manipulateDOM;
