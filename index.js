const divContainer = document.querySelector(".container");
const changeGridBtn = document.querySelector(".change-grid");
const clearGridBtn = document.querySelector(".clear-grid");

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
    mouseDraw();
  }
});

clearGridBtn.addEventListener("click", () => {
  divContainer.querySelectorAll("div").forEach((div) => {
    div.style.backgroundColor = "rgb(213, 223, 218)";
  });
});

// Makes background color div change when mouse is down and mouse over
const mouseDraw = () => {
  let mouseIsDown = false;
  divContainer.querySelectorAll("div").forEach((div) => {
    div.addEventListener("mouseenter", () => {
      if (mouseIsDown) {
        div.style.backgroundColor = "black";
      }
    });

    div.addEventListener("mousedown", () => {
      mouseIsDown = true;
      div.style.backgroundColor = "black";
    });

    div.addEventListener("mouseup", () => {
      mouseIsDown = false;
    });

    // set mouseIsDown to false if the mousedown event occurred outside the divContainer
    document.addEventListener("mouseup", () => {
      mouseIsDown = false;
    });
  });
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
};

createGrid(defaultGridSize);
mouseDraw();
