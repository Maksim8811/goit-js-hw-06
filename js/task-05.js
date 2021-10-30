const textInput = document.querySelector(`#name-input`);


const textOutput = document.querySelector(`#name-output`);


textInput.addEventListener("input", (event) => {
    if (textInput.value === "")
        return textOutput.textContent = "Anonimus";
    textOutput.textContent = event.currentTarget.value.trim();
})

