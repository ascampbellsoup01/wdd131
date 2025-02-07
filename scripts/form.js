const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productNameSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

document.querySelector('form').addEventListener('submit', (event) => {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', ++reviewCount);
});

const usefulFeatures = [
    'Durability', 'Ease of Use', 'Performance', 'Design'
];

const usefulFeaturesFieldset = document.getElementById('usefulFeatures');

usefulFeatures.forEach(feature => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = feature.toLowerCase().replace(/ /g, '-');
    checkbox.name = 'usefulFeatures';
    checkbox.value = feature;

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = feature;

    usefulFeaturesFieldset.appendChild(checkbox);
    usefulFeaturesFieldset.appendChild(label);
});

const currentYear = new Date().getFullYear();

document.getElementById('currentyear').innerText = currentYear;

const lastModified = document.lastModified;

document.getElementById('lastModified').innerText = `Last Modified: ${lastModified}`;
