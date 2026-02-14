let current = 0;
const screens = document.querySelectorAll(".screen");
const nextBtns = document.querySelectorAll(".next");

nextBtns.forEach(btn => {
  btn.addEventListener("click", nextScreen);
});

function nextScreen() {
  screens[current].classList.remove("active");
  current++;
  screens[current].classList.add("active");
}

/* Swipe support */
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  if (e.changedTouches[0].clientX - startX > 80) {
    if (current < screens.length - 1) nextScreen();
  }
});

/* Slideshow */
const slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
  i = (i + 1) % slides.length;
}, 2000);

/* NO button escape */
const no = document.getElementById("no");
no.addEventListener("mouseover", () => {
  no.style.transform = `translate(${Math.random()*150-75}px,${Math.random()*150-75}px)`;
});

/* YES popup */
document.getElementById("yes").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "flex";
});
