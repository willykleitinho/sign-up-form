'use strict';

const form = document.getElementById("sign-up-form");
const formInputs = {
  firstName: document.getElementById("first-name"),
  lastName: document.getElementById("last-name"),
  email: document.getElementById("email"),
  password: document.getElementById("password")
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formInputs.firstName.parentElement.classList.contains("error")) {
    formInputs.firstName.parentElement.classList.remove("error");
    formInputs.lastName.parentElement.classList.remove("error");
    formInputs.email.parentElement.classList.remove("error");
    formInputs.password.parentElement.classList.remove("error");
  } else {
    formInputs.firstName.parentElement.classList.add("error");
    formInputs.lastName.parentElement.classList.add("error");
    formInputs.email.parentElement.classList.add("error");
    formInputs.password.parentElement.classList.add("error");
  }
}, true);