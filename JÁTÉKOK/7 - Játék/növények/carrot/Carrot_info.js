function createPlant(id, name) {
    const plant = {
      id: 1,
      name: Répa,
      age: 0,
      water: function() {
        this.age++;
      },
      harvest: function() {
        console.log(`A ${this.name} betakarítva!`);
      }
    };
  
    showPlantInfo(plant);
  
    return plant;
  }
  