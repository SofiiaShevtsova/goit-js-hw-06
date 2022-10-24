const body = document.body;
const nameColor = body.querySelector(".color");
const btnChangeColor = body.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  nameColor.textContent = `${body.style.backgroundColor}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
