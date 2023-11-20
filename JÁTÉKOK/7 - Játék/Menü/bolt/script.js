// Felhasználó kattintása a "Vásárlás" gombra
document.querySelectorAll("#products li button").forEach((button) => {
	button.addEventListener("click", (event) => {
		// Az aktuális termék adatainak megszerzése
		const product = {
			name: event.target.parentNode.querySelector("h3").textContent,
			price: event.target.parentNode.querySelector("p").textContent,
			image: event.target.parentNode.querySelector("img").src,
		};

		// A meglévő kosár adatok lekérése a localstorage-ból
		let cart = JSON.parse(localStorage.getItem("cart")) || [];

		// A termék hozzáadása a kosárhoz
		cart.push(product);

		// A kosár adatok mentése a localstorage-ba
		localStorage.setItem("cart", JSON.stringify(cart));

		// Felhasználó értesítése a sikeres hozzáadásról
		alert("A termék hozzáadva a kosárhoz!");

		// A gomb letiltása
		event.target.disabled = true;
	});
});
