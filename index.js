const divContainer = document.querySelector(".container");
const changeGridBtn = document.querySelector(".change-grid");
const clearGridBtn = document.querySelector(".clear-grid");
const rainbowModeBtn = document.querySelector(".rainbow-mode");

let defaultGridSize = 16;

const changeSizeGrid = changeGridBtn.addEventListener("click", () => {
  const userSize = Number(
    prompt(
      "Enter the number of squares you want to change 0-100.",
      `${defaultGridSize}`
    )
  );

  while (
    userSize > 100 ||
    userSize < 0 ||
    userSize === null ||
    isNaN(userSize)
  ) {
    userSize = prompt(
      "Please pick a number 100 or less.",
      `${defaultGridSize}`
    );
  }

  if (userSize === 0) {
    userSize = defaultGridSize;
  } else {
    divContainer.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
    divContainer.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;
    defaultGridSize = userSize;
    divContainer.innerHTML = "";
    createGrid(userSize);
  }
});

clearGridBtn.addEventListener("click", () => {
  divContainer.querySelectorAll("div").forEach((div) => {
    div.style.backgroundColor = "";
  });
});

const setDivColor = (div, mouseIsDown, rainbowMode) => {
  const [r, g, b] = randomColor();
  const color = rainbowMode ? `rgb(${r}, ${g}, ${b})` : "black";
  if (mouseIsDown) {
    div.style.backgroundColor = color;
  }
};

// Makes background color div change when mouse is down and mouse over
const mouseDraw = () => {
  let mouseIsDown = false;
  divContainer.querySelectorAll("div").forEach((div) => {
    div.addEventListener("mousedown", () => {
      mouseIsDown = true;
      setDivColor(div, mouseIsDown, rainbowMode);
    });

    div.addEventListener("mouseenter", () => {
      setDivColor(div, mouseIsDown, rainbowMode);
    });

    div.addEventListener("mouseup", () => {
      mouseIsDown = false;
    });

    // set mouseIsDown to false if the mouseup event occurred outside the divContainer
    document.addEventListener("mouseup", () => {
      mouseIsDown = false;
    });
  });
};

let rainbowMode = false;

rainbowModeBtn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  if (rainbowMode) {
    rainbowModeBtn.querySelector(".off").textContent = "ON";
    rainbowModeBtn.querySelector(".off").classList.replace("off", "on");
  } else {
    rainbowModeBtn.querySelector(".on").textContent = "OFF";
    rainbowModeBtn.querySelector(".on").classList.replace("on", "off");
  }
});

const randomColor = () => {
  let r = 0;
  let g = 0;
  let b = 0;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  return [r, g, b];
};

const createGrid = (number) => {
  for (let i = 0; i < number * number; i++) {
    const containerChild = document.createElement("div");
    divContainer.appendChild(containerChild);
    containerChild.classList.add("box");
    // Preventing default on mousedown event
    divContainer.setAttribute(
      "onmousedown",
      "event.preventDefault ? event.preventDefault() : event.returnValue = false"
    );
  }
  mouseDraw();
};

createGrid(defaultGridSize);
