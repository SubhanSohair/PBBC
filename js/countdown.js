// Countdown Timer
const targetDate = new Date('November 19, 2025 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(updateCountdown, 1000);
