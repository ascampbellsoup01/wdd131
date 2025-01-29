// date and last modified
const currentYear = new Date().getFullYear();

document.getElementById('currentyear').innerText = currentYear;

const lastModified = document.lastModified;

document.getElementById('lastModified').innerText = `Last Modified: ${lastModified}`;

// hamburger button
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = hamburger.textContent === '☰' ? '✖' : '☰';
});