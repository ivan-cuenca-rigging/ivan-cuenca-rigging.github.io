var toggle = document.querySelector('.color-theme-container');
var isDarkMode = localStorage.getItem('isDarkMode') === 'true';

if (isDarkMode) {
    toggle.classList.add('active');
    switchTheme();
}

toggle.onclick = function() {
    toggle.classList.toggle('active');
    isDarkMode = toggle.classList.contains('active');
    localStorage.setItem('isDarkMode', isDarkMode);

    switchTheme();
}

function switchTheme() {
    var rootStyles = getComputedStyle(document.documentElement);
    var primary_color = rootStyles.getPropertyValue('--primary-color');
    var secondary_color = rootStyles.getPropertyValue('--secondary-color');

    document.documentElement.style.setProperty('--primary-color', secondary_color);
    document.documentElement.style.setProperty('--secondary-color', primary_color);
}
