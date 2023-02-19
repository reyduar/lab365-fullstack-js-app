export const saveTaskToStore = (list) => {
  localStorage.setItem("todoList", JSON.stringify(list));
};

export const getTodoListFromStore = () => {
  return JSON.parse(localStorage.getItem("todoList"));
};
