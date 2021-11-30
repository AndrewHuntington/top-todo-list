const todo = (() => {
  const create = (
    title,
    description = "",
    dueDate = "",
    priority = "low",
    completed = false
  ) => {
    const getTitle = () => title;

    return { getTitle };
  };

  return { create };
})();

export default todo;
