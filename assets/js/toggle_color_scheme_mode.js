var toggle = document.querySelector('.dark-container');

toggle.onclick = function() {
  toggle.classList.toggle('active');
  
  var rootStyles = getComputedStyle(document.documentElement);
  var primary_color = rootStyles.getPropertyValue('--primary-color');
  var secondary_color = rootStyles.getPropertyValue('--secondary-color');
  
  document.documentElement.style.setProperty('--primary-color', secondary_color);
  document.documentElement.style.setProperty('--secondary-color', primary_color);
}
