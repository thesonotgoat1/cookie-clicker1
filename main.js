let cookies = 0;
let cursors = 0;
let grandmas = 0;
let cps = 0; // cookies per second

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cpsDisplay = document.getElementById("cps");
const buyCursor = document.getElementById("cursorButton");
const buyGrandma = document.getElementById("grandmaButton");
const cursorCount = document.getElementById("cursorCount");

function updateUI() {
  counter.textContent = `Cookies: ${Math.floor(cookies)}`;
  cpsDisplay.textContent = `Cookies per second: ${cps}`;
  cursorCount.textContent = `Cursors: ${cursors}`;
  buyCursor.textContent = `Buy Cursor (${10 + cursors * 5} cookies)`;
}

for (let i = 0; i < Infinity; i++) {
  cps = cursors*0.1 + grandmas*1;
  const cursorCost = 15 * 1.15^(cursors-1)
  const grandmaCost = 100 * 1.15^(grandmas-1)
}

cookie.onclick = () => {
  cookies++;
  updateUI();
};

buyCursor.onclick = () => {
  if (cookies >= cursorCost) {
    cookies -= cursorCost;
    cursors++;
    updateUI();
  } else {
    alert(`Not enough cookies! You need ${cursorCost} cookies.`);
  }
};

buyGrandma.onclick = () => {
  if (cookies >= grandmaCost) {
    cookies -= grandmaCost;
    grandmas++;
    updateUI();
  } else {
    alert(`Not enough cookies! You need ${grandmaCost} cookies.`);
  }
};

setInterval(() => {
  cookies += cps / 10;
  updateUI();
}, 100);

updateUI();
