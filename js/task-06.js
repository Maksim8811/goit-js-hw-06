const input = document.querySelector(`#validation-input`)

const validInput = (event) => {
    if (event.currentTarget.value.length === 6)
        
    {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid");
    }
    else {
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid")
        
    }
}

input.addEventListener("blur", validInput)