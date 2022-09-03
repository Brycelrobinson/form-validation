let createAcc = document.querySelector('#Create');
let password = document.querySelector('#password');
let confirmPass = document.querySelector('#confirm-pass');

createAcc.addEventListener('click', () => {

    if(password.value !== confirmPass.value){
        alert('The Passwords Do NOT Match!');
        event.preventDefault();
        password.classList.add('error');
        confirmPass.classList.add('error');
    }
});