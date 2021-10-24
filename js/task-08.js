const form = document.querySelector(`.login-form`)
console.log(form)



const alertMassage = `all fields must be filled!!!`

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert(alertMassage)
    }
    
    const newObject = {};
    console.log(newObject);
    
    const objectData = new FormData(event.currentTarget);

    objectData.forEach((value, name) => {
        newObject[name] = value;
    });

    console.log(newObject)


    form.reset()
}

form.addEventListener("submit", handleSubmit);
