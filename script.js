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

const maxValue = document.createElement("h3");
maxValue.textContent = "♾️";

const maxValueInput = document.createElement("input");

// Ajout des éléments au DOM
container.append(
  title,
  counter,
  incrementBtn,
  decrementBtn,
  resetBtn,
  maxValue,
  maxValueInput
);

// Ajout des événements aux boutons
incrementBtn.addEventListener("click", () => {
  if (
    maxValue.textContent === "♾️" ||
    Number(counter.textContent) < Number(maxValue.textContent)
  ) {
    counter.textContent++;
  }
});

decrementBtn.addEventListener("click", () => {
  if (counter.textContent > 0) {
    counter.textContent--;
  }
});

resetBtn.addEventListener("click", () => {
  counter.textContent = 0;
});

maxValueInput.addEventListener("input", () => {
  if (maxValueInput.value === "") {
    maxValue.textContent = "♾️";
  } else {
    maxValue.textContent = maxValueInput.value;
  }
});
