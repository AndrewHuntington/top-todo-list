import { v4 as uuidv4 } from "uuid";

const todo = (() => {
  const create = ({
    title,
    details = "none",
    project = "Inbox",
    dueDate = "",
    priority = "low",
    completed = false,
    id = uuidv4(),
  }) => {
    const getTitle = () => title;
    const getDetails = () => details;
    const getProject = () => project;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => completed;
    const getId = () => id;

    return {
      getTitle,
      getDetails,
      getProject,
      getDueDate,
      getPriority,
      getStatus,
      getId,
    };
  };

  return { create };
})();

export default todo;
