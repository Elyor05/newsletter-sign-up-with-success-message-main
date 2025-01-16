// taking the form
const email = document.getElementById("email")

// taking main page and success page
const main = document.querySelector("main");
const successMessage = document.getElementById('success');

// here is the function to validate email with Regex
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return true or false
    return emailPattern.test(email);
}

const handleSubmit = (e) => {
    // prevent from updating when submitting
    e.preventDefault();

    // taking email from form
    const data = Object.fromEntries(new FormData(e.target)).email;

    // taking text and input to use when validation is failed
    const errorText = document.getElementById('error-text');
    const emailInput = document.getElementById("email-input");

    // using function validateEmail() to check
    if (validateEmail(data)) {
        successMessage.style.display = 'flex';
        main.style.display = 'none';
        document.getElementById('confirmation').innerText = `${data}`;
        errorText.style.display = 'none';
        emailInput.style.removeProperty('border-color');
        emailInput.style.removeProperty('background-color');
        emailInput.style.removeProperty('color');
    } else {
        errorText.style.display = 'block';
        emailInput.style.cssText =
            'border-color:#FE6352;' +
            'background-color:#FFE8E6;' +
            'color:#FE6352';
    }
};
// add EventListener to submit button in form
email.addEventListener("submit", handleSubmit);

// function to come back on main page
function dismissMessage() {
    successMessage.style.display = 'none';
    main.style.display = 'flex';
}
