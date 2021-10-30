const input = document.querySelector(`#validation-input`)

const dataAtribute = Number(input.dataset.length);



const validInput = (event) => {

    if (event.currentTarget.value.length === dataAtribute)
        
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