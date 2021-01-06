const weather_api = {
  key: "7b3f0a96c0671d6e0715118a30d5c333",
  url: "https://api.openweathermap.org/data/2.5/",
  lang: "fr"
}

const beer_api = {
  url: "https://api.punkapi.com/v2/beers/random"
}


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


//press enter key to search
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
    
  }
}


function getResults(city) {

  fetch(`${weather_api.url}weather?q=${city}&units=metric&APPID=${weather_api.key}&units=metric&lang=${weather_api.lang}`)

    .then(weather => {
      return weather.json();
    }).then(displayResults).then(getBeer).then(getJulQuote)
    .catch(() => {
      alert("Veuillez entrer un nom de ville correct 😒");
    });

}


function getBeer() {
  fetch(`${beer_api.url}`)
    .then((res) => res.json())
    .then((beer) => {
      beer_name = beer[0].name;
    })
    .then(displayBeer)
    .catch((err) => console.error(err));
}

function getJulQuote() {
  const quotes = [
    'Oublie-la, c\'est une puta, elle t\'a quitté',
    'La moto, elle fait "brm, brm, brm, brm", toujours là, demande à Tchyco',
    'J\'fuck les folles qui parlent de moi sur l\'net',
    'J\'suis sous potion là, j\'tire deux-trois sur l\'pét',
    'Tu l\'aimais et ton cœur elle l\'a cassé tu t\'es dis: \"c\'est pas possible\"',
    'Dédicace aux potos, en cellule ou dans la coursive',
    'J\'suis pas Tony, j\'suis pas Sosa, j\'reste au quartier j\'fais pas l\'grossiste',
    'J\'préfère une trompette, qu\'un mec qui fais l\'vaillant pour rien',
    'J\'suis énervé parce que c\'qu\'ils disent des fois c\'est faux',
    'Sors le cross volé, cabre même si la roue est voilée'
    
  ]
  
    var randomNumber = Math.floor(Math.random() * (quotes.length))
    document.getElementById('jul_quote').innerHTML = quotes[randomNumber]

    var randomNumber2 = Math.floor(Math.random() * (quotes.length))
    document.getElementById('jul_quote2').innerHTML = quotes[randomNumber2]
  
}

function displayResults(weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_condition = document.querySelector('.current .weather');
  weather_condition.innerText = weather.weather[0].description;

  let min_max_temp = document.querySelector('.min_max_temp');
  min_max_temp.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

  backgroundChange(weather)

}

function displayBeer() {
  let beer = document.querySelector('.beer .beer_type .beer_name');
  beer.innerText = beer_name;

}


function dateBuilder(d) {
  let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
  let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function backgroundChange(weather) {
  let weather_type = weather.weather[0].main;

  if (weather_type == "Clear") {
    document.body.style.backgroundImage = "url(img/clear.jpg)";
  }
  else if (weather_type == "Clouds") {
    document.body.style.backgroundImage = "url(img/clouds.jpg)";
  }
  else if (weather_type == "Snow") {
    document.body.style.backgroundImage = "url(img/snow.jpg)";
  }
  else if (weather_type == "Drizzle") {
    document.body.style.backgroundImage = "url(img/drizzle.jpg)";
  }
  else if (weather_type == "Thunderstorm") {
    document.body.style.backgroundImage = "url(img/thunderstorm.jpg)";
  }
  else if (weather_type == "Athmosphere") {
    document.body.style.backgroundImage = "url(img/athmosphere.jpg)";
  }
  else if (weather_type == "Rain") {
    document.body.style.backgroundImage = "url(img/rain.jpg)";
  }
  else {
    document.body.style.backgroundImage = "url(img/clear.jpg)";
  }
}


  var time;

  function loaderFunction() {
    time = setTimeout(showPage, 1030);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block";
  }



// Get the modal
var modal = document.getElementById("IMACOrganise");

// Get the button that opens the modal
var btn = document.getElementById("lesigne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




