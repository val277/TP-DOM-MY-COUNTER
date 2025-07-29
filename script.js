// Variables
let counterValue = 0;
let maxValue = Infinity;

// FUnctions
const createAndAddElement = function (elementType, options = {}) {
  const element = document.createElement(elementType);

  const obj = {
    parent: options.parent ?? "body",
    textContent: options.textContent ?? "",
    classList: options.classList ?? [],
    afterOrBefore: options.aob ?? null,
  };

  if (obj.textContent !== "") {
    element.textContent = obj.textContent;
  }
  if (obj.classList) {
    for (const className of obj.classList) {
      element.classList.add(className);
    }
  }

  let parentNode;
  if (obj.afterOrBefore) {
    parentNode = document.querySelector(obj.parent);
    obj.afterOrBefore === "after"
      ? parentNode.after(element)
      : parentNode.before(element);
  } else {
    parentNode = document.querySelector(obj.parent);
    parentNode.appendChild(element);
  }

  return element;
};

// Création du container

const container = createAndAddElement("div", {
  classList: ["container"],
});

// Création des éléments du container

const title = createAndAddElement("h1", {
  parent: ".container",
  textContent: "My Counter",
});

const counter = createAndAddElement("h2", {
  parent: ".container",
  textContent: counterValue,
});
const incrementBtn = createAndAddElement("button", {
  parent: ".container",
  textContent: "Incrémenter +",
});
const decrementBtn = createAndAddElement("button", {
  parent: ".container",
  textContent: "Décrémenter -",
});
const resetBtn = createAndAddElement("button", {
  parent: ".container",
  textContent: "Reset",
});
const maxH3 = createAndAddElement("h3", {
  parent: ".container",
  textContent: "♾️",
});
const maxValueInput = createAndAddElement("input", { parent: ".container" });
maxValueInput.type = "number";
maxValueInput.placeholder = "Entrez une valeur max";
maxValueInput.name = "max-value";

const testBtn = createAndAddElement("button", {
  textContent: "after",
  parent: "input",
  aob: "after",
});

const testBtn2 = createAndAddElement("button", {
  textContent: "before",
  parent: "input",
  aob: "before",
});

// Event Functions

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
