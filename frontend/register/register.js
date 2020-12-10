const passwordInput = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

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

passwordInput.onkeyup = function () {
  const lowerCase = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  if (passwordInput.value.match(lowerCase)) {
    validationMatched(letter);
  } else {
    validationNotMatched(letter);
  }

  if (passwordInput.value.match(upperCaseLetters)) {
    validationMatched(capital);
  } else {
    validationNotMatched(capital);
  }

  if (passwordInput.value.match(numbers)) {
    validationMatched(number);
  } else {
    validationNotMatched(number);
  }

  if (passwordInput.value.length >= 8) {
    validationMatched(length);
  } else {
    validationNotMatched(length);
  }
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
