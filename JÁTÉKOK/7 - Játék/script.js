
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const body = document.querySelector('body');

if (hour >= 20 || hour < 6) {
  body.classList.add('night');
} else {
  body.classList.add('day');
}
  
}, 2000); // 1000 ms = 1 sec



// Define variables
let cells = [];
let currentPlant = null;
let betakaritando = false;

// Initialize game board
let gameboard = document.querySelector(".gameboard");
for (let i = 0; i < 16; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell", "empty");
  cell.id = `cell-${i}`; // Adjon hozzá az elemekhez egyedi ID-t
  cell.addEventListener("click", plantSeed);
  gameboard.appendChild(cell);
  cells.push(cell);

}


function betakaritas() {
  betakaritando = true
}




// Plant seed function
function plantSeed() {
  if (!this.classList.contains("empty")) {
    return;
    
  }

  // Create new plant
  const plant = document.createElement("div");
  plant.classList.add("plant", "stage-1");
  this.appendChild(plant);

  // Update cell class
  this.classList.remove("empty");

  // Set current plant
  currentPlant = plant;
   betakaritas()
  // Animate growth
  setTimeout(growPlant, 5000);
}

// Grow plant function
function growPlant() {
  // Check if current plant exists
  if (!currentPlant) {
    return;
  }

  // Update plant class
  currentPlant.classList.remove("stage-1");
  currentPlant.classList.add("stage-2");

  // Animate growth
  setTimeout(growPlant, 3000);
}

// Harvest plant function
function harvestPlant() {
  // Check if current plant exists
  if (!currentPlant) {
    return;
  }

  // Update plant class
  currentPlant.classList.remove("stage-2");
  currentPlant.classList.add("stage-3");
betakaritando = true
  // Reset current plant
  currentPlant = null;

  // Update cell class
  const cell = this.closest(".cell");
  cell.classList.add("empty");

  // Show message
  showMessage("Növény betakarítva!");
    
  localStorage.setItem(gameState)
}

// Show message function
function showMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 3000);
}

// Add event listener to harvest button
const harvestButton = document.querySelector("#harvest-button");
if(betakaritando)
{
   harvestButton.addEventListener("click", harvestPlant); 
}


// Víz gomb kiválasztása
const waterButton = document.getElementById('water-button');

// Víz gomb eseménykezelője
waterButton.addEventListener('click', () => {
  // Minden növény öntözése
  for (let i = 0; i < plants.length; i++) {
    const plant = plants[i];
    plant.water();
    grow();
    Plant.prototype.water = function () {
      if (this.waterLevel < this.maxWaterLevel) {
        this.waterLevel++;
        this.update();
      }
    };
    
    Plant.prototype.update = function () {
      // Update water level text
      document.querySelector("#water-level").textContent = this.waterLevel;
      // Update plant and flowers image
      document.querySelector("img").src = `plant-${this.waterLevel}.png`;
      if (this.waterLevel === this.maxWaterLevel) {
        this.flowers.classList.add("flowers-bloom");
      }
    };
  }
});



// Növény osztály
class Plant {
    constructor(name, waterLevel = 0) {
      this.name = name;
      this.waterLevel = waterLevel;
    }
  
    grow() {
      this.waterLevel += 1;
    }
  
    isMature() {
      return this.waterLevel >= 5;
    }
  
    // Öntözés funkció hozzáadása
    water() {
      this.waterLevel += 2;
    }
  }
  
  // Növények létrehozása
  const tomatoPlant = new Plant('paradicsom');
  const basilPlant = new Plant('bazsalikom');
  const cucumberPlant = new Plant('uborka');
  
  // Növények tömbje
  let plants = [tomatoPlant, basilPlant, cucumberPlant];
  
  // Víz gomb kiválasztása
  
  // Víz gomb eseménykezelője
  waterButton.addEventListener('click', () => {
    // Minden növény öntözése
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      plant.water();
    }
  });
  function adatmentes() {
    localStorage.clear()
  const gameState = {
    Cells: cells,
    CurrentPlant: currentPlant,
    Betakaritando: betakaritando,
    GameBoard: gameboard,
    PlantSeed: plantSeed,
    Plants: plants,
   };
   
   localStorage.setItem("gameState", JSON.stringify(gameState));
   i = 0; i < 16; i++
   let cell = document.querySelectorAll("#cells div");
   const cellSaver = {
     id: `${i}`, // Csak az ID-t tároljuk el
     Cell: cell,

   };
   console.log(cell)
   localStorage.setItem(`cell`, JSON.stringify(cellSaver));
   
   
  }
  //setInterval(adatmentes, 5000)// 5000 ms = 5s

  // Játék állapotának betöltése a LocalStorage-ból
function adatbetoltes() {
  const savedState = localStorage.getItem("gameState");
  const SavedState_Cell = localStorage.getItem("cell-${i}");

  if (savedState) {
    const gameState = JSON.parse(savedState);
    cells         = gameState.Cells;
    currentPlant   = gameState.CurrentPlant;
    betakaritando  = gameState.Betakaritando;
    gameboard     = gameState.GameBoard;
    plantSeed      = gameState.PlantSeed;
    plants         = gameState.Plants;
  }
  if (SavedState_Cell) {
    const SavedState_Cell = JSON.parse("cellSaver");
    cell = SavedState_Cell.id;
    cell = SavedState_Cell.Cell;
    
  }
}
