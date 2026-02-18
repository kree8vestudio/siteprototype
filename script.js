// LAUNCH DATE
const launchDate = new Date("April 1, 2026 00:00:00").getTime();

// COUNTDOWN
setInterval(function(){

const now = new Date().getTime();

const distance = launchDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((distance / (1000 * 60)) % 60);
const seconds = Math.floor((distance / 1000) % 60);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

}, 1000);


// SAVE EMAIL
function saveEmail(event){

event.preventDefault();

let email = document.getElementById("emailInput").value;

localStorage.setItem("fleuxe_email", email);

alert("You will be notified on launch!");

}
