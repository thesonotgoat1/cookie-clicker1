let cookies = 10000;
let cursors = 0;
let grandmas = 0;
let cps = 0;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cpsDisplay = document.getElementById("cps");
const cursorButton = document.getElementById("cursorButtonID")
const buyCursor = document.getElementById("cursorCost");
const cursorCount = document.getElementById("cursorCount");
const grandmaButton = document.getElementById("grandmaButton");
const buyGrandma = document.getElementById("grandmaCost");
const grandmaCount = document.getElementById("grandmaCount");

function cursorCost() {
  return Math.floor(15 * 1.15 ** cursors);
}

function grandmaCost() {
  return Math.floor(100 * 1.15 ** grandmas);
}

function updateUI() {
  counter.textContent = `Cookies: ${Math.floor(cookies)}`;
  cpsDisplay.textContent = `Cookies per second: ${cps.toFixed(1)}`;
  buyCursor.textContent = `Cursor (${cursorCost()} cookies)`;
  cursorCount.textContent = cursors;
  buyGrandma.textContent = `Grandma (${grandmaCost()} cookies)`;
  grandmaCount.textContent = grandmas;
}

cookie.onclick = () => {
  cookies++;
  updateUI();
};

cursorButton.onclick = () => {
  const cost = cursorCost();
  if (cookies >= cost) {
    cookies -= cost;
    cursors++;
    updateCPS();
    updateUI();
  } else { }
};

grandmaButton.onclick = () => {
  const cost = grandmaCost();
  if (cookies >= cost) {
    cookies -= cost;
    grandmas++;
    updateCPS();
    updateUI();
  } else { }
};

function updateCPS() {
  cps = cursors * 0.1 + grandmas * 1;
}

setInterval(() => {
  cookies += cps / 10;
  updateUI();
}, 100);

updateCPS();
updateUI();