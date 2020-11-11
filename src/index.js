const user = new Date();
let userDate = document.getElementById("local-date");
userDate.innerHTML = user;

const kennedy = new Date();
let kennedyDate = document.getElementById("kennedy-space-date");
const date = kennedy.toLocaleString("en-GB", { timeZone: "EST" });
kennedyDate.innerHTML = date;

// get section by element id
// pass est time into the date constructor
// convert the time into hours
// // check again each other and print the hours
// const offset = document.getElementById("difference");
// const difference = new Date(date);
// let hours = difference.getTimezoneOffset() / 60;
// offset.innerHTML = difference;
