let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');
let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKALMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

buttonElement.onclick = function () {
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    password.innerHTML = pass;
    containerPassword.classList.remove('hide');
    novaSenha = pass;
}

function copyPassword () {
    alert('senha copiada com sucesso');
    navigator.clipboard.writeText(novaSenha)
}