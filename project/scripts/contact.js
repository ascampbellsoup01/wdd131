const currentYear = new Date().getFullYear();

document.getElementById('currentyear').innerText = currentYear;

const lastModified = document.lastModified;

document.getElementById('lastModified').innerText = `Last Modified: ${lastModified}`;

document.querySelector('form').addEventListener('submit', (event) => {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', ++reviewCount);
});