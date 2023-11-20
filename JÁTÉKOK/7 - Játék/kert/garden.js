const gardenContainer = document.querySelector('.garden-container');
const gardenDiv = document.querySelector('#garden');
const form = document.querySelector('form');
const widthInput = document.querySelector('#garden-width');
const heightInput = document.querySelector('#garden-height');
const colorInput = document.querySelector('#garden-color');
let gardenData = {};

const colors = ['white', 'lightgreen', 'pink', 'lightblue'];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const width = widthInput.value;
  const height = heightInput.value;
  const color = colorInput.value;
  if (width <= 0 || height <= 0) {
    alert('A kert méreteinek 1-nél nagyobbnak kell lenniük!');
    return;
  }
  if (width > 10 || height > 10) {
    alert('A kert méretei nem lehetnek nagyobbak, mint 10!');
    return;
  }
  createGarden(width, height, color);
});

function createGarden(width, height, color) {
  gardenDiv.innerHTML = '';
  gardenContainer.style.backgroundColor = color;
  gardenDiv.style.gridTemplateRows = `repeat(${height}, 1fr)`;
  for (let i = 0; i < width * height; i++) {
    const square = document.createElement('div');
    square.classList.add('garden-square');
    gardenDiv.appendChild(square);
  }
}

    class PlantSelector {
        constructor(gardenDiv) {
          this.selectedPlant = null;
          this.gardenDiv = gardenDiv;
          this.gardenDiv.addEventListener('click', (e) => this.selectPlant(e));
        }
      
        selectPlant(e) {
          const plantDiv = e.target.closest('.plant');
          if (!plantDiv) return;
          if (this.selectedPlant) {
            this.selectedPlant.classList.remove('selected');
          }
          plantDiv.classList.add('selected');
          this.selectedPlant = plantDiv;
        }
      
        getSelectedPlant() {
          return this.selectedPlant;
        }
      
        clearSelection() {
          if (this.selectedPlant) {
            this.selectedPlant.classList.remove('selected');
            this.selectedPlant = null;
          }
        }
      }
      class Garden {
        constructor(gardenDiv) {
          this.gardenDiv = gardenDiv;
          this.plants = [];
          this.plantSelector = new PlantSelector(gardenDiv);
          this.gardenDiv.addEventListener('click', (e) => this.handlePlantClick(e));
        }
      
        createPlant(plantType) {
          const plant = new Plant(plantType);
          this.plants.push(plant);
          this.gardenDiv.appendChild(plant.getElement());
        }
      
        handlePlantClick(e) {
          const cellDiv = e.target.closest('.cell');
          if (!cellDiv) return;
          const selectedPlant = this.plantSelector.getSelectedPlant();
          if (!selectedPlant) return;
          const cellIndex = [...this.gardenDiv.children].indexOf(cellDiv);
          const plantIndex = this.plants.indexOf(selectedPlant.plant);
          if (plantIndex !== -1) {
            selectedPlant.move(cellIndex);
            this.plants.splice(plantIndex, 1);
            this.plants.push(selectedPlant.plant);
            this.plantSelector.clearSelection();
          }
        }
      }
      const colorSelect = document.querySelector('#garden-color');
      
      
      colors.forEach((color) => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
      });
      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const width = widthInput.value;
        const height = heightInput.value;
        const color = colorSelect.value;
        
        if (width <= 0 || height <= 0) {
        alert('A kert méreteinek 1-nél nagyobbnak kell lenniük!');
        return;
        }
        
        if (width > 10 || height > 10) {
        alert('A kert méretei nem lehetnek nagyobbak, mint 10!');
        return;
        }
        
        createGarden(width, height, color);
        });
        
        function createGarden(width, height, color) {
        gardenDiv.innerHTML = '';
        gardenDiv.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        
        for (let i = 1; i <= width * height; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${i}`;
        cell.style.backgroundColor = color;
        cell.addEventListener('mouseenter', () => {
        const plantName = plant.getName();
        const plantAge = plant.getAge();
        const plantInfo = document.createElement('div');
        plantInfo.classList.add('plant-info');
        plantInfo.textContent = `${plantName} (${plantAge} nappal régebbi növény)`;
        cell.appendChild(plantInfo);
        });
        cell.addEventListener('mouseleave', () => {
        const plantInfo = document.querySelector('.plant-info');
        cell.removeChild(plantInfo);
        });
        gardenDiv.appendChild(cell);
        }
        }
        
        createGarden(5, 5, 'white');


        colors.forEach((color) => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
        });
        
        form.addEventListener('submit', (e) => {
        e.preventDefault();
        const width = widthInput.value;
        const height = heightInput.value;
        const color = colorSelect.value;
        if (width <= 0 || height <= 0) {
        alert('A kert méreteinek 1-nél nagyobbnak kell lenniük!');
        return;
        }
        if (width > 10 || height > 10) {
        alert('A kert méretei nem lehetnek nagyobbak, mint 10!');
        return;
        }
        createGarden(width, height, color);
        });
        
        function createGarden(width, height, color) {
        gardenDiv.innerHTML = '';
        gardenDiv.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        gardenDiv.style.backgroundColor = color;
        for (let i = 0; i < width * height; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${i}`;
        cell.addEventListener('mouseover', () => {
        showPlantInfo(cell.id);
        });
        cell.addEventListener('mouseout', () => {
        hidePlantInfo();
        });
        gardenDiv.appendChild(cell);
        }
        }
        
        function showPlantInfo(cellId) {
        const cell = document.querySelector(`#${cellId}`);
        const cellRect = cell.getBoundingClientRect();
        const plantName = cell.dataset.plantName;
        const plantAge = cell.dataset.plantAge;
        const plantInfo = document.createElement('div');
        plantInfo.classList.add('plant-info');
        plantInfo.style.top = `${cellRect.top}px`;
        plantInfo.style.left = `${cellRect.left + cellRect.width}px`;
        plantInfo.innerHTML = `<p>Növény neve: ${plantName}</p> <p>Kor: ${plantAge} nap</p>`;
        gardenContainer.appendChild(plantInfo);
        }
        
        function hidePlantInfo() {
        const plantInfo = document.querySelector('.plant-info');
        if (plantInfo) {
        gardenContainer.removeChild(plantInfo);
        }
        }
        
        class Plant {
        constructor(name, daysToHarvest) {
        this.name = name;
        this.daysToHarvest = daysToHarvest;
        }
        
        getDaysToHarvest() {
        return this.daysToHarvest;
        }
        
        getPlantName() {
        return this.name;
        }
        
        grow() {
        this.age += 1;
        if (this.age >= this.daysToHarvest) {
        this.isMature = true;
        }
        }
        
        isMature() {
        return this.isMature;
        }
        
        canHarvest() {
        return this.isMature;
        }
        
        harvest() {
        if (this.isMature) {
        this.isHarvested = true;
        return true;
        }
        return false;
        }
        }
        
        const plants = [
        new Plant('Paradicsom', 5),
        new Plant('Répa', 3),
        new Plant('Káposzta', 7),
        new Plant('Uborka', 4),
        ]
        gardenDiv.innerHTML = "";
        gardenDiv.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        gardenDiv.style.backgroundColor = colorSelect.value;

        for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
        const plot = document.createElement('div');
        plot.classList.add('plot');
        plot.dataset.status = 'empty';
        plot.addEventListener('click', handlePlotClick);
        gardenDiv.appendChild(plot);
        }
        }
        

        function handlePlotClick(e) {
        const plot = e.target;
        const status = plot.dataset.status;
        if (status === 'empty') {
        const plantType = prompt('Milyen növényt szeretnél ültetni?');
        if (!plantType) {
        return;
        }
        plot.style.backgroundImage = `url(img/${plantType}.png)`;
        plot.dataset.status = 'planted';
        } else if (status === 'planted') {
        const action = confirm('Biztosan betakarítod a növényt?');
        if (action) {
        plot.style.backgroundImage = '';
        plot.dataset.status = 'empty';
        }
        }
        }

        const saveButton = document.querySelector('#save-button');

        saveButton.addEventListener('click', () => {
          const width = widthInput.value;
          const height = heightInput.value;
          const color = colorSelect.value;
          
          if (width <= 0 || height <= 0) {
            alert('A kert méreteinek 1-nél nagyobbnak kell lenniük!');
            return;
          }
          if (width > 10 || height > 10) {
            alert('A kert méretei nem lehetnek nagyobbak, mint 10!');
            return;
          }
          
          gardenData = {
            width,
            height,
            color
          };
          
          alert('Az adatok el lettek mentve!');
        });

