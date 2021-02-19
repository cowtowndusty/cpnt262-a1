// Create a constant for the nav element to become visible when EventListener is triggered.
const nav = document.getElementById('nav');
// Create a constant for the burger element to become visible when EventListener is triggered.
const burger = document.getElementById('burger');
// Create a constant for the overlay element to become visible when EventListener is triggered.
const overlay = document.getElementById('overlay');
// Create an EventListener associated with the burger icon, when clicked it will activate the three other events.
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

// document.querySelector