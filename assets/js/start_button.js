var startButton = document.querySelector('.start-button');

function handleScroll() {
  var scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition > 500) {
    startButton.classList.add('active');
  } else {
    startButton.classList.remove('active');
  }
}

window.addEventListener('scroll', handleScroll);
