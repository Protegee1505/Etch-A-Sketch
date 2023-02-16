const divContainer = document.querySelector(".container");
const changeGridBtn = document.querySelector(".change-grid");

let defaultNumber = 16;
let isMouseDown = false;

const resetBtn = changeGridBtn.addEventListener("click", () => {
  let userSize = Number(
    prompt(
      "Enter the number of squares you want to change 0-100.",
      `${defaultNumber}`
    )
  );

  while (userSize > 100 || userSize < 0) {
    userSize = prompt("Please pick a number 100 or less.", `${defaultNumber}`);
  }

  if (userSize === null) {
    userSize = defaultNumber;
  } else {
    divContainer.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
    divContainer.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;
    defaultNumber = userSize;
    divContainer.innerHTML = "";
    createGrid(userSize);
  }
  console.log(userSize);
});

let createGrid = (number) => {
  for (let i = 0; i < number * number; i++) {
    const containerChild = document.createElement("div");
    divContainer.appendChild(containerChild);
    containerChild.classList.add("box");
    // Makes background color div change when mouse over
    containerChild.addEventListener("mouseenter", () => {
      containerChild.style.backgroundColor = "black";
    });
  }
};

createGrid(defaultNumber);
