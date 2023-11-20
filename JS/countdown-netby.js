const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const IskolakezdesTime = new Date(`October 18 ${currentYear} 11:00:00`);

// Update countdown time
function updateCountdown() {
	const currentTime = new Date();
	const diff = IskolakezdesTime - currentTime;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	days.innerHTML = d;
	hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = IskolakezdesTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

    if (d === 0 && h === 0 && m === 0 && s === 0) {
        clearInterval(countdownInterval);
        const expiredLink = document.getElementById('expired-link');
		const countdownLink = document.getElementById('countdown');
		countdownLink.style.display = 'none';
        expiredLink.style.display = 'block';
    }
    if (d === -1) {
        clearInterval(countdownInterval);
        const expiredLink = document.getElementById('expired-link');
		const countdownLink = document.getElementById('countdown');
		const countdown_title = document.getElementById('countdown-title');
		const netby_ai = document.getElementById('netby-ai');
		netby_ai.style.display = 'block';
		countdown_title.style.display = 'none';
		countdownLink.style.display = 'none';
        expiredLink.style.display = 'block';
    }
}

// ...

const countdownInterval = setInterval(updateCountdown, 1000);

setInterval(updateCountdown, 1000);
