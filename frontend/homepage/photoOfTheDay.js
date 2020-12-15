// home page display nasas astronomy picture of the day with the explanation that comes with the picture
// set up api key
// request to get the picture
// insert the picture into the element
// retreive the explanation that comes with the picture
// insert into an element on the page under the picture
const configParams = require("./.config.js");
const fetch = require("node-fetch");

function fetchNasa(req, res, next) {
  const url = "https://api.nasa.gov/planetary/apod/";
  const key = configParams.apikey;
  const fullURL = `${url}?api_key=${key}`;

  return fetch(fullURL)
    .then((response) => nasaRes.json())
    .then((data) => console.log(nasaRes))
    .catch((error) => {
      console.log(error);
    });
}

fetchNasa();
