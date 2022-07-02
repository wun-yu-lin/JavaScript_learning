//getAPI;

async function getJoke() {
  let data = await fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist"
  ); //API url
  console.log(data);
  let jsonData = await data.json(); //將data化為json格式
  console.log(jsonData);
}
// getJoke();

//connect to Wheater API
let myKey = "8f3c00148277c59e42ad7bd02cff42a9";
let city = "Taichung";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;
async function getWheater() {
  let data = await fetch(url);
  let dataJ = await data.json();
  console.log(dataJ);
}

getWheater();
