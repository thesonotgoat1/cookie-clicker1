let cookies = 0;
let cursors = 0;
let grandmas = 0;
let farms = 0;
let cps = 0;
let timer = 0;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cpsDisplay = document.getElementById("cps");
const cursorButton = document.getElementById("cursorButtonID")
const buyCursor = document.getElementById("cursorCost");
const cursorCount = document.getElementById("cursorCount");
const grandmaButton = document.getElementById("grandmaButton");
const buyGrandma = document.getElementById("grandmaCost");
const grandmaCount = document.getElementById("grandmaCount");
const farmButton = document.getElementById("farmButton");
const buyFarm = document.getElementById("farmCost");
const farmCount = document.getElementById("farmCount");

cookie.onmousedown = () => cookie.style.scale = "0.9";
cookie.onmouseup = () => cookie.style.scale = "1.1";
cookie.onmouseenter = () => {
  cookie.style.scale = "1.1";
};

cookie.onmouseleave = () => {
  cookie.style.scale = "1";
};

function loop() {
  timer += 0.0004; // smaller = smoother + slower

  // rotation formula
  const angle = 0 + (Math.sin(timer * 90) * 10);

  cookie.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(loop);
}

function cursorCost() {
  return Math.floor(15 * 1.15 ** cursors);
}

function grandmaCost() {
  return Math.floor(100 * 1.15 ** grandmas);
}

function farmCost() {
  return Math.floor(1100 * 1.15 ** farms);
}

function updatestuf() {
  cps = cursors * 0.1 + grandmas * 1;
  counter.textContent = `Cookies: ${Math.floor(cookies)}`;
  cpsDisplay.textContent = `Cookies per second: ${cps.toFixed(1)}`;
  buyCursor.textContent = `Cursor (${cursorCost()} cookies)`;
  cursorCount.textContent = cursors;
  buyGrandma.textContent = `Grandma (${grandmaCost()} cookies)`;
  grandmaCount.textContent = grandmas;
  buyFarm.textContent = `farm (${farmCost()} cookies)`;
  farmCount.textContent = farms;
}

cookie.onclick = () => {
  cookies++;
  updatestuf();
};

cursorButton.onclick = () => {
  const cost = cursorCost();
  if (cookies >= cost) {
    cookies -= cost;
    cursors++;
    updatestuf();
  } else {}
};

grandmaButton.onclick = () => {
  const cost = grandmaCost();
  if (cookies >= cost) {
    cookies -= cost;
    grandmas++;
    updatestuf();
  } else {}
};

farmButton.onclick = () => {
  const cost = farmCost();
  if (cookies >= cost) {
    cookies -= cost;
    farms++;
    updatestuf();
  } else {}
};

setInterval(() => {
  cookies += cps / 10;
  updatestuf();
}, 100);

updatestuf();
loop();
