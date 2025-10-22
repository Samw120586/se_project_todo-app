class Todo {
    constructor(data, selector) {
        this._completed = data.completed;
        this._name = data.name;
        this._date = data.date;
        this._id = data.id;
        this._selector = selector;
    };
 
    _setEventListeners() {
       this._deleteBtnEl.addEventListener("click", this._handleDelete);
       this._checkboxEl.addEventListener("change", this._handlecheck);
    };
 
    _getTemplate() {
      return document.querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
    };

    _generateNameEl() {
      this._nameEl = this._element.querySelector(".todo__name");
      this._nameEl.textContent = this._name;
    };

    _generateDateEl() {
      this._dateEl = this._element.querySelector(".todo__date");
      const dueDate = new Date(this._date);
      if (!isNaN(dueDate)) {
        this._dateEl.textContent = `Due: ${dueDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}`;
      };
    };

    _generateCheckBoxEl() {
      this._checkboxEl = this._element.querySelector(".todo__completed");
      this._checkboxLabel = this._element.querySelector(".todo__label");
      this._checkboxEl.checked = this._completed;
      this._checkboxEl.id = `todo-${this.id}`;
      this._checkboxLabel.setAttribute("for", `todo-${this._id}`);
    }

    _handlecheck = () => {
      this._completed = !this._completed;
    };

    _handleDelete = () => {
      this._todoElement.remove();
      this._element = null;
    };
 
    getView() {
   this._element = this._getTemplate();
   this._deleteBtnEl = this._element.querySelector(".todo__delete-btn");
   this._generateNameEl();
   this._generateDateEl();
   this._generateCheckBoxEl();
   this._setEventListeners();
   return this._element;
 };
};
 
export default Todo;
