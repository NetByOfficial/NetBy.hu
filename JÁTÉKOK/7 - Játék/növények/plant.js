class Plant {
    constructor(name, growthRate, waterNeeded, lightNeeded, img) {
      this.name = name;
      this.growthRate = growthRate;
      this.waterNeeded = waterNeeded;
      this.lightNeeded = lightNeeded;
      this.img = img;
      this.age = 0;
      this.water = 0;
      this.light = 0;
      this.isHarvestable = false;
      this.isAlive = true;
    }
  
    grow() {
      if (this.isAlive) {
        this.age += this.growthRate;
        this.water += this.waterNeeded;
        this.light += this.lightNeeded;
  
        if (this.water >= 100 && this.light >= 100) {
          this.isHarvestable = true;
        }
  
        if (this.age >= 100) {
          this.isAlive = false;
        }
      }
    }
  }
  
  class TomatoPlant extends Plant {
    constructor() {
      super("Tomato Plant", 1, 5, 10, "https://via.placeholder.com/100x100?text=Tomato");
    }
  }
  
  class Sunflower extends Plant {
    constructor() {
      super("Sunflower", 0.5, 10, 5, "https://via.placeholder.com/100x100?text=Sunflower");
    }
  }
  
  class CarrotPlant extends Plant {
    constructor() {
      super("Carrot Plant", 0.7, 7, 7, "https://via.placeholder.com/100x100?text=Carrot");
    }
  }
  
  class Tulip extends Plant {
    constructor() {
      super("Tulip", 0.3, 5, 10, "https://via.placeholder.com/100x100?text=Tulip");
    }
  }
  