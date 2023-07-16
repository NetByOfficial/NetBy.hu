

document.addEventListener("DOMContentLoaded", () => {
  // Méhecske elemek létrehozása és elhelyezése a képernyőn
  for (let i = 0; i < 5; i++) {
    const bee = document.createElement("div");
    bee.classList.add("bee");
    document.body.appendChild(bee);
    
  }
  

  // Méhecskék mozgatása véletlenszerűen
  const bees = document.querySelectorAll(".bee");
  bees.forEach(bee => {
    setInterval(() => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      bee.style.transform = `translate(${x}px, ${y}px)`;
    }, 2000);
  });
});

// Méhecskék mozgatása a növény felé
function moveBeesToPlant() {
  const plant = document.querySelector(".plant");
  const bees = document.querySelectorAll(".bee");
  bees.forEach(bee => {
    let x = plant.offsetLeft - bee.offsetLeft;
    let y = plant.offsetTop - bee.offsetTop;
    let distance = Math.sqrt(x * x + y * y);
    let speed = 45;
    let time = distance / speed;
    bee.style.transition = `transform ${time}s linear`;
    bee.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// Méhecskék eltávolítása a növénytől és játék vége
function removePlantAndBees() {
  const plant = document.querySelector(".plant");
  plant.remove();
}

// Növény öntözése
function waterPlant() {
  const plant = document.querySelector(".plant");
  plant.classList.add("watered");
  
  // Indítjuk a méhecskék mozgását a növény felé
  moveBeesToPlant();

  // Ellenőrizzük, hogy ütköznek-e a méhecskék a növénnyel
  setInterval(() => {
    const plant = document.querySelector(".plant");
    const bees = document.querySelectorAll(".bee");
    bees.forEach(bee => {
      if (isColliding(bee, plant)) {
        removePlantAndBees();
      }
    });
  }, 500);
}

// Ellenőrzi, hogy az elemek ütköznek-e egymással
function isColliding(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}


