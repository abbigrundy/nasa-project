passwordInput.onfocus = function () {
  document.getElementById("checksField").style.display = "block";
};

passwordInput.onblur = function () {
  document.getElementById("checksField").style.display = "none";
};

const validationMatched = (id) => {
  id.classList.remove("wrong");
  id.classList.add("correct");
};
const validationNotMatched = (id) => {
  id.classList.remove("correct");
  id.classList.add("wrong");
};

const validateInput = (isValid, element) => {
  if (isValid) {
    validationMatched(element);
  } else {
    validationNotMatched(element);
  }
};

passwordInput.onkeyup = function () {
  const letter = document.getElementById("letter");
  const capital = document.getElementById("capital");
  const number = document.getElementById("number");
  const length = document.getElementById("length");
  const lowerCase = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  validateInput(passwordInput.value.match(lowerCase), letter);
  validateInput(passwordInput.value.match(upperCaseLetters), capital);
  validateInput(passwordInput.value.match(numbers), number);
  validateInput(passwordInput.value.length >= 8, length);
};

const validateEmail = () => {
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!register.email.value.match(emailRegex)) {
    event.preventDefault();
    alert("Please enter a valid email address");
  }
};

const emailAddress = document.getElementById("email");
emailAddress.addEventListener("change", validateEmail);

const checkPasswordsMatch = () => {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("psw-repeat");

  if (password.value != confirmPassword.value) {
    event.preventDefault();
    alert("Password do not match. Try again");
    return false;
  }
  return true;
};

const password = document.getElementById("psw-repeat");
password.addEventListener("change", checkPasswordsMatch);
