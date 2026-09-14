const loginForm = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorBox = document.getElementById('error-box');

loginForm.addEventListener('submit', function(event) {

    event.preventDefault();

    errorBox.textContent= '';
    
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    let errors = [];

    if (usernameValue === '') {
        
        errors.push('Username required for access');
    }

    if (passwordValue === '') {

        errors.push('Password is required');
    }

    if (passwordValue.length < 16) {

        errors.push('Password must be 16 characters long');
    }

    if (errors.length > 0) {
    
        errorBox.innerHTML = errors.join('<br>');
        
    } else {

        console.log('Front-end verification successful.')
    }

});