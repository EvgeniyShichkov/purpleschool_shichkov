const div = document.getElementById("container");

let clickCount = 0;

const h3 = document.createElement("h3");
h3.innerHTML = `Счетчик: ${clickCount}`;
div.appendChild(h3);

for (let i = 1; i <= 5; i++) {
  const btn = document.createElement("button");
  btn.innerHTML = "Нажми на меня";
  btn.setAttribute("data-test-id", i);
  div.appendChild(btn);
}

const buttons = document.querySelectorAll("button");

let lastClickedButton = null;
function setCounter(button) {
  clickCount++;
  h3.innerHTML = `Счетчик: ${clickCount}`;
  if (lastClickedButton && lastClickedButton !== button) {
    lastClickedButton.innerHTML = "Нажми на меня";
  }
  button.innerText = "Кнопка нажата";
  lastClickedButton = button;
}


buttons.forEach((button) => {
  button.addEventListener("click", () =>  setCounter(button));
});


