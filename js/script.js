// Define the selectors
const menuBar = document.querySelector('#menuBar');
const overlay = document.querySelector('#overlay');
const lis = overlay.querySelectorAll('ul li');

// Define a function to add or remove a class to show or hide the slide down
const hideAndShow = () => {
  menuBar.classList.toggle("change");
  overlay.classList.toggle("overlay-slide-up");
  overlay.classList.toggle("overlay-slide-down");
};

// Add event listeners to all selectors
menuBar.addEventListener('click', hideAndShow);
lis.forEach(li => {
  li.addEventListener('click', hideAndShow);
})
