const credentials = require("../../../Bootcamp1/bookish/credentials");
import { credentials } from "./credentials";

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === credentials.username && password === credentials.password) {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
