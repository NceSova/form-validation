import "./index.css";

class FormElem {
  elem: HTMLInputElement;
  elemError: HTMLSpanElement;

  constructor(elem: HTMLInputElement) {
    this.elem = elem;
    this.elemError = document.querySelector(
      `.${this.elem.className} + span.error`
    );
    this.elem.addEventListener("input", (e) => {
      if (this.isValid()) {
        this.elemError.textContent = "";
        this.elemError.className = "error";
      } else {
        this.showError();
      }
    });
  }

  showError(): void {}
  isValid(): boolean {
    return this.elem.validity.valid;
  }
}

class SecondName extends FormElem {
  constructor() {
    super(document.querySelector(".second") as HTMLInputElement);
  }
  showError(): void {
    const errorType = this.elem.validity;
    if (errorType.valueMissing) {
      this.elemError.textContent = "Вам нужно ввести свою фамилию.";
    }
    this.elemError.className = "error active";
  }
}

class FirstName extends FormElem {
  constructor() {
    super(document.querySelector(".name") as HTMLInputElement);
  }
  showError(): void {
    const errorType = this.elem.validity;
    if (errorType.valueMissing) {
      this.elemError.textContent = "Вам нужно ввести свое имя.";
    }
    this.elemError.className = "error active";
  }
}

class PhoneNumber extends FormElem {
  constructor() {
    super(document.querySelector(".phone") as HTMLInputElement);
  }
  showError(): void {
    const errorType = this.elem.validity;
    if (errorType.valueMissing) {
      this.elemError.textContent = "Вам нужно ввести свой номер телефона.";
    } else if (errorType.patternMismatch) {
      this.elemError.textContent = "Введите номер в формате: 81112223344";
    }
    this.elemError.className = "error active";
  }
}

class EmailAddress extends FormElem {
  constructor() {
    super(document.querySelector(".email") as HTMLInputElement);
  }
  showError(): void {
    const errorType = this.elem.validity;
    if (errorType.valueMissing) {
      this.elemError.textContent = "Вам нужно ввести свою электронную почту.";
    } else if (errorType.patternMismatch) {
      this.elemError.textContent = "Введите почту в формате: user@host.domen";
    }
    this.elemError.className = "error active";
  }
}

const form = document.querySelector("form") as HTMLFormElement;

const second = new SecondName();
const first = new FirstName();
const phone = new PhoneNumber();
const email = new EmailAddress();

form.addEventListener("submit", (event) => {
  const inputs = [second, first, phone, email];
  if (
    !second.isValid() ||
    !first.isValid() ||
    !phone.isValid() ||
    !email.isValid()
  ) {
    inputs.forEach((elem) => {
      if (!elem.isValid()) {
        elem.showError();
        console.log("ds");
      }
    });
    event.preventDefault();
  }
});
