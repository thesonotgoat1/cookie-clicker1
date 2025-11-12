let cookies = 0;
let cursors = 0;
let cps = 0; // cookies per second

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cpsDisplay = document.getElementById("cps");
const buyCursor = document.getElementById("cursorButton");
const cursorCount = document.getElementById("cursorCount");

function updateUI() {
  counter.textContent = `Cookies: ${Math.floor(cookies)}`;
  cpsDisplay.textContent = `Cookies per second: ${cps}`;
  cursorCount.textContent = `Cursors: ${cursors}`;
  buyCursor.textContent = `Buy Cursor (${10 + cursors * 5} cookies)`;
}

// Click cookie
cookie.onclick = () => {
  cookies++;
  updateUI();
};

// Buy Cursor
buyCursor.onclick = () => {
  const cursorCost = 10 + cursors * 5; // cost scales up
  if (cookies >= cursorCost) {
    cookies -= cursorCost;
    cursors++;
    cps = cursors; // 1 cps per cursor
    updateUI();
  } else {
    alert(`Not enough cookies! You need ${cursorCost} cookies.`);
  }
};

// Auto-cookie gain
setInterval(() => {
  cookies += cps / 10; // smoother gain (10 ticks per second)
  updateUI();
}, 100);

updateUI();
