const divContainer = document.querySelector(".container");
const changeGridBtn = document.querySelector(".change-grid");

changeGridBtn.addEventListener("click", () => {
  let gridValue = prompt("Enter number of rows");

  if (gridValue > 50) {
    alert("Value is too large");
  } else {
    divContainer.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`;
    divContainer.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;

    divContainer.innerHTML = "";
    createGrid(gridValue);
  }
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
