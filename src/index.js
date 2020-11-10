const user = new Date();
let userDate = document.getElementById("local-date");
userDate.innerHTML = user;

const kennedy = new Date();
let kennedyDate = document.getElementById("kennedy-space-date");
const date = kennedy.toLocaleString("en-GB", { timeZone: "EST" });
kennedyDate.innerHTML = date;
