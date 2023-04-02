const currentLocation = location.pathname;
const menuItems = document.querySelectorAll("nav a");

menuItems.forEach(item => {
  if (item.getAttribute("href").indexOf(currentLocation) !== -1) {
    item.classList.add("active");
  }
});
