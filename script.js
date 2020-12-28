const checkboxElement = document.querySelector('input[type=checkbox]');
checkboxElement.addEventListener('change', toggleTheme);
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function imageColor(color) {
    image1.src = `img/undraw_building_websites_${color}.svg`;
    image2.src = `img/undraw_teamwork_${color}.svg`;
    image3.src = `img/undraw_playing_fetch_${color}.svg`;
}


function toggleDarkLightMode(isDark) {
    isDark ? nav.style.backgroundColor = 'rgb(0 0 0 / 50%)' : nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    isDark ? textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)' : textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    isDark ? toggleIcon.firstElementChild.textContent = 'Dark Mode' : toggleIcon.firstElementChild.textContent = 'Light Mode'
    isDark ? toggleIcon.firstElementChild.nextElementSibling.classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.firstElementChild.nextElementSibling.classList.replace('fa-moon', 'fa-sun')
    isDark ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light')
    isDark ? imageColor('dark') : imageColor('light');
}

function toggleTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDarkLightMode(false);
    }
}

const themeSession = localStorage.getItem('theme');
if (themeSession === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleDarkLightMode(true);
    checkboxElement.checked = true;
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleDarkLightMode(false);
    checkboxElement.checked = false;
}