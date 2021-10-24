const fontCizeInput = document.querySelector(`#font-size-control`)


const text = document.querySelector(`#text`)


fontCizeInput.addEventListener("input", (event) => {
    text.style.fontSize = event.currentTarget.value + "px";
    
})




