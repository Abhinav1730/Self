const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID; // Declare intervalID outside the functions

const startChangingColor = function () {
  if (!intervalID) {
    // Only start a new interval if it's not already running
    intervalID = setInterval(changeBGcolor, 1000);
  }
};

const stopChangingColor = function () {
  if (intervalID) {
    // Only clear the interval if it exists
    clearInterval(intervalID);
    intervalID = null; // Reset the intervalID to null after clearing
  }
};

function changeBGcolor() {
  document.body.style.backgroundColor = randomColor();
}

document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector('#stop').addEventListener("click" , stopChangingColor)
  
