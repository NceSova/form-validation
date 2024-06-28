import "./index.css";

const form = document.querySelector("form") as HTMLFormElement;
const phone = document.querySelector(".phone") as HTMLInputElement;
const phoneError = document.querySelector(
  ".phone + span.error"
) as HTMLSpanElement;

phone.addEventListener("input", (e) => {
  if (phone.validity.valid) {
    phoneError.textContent = "";
    phoneError.className = "error";
  } else {
    showPhoneError();
  }
});

form.addEventListener("submit", (e) => {
  if (!phone.validity.valid) {
    showPhoneError();
    e.preventDefault();
  }
});

function showPhoneError() {}
