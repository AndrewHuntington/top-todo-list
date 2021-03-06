import todo from "../scripts/todo";

export default {
  todos: [
    todo.create({
      title: "Go shopping",
      details: "Don't forget to buy laundry detergent",
      project: "Inbox",
      dueDate: "",
      priority: "low",
      completed: false,
      id: "1",
    }),
    todo.create({
      title: "Renew drivers' license",
      details: "",
      project: "Inbox",
      dueDate: "12/25/2021",
      priority: "high",
      completed: true,
      id: "2",
    }),
    todo.create({
      title: "Grind Leetcode",
      details: "Because I'm not allowed a life",
      project: "Coding",
      dueDate: "",
      priority: "high",
      completed: false,
      id: "3",
    }),
  ],
};
