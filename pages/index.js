import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import TodoCounter from '../components/TodoCounter.js';
 
const todoCounter = new TodoCounter(initialTodos, ".counter__text");
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
 
const addTodoPopup = new PopupWithForm({ 
  popupSelector: "#add-todo-popup", 
  
  handleFormSubmit: (evt) => {
    addTodoForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value; 
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
 
  const id = uuidv4();
  const values = { name, date, id };
  const todo = generateTodo(values);
  todosList.append(todo);
  addTodoPopup.close();
});
  },
});
 
function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
};
 
function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
    }
};
 
function openModal(addTodoPopup) {
  addTodoPopupEl.classList.add("add-todo-popup");
   document.addEventListener("click", function (evt) {
    if (evt.target === addTodoForm) {
      closeModal();
    };
   });
   document.addEventListener("keydown", function (evt) {
    if (evt.key === `Escape`) {
      closeModal();
    };
   });
  };
 
 function closeModal(addTodoPopup) {
  addTodoPopupEl.classList.remove("add-todo-popup");
  document.removeEventListener("keydown", function (evt) {
  });
  document.removeEventListener("click", function (evt) {
  });
 };
 
addTodoPopup.setEventListeners();
 
const section = new Section({items: [initialTodos],renderer: () => {
    generateTodo(item);
    todosList.append(todo);
  },
    containerSelector: ".todos__list"
});
 
 
// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};
 
addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});
 
addTodoCloseBtn.addEventListener("click", () => {
  addTodoPopup.close();
});
 
 
 
initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});
 
 
 
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();