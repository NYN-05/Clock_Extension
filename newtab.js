// Function to update clock & greeting
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);

    updateGreeting(hours);
}

// Function to update greeting based on time of day
function updateGreeting(hours) {
    let greetingText = "";

    if (hours >= 5 && hours < 12) {
        greetingText = "Good Morning! ☀️";
    } else if (hours >= 12 && hours < 17) {
        greetingText = "Good Afternoon! 🌤️";
    } else if (hours >= 17 && hours < 21) {
        greetingText = "Good Evening! 🌆";
    } else {
        greetingText = "Good Night! 🌙";
    }

    document.getElementById("greeting").textContent = greetingText;
}

// Search functionality
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let query = document.getElementById("searchInput").value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});

// Fetch weather
async function fetchWeather() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiKey = "YOUR_API_KEY";
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        let data = await response.json();
        document.getElementById("weather").textContent = `🌡️ ${data.main.temp}°C | ${data.weather[0].main}`;
    });
}

// Dark Mode Toggle (Press "D")
document.addEventListener("keydown", (e) => {
    if (e.key === "d") {
        document.body.classList.toggle("dark-mode");
    }
});

// Init
setInterval(updateClock, 1000);
updateClock();
fetchWeather();
