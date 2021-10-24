function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonChange = document.querySelector(`.change-color`);
const outputColor = document.querySelector(`.color`);



function colorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
  }

buttonChange.addEventListener("click", colorChange)