const sky = document.getElementById("sky");
const starsBox = document.getElementById("stars");
const sun = document.getElementById("sun");

// make 150 random stars
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  const size = Math.random() * 2 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.animationDelay = Math.random() * 3 + "s";
  starsBox.appendChild(star);
}

// click the bright star to toggle day/night
sun.addEventListener("click", () => {
  sky.classList.toggle("day");
});

// a meteor every 2.5 seconds (night only)
function spawnMeteor() {
  if (sky.classList.contains("day")) return;
  const meteor = document.createElement("div");
  meteor.className = "meteor";
  meteor.style.top = Math.random() * 50 + "%";
  meteor.style.left = 30 + Math.random() * 70 + "%";
  sky.appendChild(meteor);
  meteor.addEventListener("animationend", () => meteor.remove());
}
setInterval(spawnMeteor, 2500);
