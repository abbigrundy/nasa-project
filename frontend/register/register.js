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

passwordInput.onkeyup = function () {
  const lowerCase = /[a-z]/g;
  if (passwordInput.value.match(lowerCase)) {
    letter.classList.remove("wrong");
    letter.classList.add("correct");
  } else {
    letter.classList.remove("correct");
    letter.classList.add("wrong");
  }
  const upperCaseLetters = /[A-Z]/g;
  if (passwordInput.value.match(upperCaseLetters)) {
    capital.classList.remove("wrong");
    capital.classList.add("correct");
  } else {
    capital.classList.remove("correct");
    capital.classList.add("wrong");
  }
  const numbers = /[0-9]/g;
  if (passwordInput.value.match(numbers)) {
    number.classList.remove("wrong");
    number.classList.add("correct");
  } else {
    number.classList.remove("correct");
    number.classList.add("wrong");
  }
  if (passwordInput.value.length >= 8) {
    length.classList.remove("wrong");
    length.classList.add("correct");
  } else {
    length.classList.remove("correct");
    length.classList.add("wrong");
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
