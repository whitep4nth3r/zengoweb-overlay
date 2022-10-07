const currentState = {
  name: "",
};

const names = document.querySelectorAll("[data-name]");
const namesArr = Array.from(names);

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomEntry(array) {
  return array[getRandomInt(0, array.length - 1)];
}

function showPancake(el) {
  el.style.setProperty("--display", "block");
}

function hidePancake(el) {
  el.style.setProperty("--display", "none");
}

function hideAllPancakes() {
  for (let i = 0; i < names.length; i++) {
    hidePancake(names[i]);
  }
}

function assignPancakeToRandom() {
  const randomEl = getRandomEntry(namesArr);

  if (currentState.name === randomEl.textContent) {
    return assignPancakeToRandom();
  } else {
    hideAllPancakes();
    currentState.name = randomEl.textContent;
    showPancake(randomEl);
  }
}

setInterval(() => {
  assignPancakeToRandom(namesArr);
}, 60000);
