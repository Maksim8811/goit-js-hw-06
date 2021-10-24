let counterValue = 0;

const buttonDecrement = document.querySelector(`#counter button[data-action="decrement"]`);


const valueSpan = document.querySelector(`#value`);

const buttonIncrement = document.querySelector(`#counter button[data-action="increment"]`);

const calbeckDecrement = () => {
    counterValue -= 1;
    return valueSpan.textContent = counterValue;
   
}

const calbeckIncrement = () => {
    counterValue += 1;
    return valueSpan.textContent = counterValue;
}
buttonDecrement.addEventListener("click", calbeckDecrement);
buttonIncrement.addEventListener("click", calbeckIncrement);