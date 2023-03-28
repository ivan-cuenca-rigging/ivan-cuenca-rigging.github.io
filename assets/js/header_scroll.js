var header = document.querySelector('header');
var main = document.querySelector('main');

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  // La altura del encabezado se ajusta al 50% de su altura original al hacer scroll
  header.style.height = Math.max(5, 10 - scrollPosition * 0.1) + '%';

  // La altura del resto del contenido se ajusta en consecuencia
  main.style.height = Math.max(85, 90 + scrollPosition * 0.1) + '%';
});
