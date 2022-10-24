const body = document.body;
const nameColor = body.querySelector(".color");
const btnChangeColor = body.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  nameColor.textContent = `${getRandomHexColor()}`;
  body.style.backgroundColor = nameColor.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
