// Define the selectors
const menuBar = document.querySelector('#menuBar');
const overlay = document.querySelector('#overlay');
const nav1 = document.querySelector('#nav-1');
const nav2 = document.querySelector('#nav-2');
const nav3 = document.querySelector('#nav-3');
const nav4 = document.querySelector('#nav-4');
const nav5 = document.querySelector('#nav-5');

let navBar = false;

// Define a function to add or remove a class to show or hide the slide down
const hideAndShow = () => {
  menuBar.classList.toggle("change");
  if (!navBar) {
    overlay.classList.remove("overlay-slide-down");
    overlay.classList.add("overlay-slide-up");
    navBar = true;
  } else {
    overlay.classList.remove("overlay-slide-up");
    overlay.classList.add("overlay-slide-down");
    navBar = false;
  }
};

// Add event listeners to all selectors
menuBar.addEventListener('click', hideAndShow);
nav1.addEventListener('click', hideAndShow);
nav2.addEventListener('click', hideAndShow);
nav3.addEventListener('click', hideAndShow);
nav4.addEventListener('click', hideAndShow);
nav5.addEventListener('click', hideAndShow);