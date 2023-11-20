const plants = [
  {
    id: 1,
    name: "Paradicsom",
    type: "Zöldség",
    daysToHarvest: 90,
    image: "images/tomato.jpg",
    description: "A paradicsom az egyik legelterjedtebb zöldségfajta a világon."
  },
  {
    id: 2,
    name: "Uborka",
    type: "Zöldség",
    daysToHarvest: 60,
    image: "images/cucumber.jpg",
    description: "Az uborka az egyik legnépszerűbb alapanyag salátákban és hideg levesekben."
  },
  {
    id: 3,
    name: "Bazsalikom",
    type: "Fűszer",
    daysToHarvest: 30,
    image: "images/basil.jpg",
    description: "A bazsalikom friss illata és íze miatt kiválóan alkalmas a konyhában való használatra."
  },
  {
    id: 4,
    name: "Menta",
    type: "Fűszer",
    daysToHarvest: 45,
    image: "images/mint.jpg",
    description: "A menta kellemes illata és íze miatt gyakran használják frissítő italok, saláták és sütemények készítéséhez."
  }
];

function getPlantById(id) {
  return plants.find((plant) => plant.id === id);
}

function showPlantInfo(plant, event) {
  const plantName = document.createElement("h3");
  plantName.textContent = plant.name;

  const plantDaysToHarvest = document.createElement("p");
  plantDaysToHarvest.textContent = `Betakarítás ${plant.daysToHarvest} nap múlva`;

  const plantDescription = document.createElement("p");
  plantDescription.textContent = plant.description;

  const plantImage = document.createElement("img");
  plantImage.src = plant.image;

  const plantInfoContainer = document.createElement("div");
  plantInfoContainer.classList.add("plant-info");
  plantInfoContainer.appendChild(plantName);
  plantInfoContainer.appendChild(plantDaysToHarvest);
  plantInfoContainer.appendChild(plantDescription);
  plantInfoContainer.appendChild(plantImage);

  const body = document.querySelector("body");
  body.appendChild(plantInfoContainer);

  const x = event.clientX;
  const y = event.clientY;

  plantInfoContainer.style.left = x + "px";
  plantInfoContainer.style.top = y + "px";
}

const plantImages = document.querySelectorAll(".plant-image");
plantImages.forEach((plantImage) => {
  plantImage.addEventListener("mouseenter", (event) => {
    const plantId = Number(event.target.dataset.plantId);
    const plant = getPlantById(plantId);
    showPlantInfo(plant, event);
  });

  plantImage.addEventListener("mouseleave", () => {
    const plantInfo = document.querySelector(".plant-info");
    if (plantInfo) {
      plantInfo.remove();
    }
  });
});
