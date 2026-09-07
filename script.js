
const openStory = document.getElementById("openStory");
const firstMoment = document.getElementById("firstMoment");
const loveButton = document.getElementById("loveButton");
const heartLayer = document.getElementById("heartLayer");
const toast = document.getElementById("toast");

openStory.addEventListener("click", () => {
  firstMoment.scrollIntoView({ behavior: "smooth" });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function createHeart(power = 1) {
  const el = document.createElement("div");
  const hearts = ["❤️", "💗", "🤍", "💕"];
  el.className = "heart";
  el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (14 + Math.random() * (12 * power)) + "px";
  el.style.animationDuration = (3.6 + Math.random() * 3.2) + "s";
  heartLayer.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}

setInterval(() => createHeart(.8), 1500);

loveButton.addEventListener("click", () => {
  for (let i = 0; i < 45; i++) {
    setTimeout(() => createHeart(2.3), i * 55);
  }

  loveButton.textContent = "❤️ Júregimde saqlayman";
  loveButton.disabled = true;

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4200);
});
