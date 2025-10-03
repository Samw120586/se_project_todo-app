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

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
    showInputError(
      this._formEl,
      inputElement,
      inputElement.validationMessage,
    );
  } else {
    hideInputError(inputElement);
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