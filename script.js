window.onload = function () {

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeat-password");
    const email = document.getElementById("e-mail");
    const postalCode = document.getElementById("postal-code");
    const button = document.getElementById("submit");

    const usernameErrorElem = document.querySelector("#usernameError");
    const passwordErrorElem = document.querySelector("#passwordError");
    const passwordRepeatErrorElem = document.querySelector("#passwordRepeatError");
    const emailErrorElem = document.querySelector("#emailError");
    const postalCodeErrorElem = document.querySelector("#postalCodeError");
    const textSuccesElem = document.querySelector("#text-succes");
    const regexUsername = /^[a-z0-9\_\-\.]{8,}$/i;
    const regexPassword = /^[a-z0-9\_\-\.\#\*\,\!]{8,}$/i;
    const regexEmail = /^[a-z0-9\.\-\_]+@[a-z0-9\.\-]+\.[a-z]+$/;
    const regexPostalCode = /^[0-9]{6}$/;

    username.onchange = function () {
        if (regexUsername.test(username.value)) {
            usernameErrorElem.style.display = "none"
        } else {
            usernameErrorElem.style.display = "block"
        }
    }
    password.onchange = function () {
        if (regexPassword.test(password.value)) {
            passwordErrorElem.style.display = "none";
        } else {
            passwordErrorElem.style.display = "block";
        }
        if (password.value == repeatPassword.value) {
            passwordRepeatErrorElem.style.display = "none"
        } else {
            passwordRepeatErrorElem.style.display = "block"
        }
    }
    repeatPassword.onchange = function () {
        if (password.value == repeatPassword.value) {
            passwordRepeatErrorElem.style.display = "none"
        } else {
            passwordRepeatErrorElem.style.display = "block"
        }
    }
    email.onchange = function () {
        if (regexEmail.test(email.value)) {
            emailErrorElem.style.display = "none"
        } else {
            emailErrorElem.style.display = "block"
        }
    }
    postalCode.onchange = function () {
        if (regexEmail.test(email.value)) {
            postalCodeErrorElem.style.display = "none"
        } else {
            postalCodeErrorElem.style.display = "block"
        }
    }
    button.onclick = function (e) {
        e.preventDefault();
        let correctCounter = 0;
        if (regexUsername.test(username.value)) {
            usernameErrorElem.style.display = "none";
            correctCounter++;
        } else {
            usernameErrorElem.style.display = "block";
        }
        if (regexPassword.test(password.value)) {
            passwordErrorElem.style.display = "none";
            correctCounter++;
        } else {
            passwordErrorElem.style.display = "block";
        }
        if (password.value === repeatPassword.value) {
            passwordRepeatErrorElem.style.display = "none";
            correctCounter++;
        } else {
            passwordRepeatErrorElem.style.display = "block";
        }
        if (regexEmail.test(email.value)) {
            emailErrorElem.style.display = "none";
            correctCounter++;
        } else {
            emailErrorElem.style.display = "block";
        }
        if (regexPostalCode.test(postalCode.value)) {
            postalCodeErrorElem.style.display = "none";
            correctCounter++;
        } else {
            postalCodeErrorElem.style.display = "block";
        }
        if (correctCounter == 5) {
            textSuccesElem.style.display = "block";
            username.value = "";
            password.value = "";
            repeatPassword.value = "";
            email.value = "";
            postalCode.value = "";
        } else {
            //   alert("Pay attention!");
        }
    };
};