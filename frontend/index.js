const currentUserTime = () => {
  const user = new Date().toLocaleTimeString();
  let userDate = document.getElementById("local-date");
  userDate.innerHTML = user;
};
currentUserTime();

const kennedySpaceCentreTime = () => {
  const kennedyTime = new Date().toLocaleTimeString("en-GB", {
    timeZone: "EST",
  });
  let kennedyDate = document.getElementById("kennedy-space-date");
  kennedyDate.innerHTML = kennedyTime;
};

kennedySpaceCentreTime();

const timeZoneDifference = () => {
  const usersUTCOffsetHours = new Date().getTimezoneOffset() / 60;
  const totalTimeZoneOffset = usersUTCOffsetHours + 5;

  const offset = document.createTextNode(
    `${totalTimeZoneOffset} hours ahead of the Kennedy Space Centre`
  );

  document.getElementById("difference").append(offset);
};

timeZoneDifference();

const solDays = document.getElementById("sol-days");
const earthDayMs = 86400000;
const solDayMs = 88775240;
const convertToSol = solDayMs / earthDayMs;

const calcualteSol = () => {
  const curiosityLandingDateMs =
    Date.now() - new Date(2012, 7, 6, 5, 17, 57).getTime();

  const earthDaySinceLanding = curiosityLandingDateMs / earthDayMs;

  const sol = Math.round(earthDaySinceLanding / convertToSol);

  solDays.innerHTML = sol;
};
calcualteSol();
