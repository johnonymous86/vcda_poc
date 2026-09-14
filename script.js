const loginForm = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorBox = document.getElementById('error-box');
const correctUsername = 'admin';
const correctPassword = 'Password123P@ssword';
const supabaseClient = supabase.createClient('https://lcyboumcokkwtaihvnox.supabase.co', 'sb_publishable_u6CrbHQYoheiiJjYvgUb4Q_vlT_zyH1')

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
    
        console.log('Front-end verification successful.');

        if (usernameValue === correctUsername && passwordValue === correctPassword) 
            {
                sessionStorage.setItem('loggedIn', 'true');

                window.location.href = 'dashboard.html'
            
            } else {
            
                errorBox.textContent = 'Credentials Incorrect. You Shall Not Pass.'    
            }
        }
    }
);