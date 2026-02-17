let shutter = document.getElementById("shutter");

/* total scroll required */
let totalScroll = window.innerHeight * 3;

let current = 0;
let target = 0;

window.addEventListener("load", function(){

window.scrollTo(0,0);

current = 0;
target = 0;

});

window.addEventListener("scroll", function(){

target = window.scrollY;

});

function animate(){

let progress = target / totalScroll;

if(progress > 1) progress = 1;

let ease = 1 - Math.pow(1 - progress, 3);

let move = ease * window.innerHeight;

current += (move - current) * 0.08;

shutter.style.transform =
"translateY(-" + current + "px)";

requestAnimationFrame(animate);

}

animate();
