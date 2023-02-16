const divContainer = document.querySelector(".container");
const changeGridBtn = document.querySelector(".change-grid");

let userNumber = 16;

const resetBtn = changeGridBtn.addEventListener("click", () => {
  let userSize = prompt(
    "Enter the number of squares you want to change.",
    `${userNumber}`
  );

  while (userSize === null || userSize < 0) {
    userSize = userNumber;
  }

  while (userSize > 100) {
    userSize = prompt("Pick a smaller number 100 or less.");
  }
  divContainer.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
  divContainer.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;

  userNumber = userSize;
  divContainer.innerHTML = "";
  createGrid(userSize);
});

let createGrid = (number) => {
  for (let i = 0; i < number * number; i++) {
    const containerChild = document.createElement("div");
    divContainer.appendChild(containerChild);
    containerChild.classList.add("box");
    containerChild.addEventListener("mousemove", () => {
      containerChild.style.backgroundColor = "black";
    });
  }
};

createGrid(16);
