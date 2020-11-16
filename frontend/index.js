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

// A sol is slightly longer than an Earth day. It is approximately 24 hours, 39 minutes, 35 seconds long.
// earth day in milliseconds
// sol day in milliseconds
// date when sol landed on mars - 08/08/2012 time 05:17:57 - dont forget it is 0 indexed.
// divide sol day by earth day

const solDays = document.getElementById("sol-days");
const earthDayMilliseconds = 86400000;
const solDayMilliseconds = 88775240;
const convertToSol = solDayMilliseconds / earthDayMilliseconds;

// display the current sol of the curiosity rover
const calcualteSol = () => {
  // landing date and use method to get the miliseconds
  const curiosityLandingDateMilliseconds =
    Date.now() - new Date(2012, 7, 6, 5, 17, 57).getTime();
  // earth day since landing is sol millisecond / earth Day milliseconds = 1.02

  const earthDaySinceLanding =
    curiosityLandingDateMilliseconds / earthDayMilliseconds;
  // number of sols = divided by convert to sol (solday/earthday)

  const calculate = earthDaySinceLanding / convertToSol;
  const result = Math.round(calculate);
  solDays.innerHTML = result
};
calcualteSol();
