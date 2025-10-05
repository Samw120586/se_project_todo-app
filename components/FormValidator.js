class FormValidator {
    constructor(settings, formEl) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
    }

    _showInputError() {
    this.inputElement.classList.add(this._inputErrorClass);
    this.errorElement.textContent = errorMessage;
    this.errorElement.classList.add(this._errorClass);
    }

    _hideInputError() {
      this.inputElement.classList.remove(this_inputErrorClass);
      this.errorElement.classList.remove(this._errorClass);
      this.errorElement.textContent = "";
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
    _showInputError(
      this._formEl,
      this.inputElement,
      this.inputElement.validationMessage,
    );
  } else {
    _hideInputError(inputElement);
  }
    }

    _toggleButtonState() {
        if (hasInvalidInput(inputList)) {
     buttonElement.classList.add(this._inactiveButtonClass);
     buttonElement.disabled = true;
     } else {
     buttonElement.classList.remove(this.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}
    _setEventListeners() {
    this._inputList = Array.from(
    this._formEl.querySelectorAll(this.inputSelector),
  );
    const buttonElement = this._formEl.querySelector(
    this._submitButtonSelector,
  );

    this._inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
    }

    enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  this._setEventListeners();
    }
}
export default FormValidator;