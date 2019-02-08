const date = new Date();
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');

hours.textContent = date.getHours();
minutes.textContent = date.getMinutes();
