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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Seoul Korea",
      location: "Seoul, South Korea",
      dedicated: "1985, December, 15",
      area: 28057,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg"
    },
    {
      templeName: "Sapporo Japan",
      location: "Sapporo, Japan",
      dedicated: "2016, August, 21",
      area: 48480,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
    },
    {
      templeName: "Santo Domingo Dominican Republic",
      location: "Santo Domingo, Dominican Republic",
      dedicated: "2000, September, 17",
      area: 67000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santo-domingo-dominican-republic/400x250/santo-domingo-dominican-republic-temple-lds-761308-wallpaper.jpg"
    }
  ];


function displayTemples(filter) {
    const container = document.getElementById("filtered-temples");
    container.innerHTML = '';

    let filteredTemples = temples;
    if (filter === "Old") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    } else if (filter === "New") {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    } else if (filter === "Large") {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === "Small") {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayTemples("Home");
})

document.getElementById("nav-old").addEventListener("click", () => displayTemples("Old"));
document.getElementById("nav-new").addEventListener("click", () => displayTemples("New"));
document.getElementById("nav-large").addEventListener("click", () => displayTemples("Large"));
document.getElementById("nav-small").addEventListener("click", () => displayTemples("Small"));
document.getElementById("nav-home").addEventListener("click", () => displayTemples("Home"));
