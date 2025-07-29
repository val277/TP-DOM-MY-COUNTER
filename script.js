// Variables
let counterValue = 0;
let maxValue = Infinity;

// Création du container
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Création des éléments du container
const title = document.createElement("h1");
title.textContent = "My Counter";

const counter = document.createElement("h2");
counter.textContent = 0;

const incrementBtn = document.createElement("button");
incrementBtn.textContent = "Incrémenter +";

const decrementBtn = document.createElement("button");
decrementBtn.textContent = "Décrémenter -";

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";

const maxH3 = document.createElement("h3");
maxH3.textContent = "♾️";

const maxValueInput = document.createElement("input");
maxValueInput.type = "number";

// Ajout des éléments au DOM
container.append(
  title,
  counter,
  incrementBtn,
  decrementBtn,
  resetBtn,
  maxH3,
  maxValueInput
);

// Functions

const changeValue = (op = "reset") => {
  if (op === "+") {
    if (counterValue < maxValue) {
      counterValue++;
      counter.textContent = counterValue;
    }
  } else if (op === "-") {
    if (counterValue > 0) {
      counterValue--;
      counter.textContent = counterValue;
    }
  } else {
    counterValue = 0;
    counter.textContent = counterValue;

    maxValue = Infinity;
    maxH3.textContent = "♾️";
    maxValueInput.value = null;
  }
};

const changeMaxValue = (v) => {
  if (v === "") {
    maxH3.textContent = "♾️";
    maxValue = Infinity;
  } else {
    maxValue = v;
    maxH3.textContent = maxValue;

    if (counterValue > maxValue) {
      counterValue = maxValue;
      counter.textContent = counterValue;
    }
  }
};

// Ajout des événements aux boutons
incrementBtn.addEventListener("click", () => {
  changeValue("+");
});

decrementBtn.addEventListener("click", () => {
  changeValue("-");
});

resetBtn.addEventListener("click", () => {
  changeValue();
});

maxValueInput.addEventListener("input", () => {
  changeMaxValue(maxValueInput.value);
});
