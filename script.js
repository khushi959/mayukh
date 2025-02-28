// Toggle between Login and Sign Up forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Show Password Toggle
const showPassword = document.getElementById('show-password');
const loginPassword = document.getElementById('login-password');

showPassword.addEventListener('change', () => {
    loginPassword.type = showPassword.checked ? 'text' : 'password';
});

const showSignupPassword = document.getElementById('show-signup-password');
const signupPassword = document.getElementById('signup-password');

showSignupPassword.addEventListener('change', () => {
    signupPassword.type = showSignupPassword.checked ? 'text' : 'password';
});

// Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    console.log('Login Data:', { email, password });
    alert('Login successful!');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    console.log('Sign Up Data:', { username, email, password });
    alert('Account created successfully!');
});
