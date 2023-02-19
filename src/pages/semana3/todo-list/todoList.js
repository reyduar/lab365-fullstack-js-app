import { showNotification } from "../../../utils";
import { saveTaskToStore, getTodoListFromStore } from "./store";
import todoTable from "./todoTable";

const inputTaskName = document.getElementById("inputTaskName");
const addButton = document.getElementById("addButton");
const cancelButton = document.getElementById("cancelButton");
const inputTaskSearch = document.getElementById("inputTaskSearch");
const searchTaskButton = document.getElementById("searchTaskButton");
const searchLabel = document.getElementById("searchLabel");

let todoList = [];
let editTodo = null;

const resetInputs = () => {
  editTodo = null;
  todoTable;
  inputTaskName.value = "";
  inputTaskSearch.value = "";
  inputTaskName.focus();
};

const saveTask = () => {
  const name = inputTaskName.value;
  if (name) {
    if (!editTodo) {
      const id = todoList.length + 1;
      todoList.push({ id, name });
    } else {
      const index = todoList.findIndex(({ id }) => id == editTodo.id);
      todoList[index] = {
        ...todoList[index],
        name,
      };
    }
    saveTaskToStore(todoList);
    displayTodos(todoList);
    resetInputs();
  } else {
    showNotification("todoError", "Nome da tarefa é obrigatório");
    resetInputs();
  }
};

const editTask = (dataId) => {
  const findData = todoList.find(({ id }) => id == parseInt(dataId));
  editTodo = findData;
  inputTaskName.value = findData.name;
  inputTaskName.focus();
};

const deleteTask = (dataId) => {
  const filterData = todoList.filter(({ id }) => id !== parseInt(dataId));
  todoList = [...filterData];
  resetInputs();
  saveTaskToStore(todoList);
  displayTodos(todoList);
};

const handleRowActions = ({ target }) => {
  const element = target.closest("[data-id]");
  if (element) {
    const action = element.innerText || element.textContent;
    const dataId = element.getAttribute("data-id");
    if (action === "edit") {
      editTask(dataId);
    }

    if (action === "delete") {
      deleteTask(dataId);
    }
  }
};

const displayTodos = (todoList) => {
  todoTable(todoList, handleRowActions);
  if (todoList.length > 0) {
    inputTaskSearch.style.display = "block";
    searchTaskButton.style.display = "block";
    searchLabel.style.display = "block";
  } else {
    inputTaskSearch.style.display = "none";
    searchTaskButton.style.display = "none";
    searchLabel.style.display = "none";
  }
};

const handleTaskSearch = () => {
  const taskName = inputTaskSearch.value;
  let list = todoList;
  if (taskName) {
    list = todoList.filter(({ name }) =>
      name.toUpperCase().includes(taskName.toUpperCase())
    );
  }
  displayTodos(list);
};

const init = () => {
  todoList = getTodoListFromStore() || [];
  resetInputs();
  displayTodos(todoList);
};

inputTaskName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    saveTask();
  }
});
inputTaskSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleTaskSearch();
  }
});
addButton.addEventListener("click", saveTask);
searchTaskButton.addEventListener("click", handleTaskSearch);
cancelButton.addEventListener("click", init);

init();
