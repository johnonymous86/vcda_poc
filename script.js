const loginForm = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const errorBox = document.getElementById('error-box');
const supabaseClient = supabase.createClient('https://lcyboumcokkwtaihvnox.supabase.co', 'sb_publishable_u6CrbHQYoheiiJjYvgUb4Q_vlT_zyH1')

loginForm.addEventListener('submit', async function(event) {

    event.preventDefault();

    errorBox.textContent= '';
    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let errors = [];

    if (emailValue === '') {
        
        errors.push('Email required for access');
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
    
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: emailValue,
            password: passwordValue
        });
    
        if (error) {
            errorBox.textContent = 'Invalid login credentials.';
        } else {
            window.location.href = "dashboard.html";
        }
    }
});