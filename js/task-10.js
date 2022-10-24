const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesForBox = document.querySelector("#boxes");
const boxNumber = document.querySelector("#controls").firstElementChild;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  amount = boxNumber.value;
  let numbersOfBox = boxesForBox.children.length;
  for (let i = numbersOfBox; i - numbersOfBox < amount; i += 1) {
    const box = `<div class="box" style = "width: ${30 + i * 10}px; 
    height: ${30 + i * 10}px; 
    background-color: ${getRandomHexColor()}"></div>`;

    boxesForBox.insertAdjacentHTML("afterbegin", box);
  }
};

const destroyBoxes = () => {
  boxesForBox.innerHTML = "";
  boxNumber.value = "";
};

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
