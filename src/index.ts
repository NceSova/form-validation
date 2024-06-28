import "./index.css";

const form = document.querySelector("form") as HTMLFormElement;

const second = document.querySelector(".second") as HTMLInputElement;
const secondError = document.querySelector(
  ".second + span.error"
) as HTMLSpanElement;

const name = document.querySelector(".name") as HTMLInputElement;
const nameError = document.querySelector(
  ".name + span.error"
) as HTMLSpanElement;

const phone = document.querySelector(".phone") as HTMLInputElement;
const phoneError = document.querySelector(
  ".phone + span.error"
) as HTMLSpanElement;

const email = document.querySelector(".email") as HTMLInputElement;
const emailError = document.querySelector(
  ".email + span.error"
) as HTMLSpanElement;

const password = document.querySelector(".password") as HTMLInputElement;
const passwordError = document.querySelector(
  ".password + span.error"
) as HTMLSpanElement;

const repeat = document.querySelector(".repeat") as HTMLInputElement;
const repeatError = document.querySelector(
  ".repeat + span.error"
) as HTMLSpanElement;
