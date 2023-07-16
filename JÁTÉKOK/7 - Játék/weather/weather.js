const weatherContainer = document.getElementById("weather-container");
const weatherIcon = document.getElementById("weather-icon");

// Az elérhető időjárás állapotok
const weatherStatus = [
  { isRaining: true, iconClass: "fa-cloud-showers-heavy" },
  { isRaining: false, iconClass: "fa-sun" },
  { isRaining: false, iconClass: "fa-cloud" },
];

// Az aktuális időjárás állapot
let currentWeatherIndex = 0;

function toggleWeather() {
  currentWeatherIndex = Math.floor(Math.random() * weatherStatus.length);
  const currentWeather = weatherStatus[currentWeatherIndex];
  if (currentWeather.isRaining) {
    weatherContainer.classList.add("rain");
  } else {
    weatherContainer.classList.remove("rain");
  }
  weatherIcon.classList.remove("fa-sun", "fa-cloud", "fa-cloud-showers-heavy");
  weatherIcon.classList.add(currentWeather.iconClass);

  console.log(`Az időjárás most ${currentWeather.isRaining ? "esős" : "napos"}.`);
}

// Az időjárás időzített változtatása
setInterval(toggleWeather, 2400000); // 2400 másodperc = 40 perc

// Az időjárás gomb eseménykezelője
const weatherBtn = document.getElementById("weather-btn");
weatherBtn.addEventListener("click", toggleWeather);
