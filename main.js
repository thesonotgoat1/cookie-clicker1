let cookies = 0;
let cursors = 0;
let cps = cursors; // 1 cookie per cursor per second

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cpsDisplay = document.getElementById("cps");
const buyCursor = document.getElementById("buyCursor");
const cursorCount = document.getElementById("cursorCount");

// Update UI
function updateUI() {
  counter.textContent = `Cookies: ${cookies}`;
  cpsDisplay.textContent = `Cookies per second: ${cps}`;
  cursorCount.textContent = `Cursors: ${cursors}`;
  buyCursor.textContent = 'Buy Cursor:';
}

// Click cookie
cookie.onclick = () => {
  cookies++;
  updateUI();
};

// Buy Cursor
buyCursor.onclick = () => {
  const cost = 10 + cursors * 5; // Increase price with each buy
  if (cookies >= cost) {
    cookies -= cost;
    cursors++;
    cps = cursors;
    updateUI();
  } else {
    alert(`Not enough cookies! You need ${cost} cookies.`);
  }
};

// Auto-cookie every second
setInterval(() => {
  cookies += cps;
  updateUI();
}, 1000);

// Initial UI update
updateUI();
