let currentDay = 0;
const days = document.querySelectorAll(".day");

function nextDay() {
  days[currentDay].classList.remove("active");
  currentDay++;
  days[currentDay].classList.add("active");
}

function showKiss() {
  alert("💋💋💋");
  nextDay();
}

/* NO button escape */
const no = document.getElementById("no");
if (no) {
  no.addEventListener("mouseover", () => {
    no.style.transform =
      `translate(${Math.random()*150-75}px,${Math.random()*150-75}px)`;
  });
}

/* YES popup */
document.getElementById("yes")?.addEventListener("click", () => {
  document.querySelector(".popup").style.display = "flex";
});
