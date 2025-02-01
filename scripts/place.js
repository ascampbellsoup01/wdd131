const currentYear = new Date().getFullYear();

document.getElementById('currentyear').innerText = currentYear;

const lastModified = document.lastModified;

document.getElementById('lastModified').innerText = `Last Modified: ${lastModified}`;

const temperature = 7;
const windSpeed = 5;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

function displayWindChill() {
    let windChillFactor;
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillFactor = calculateWindChill(temperature, windSpeed);
        windChillFactor = windChillFactor.toFixed(2);
    } else {
        windChillFactor = "N/A";
    }
    document.querySelector('.weather').insertAdjacentHTML('beforeend', `<p>Windchill: ${windChillFactor}&deg; C</p>`);
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    displayWindChill();
});
