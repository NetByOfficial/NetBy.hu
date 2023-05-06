// A weather.js fájl, amely adatokat szolgáltat a növénytermesztő játékhoz

// Létrehozunk egy objektumot, amelyben tároljuk az időjárás adatait
const weather = {
  temperature: 25, // Hőmérséklet Celsius fokban
  humidity: 60, // Páratartalom százalékban
  windSpeed: 10 // Szélsebesség kilométer per órában
};

// Az időjárás adatainak lekérése a megadott API-ból
function fetchWeatherData(apiKey, latitude, longitude) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      weather.temperature = Math.round(data.main.temp - 273.15); // Az API által adott hőmérséklet átváltása Celsius fokba és kerekítése
      weather.humidity = data.main.humidity;
      weather.windSpeed = data.wind.speed;
    })
    .catch(error => console.error(error));
}

// Az időjárás adatainak lekérése az API-ból 10 percenként
setInterval(() => {
  const apiKey = 'your-api-key'; // Az OpenWeatherMap API kulcsa
  const latitude = 'your-latitude'; // A település szélességi foka
  const longitude = 'your-longitude'; // A település hosszúsági foka

  fetchWeatherData(apiKey, latitude, longitude);
}, 600000); // 10 perc = 600000 mill másodperc

// Az objektum exportálása, hogy elérhető legyen a növénytermesztő játékban
export default weather;
