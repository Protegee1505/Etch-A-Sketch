const divContainer = document.querySelector(".container");
const changeGridBtn = document.querySelector(".change-grid");
const resetBtn = changeGridBtn.addEventListener("click", () => {
  let userSize = prompt("Enter the number of pixels you want to change.");

  while (userSize > 100) {
    userSize = prompt("Pick a smaller number 100 or less.");
  }
  divContainer.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
  divContainer.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;

  divContainer.innerHTML = "";
  createGrid(userSize);
});

let createGrid = (number) => {
  for (let i = 0; i < number * number; i++) {
    const containerChild = document.createElement("div");
    divContainer.appendChild(containerChild);
    containerChild.classList.add("box");
    containerChild.addEventListener("mouseenter", () => {
      containerChild.style.backgroundColor = "black";
    });
  }
};

createGrid(16);
