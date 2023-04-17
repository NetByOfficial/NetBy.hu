window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
      
    setTimeout(() => loader.classList.add("loader--hidden"), 2500);
    
  
    loader.addEventListener("transitionend", () => {
    });
  });