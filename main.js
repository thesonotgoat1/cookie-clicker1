let cookies = 0;
let cursors = 0;
let grandmas = 0;
let cps = 0;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cpsDisplay = document.getElementById("cps");
const buyCursor = document.getElementById("cursorButton");
const buyGrandma = document.getElementById("grandmaButton");
const cursorCount = document.getElementById("cursorCount");

function cursorCost() {
  return Math.floor(15 * 1.15 ** cursors);
}

function grandmaCost() {
  return Math.floor(100 * 1.15 ** grandmas);
}

function updateUI() {
  counter.textContent = `Cookies: ${Math.floor(cookies)}`;
  cpsDisplay.textContent = `Cookies per second: ${cps.toFixed(1)}`;
  buyCursor.textContent = `Buy Cursor (${cursorCost()} cookies)`;
  buyGrandma.textContent = `Buy Grandma (${grandmaCost()} cookies)`;
}

cookie.onclick = () => {
  cookies++;
  updateUI();
};

buyCursor.onclick = () => {
  const cost = cursorCost();
  if (cookies >= cost) {
    cookies -= cost;
    cursors++;
    updateCPS();
    updateUI();
  } else {
    alert(`Not enough cookies! Need ${cost} cookies.`);
  }
};

buyGrandma.onclick = () => {
  const cost = grandmaCost();
  if (cookies >= cost) {
    cookies -= cost;
    grandmas++;
    updateCPS();
    updateUI();
  } else {
    alert(`Not enough cookies! Need ${cost} cookies.`);
  }
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
