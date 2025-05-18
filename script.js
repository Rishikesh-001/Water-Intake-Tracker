let count = 0;
const goal = 8;

const countEl = document.getElementById("count");
const waterEl = document.getElementById("water");

const pourSound = document.getElementById("pourSound");
const resetSound = document.getElementById("resetSound");

function updateUI() {
  countEl.textContent = count;
  const percentage = (count / goal) * 100;
  waterEl.style.height = `${percentage}%`;
}

function addGlass() {
  if (count < goal) {
    count++;
    updateUI();
    pourSound.currentTime = 0;
    pourSound.play();
  }
}

function resetGlasses() {
  count = 0;
  updateUI();
  resetSound.currentTime = 0;
  resetSound.play();
}

updateUI();
