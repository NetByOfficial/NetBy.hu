let currentSeason = 0;
let season = "Tavasz";

const seasonBtn = document.querySelector("#season-btn");

const changeSeason = () => {
  const seasons = ["Tavasz", "Nyár", "Ősz", "Tél"];
  const index = seasons.indexOf(season);
  season = index === seasons.length - 1 ? seasons[0] : seasons[index + 1];
  updateSeason();
  displaySeason();
  
};

const updateSeason = () => {
  const seasonElement = document.querySelector("#season");
  seasonElement.className = "";
  seasonElement.classList.add(season);
  
};

function displaySeason() {
  const season_displayer = document.querySelector(".season-diplay");
  season_displayer.textContent = `Jelenlegi évszak: ${season} `;
  
}

function startTimer() {
  changeSeason();
  console.log(`Évszak váltva! ${season}`);
  setInterval(changeSeason, 600000); //  600000ms = 10 perc)
}

