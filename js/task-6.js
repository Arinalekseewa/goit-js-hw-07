function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const mainBox = document.querySelector("div#boxes");

btnCreate.addEventListener("click", () => createBoxes(Number(inputNumber.value)));
btnDestroy.addEventListener("click", cleanElements);

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert("Введіть число від 1 до 100!");
    return;
  }

  mainBox.innerHTML = ""; 

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    const size = 30 + i * 10;
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    mainBox.appendChild(newBox);
  }

  inputNumber.value = "";
}

function cleanElements() {
  mainBox.innerHTML = "";
}
