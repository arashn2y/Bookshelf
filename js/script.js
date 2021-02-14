const menuBar = document.getElementById('menuBar');
const overlay = document.getElementById('overlay');
menuBar.addEventListener('click', () => {
  menuBar.classList.toggle("change");
  overlay.classList.toggle("overlay-slide-left");
})