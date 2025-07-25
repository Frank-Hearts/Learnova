document.getElementById('login').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');

  const emailError = document.getElementById('login-email-error');
  const passwordError = document.getElementById('login-password-error');

  // Reset error messages
  emailError.textContent = '';
  passwordError.textContent = '';

  let isValid = true;

  // Email validation
  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
    emailError.textContent = 'Enter a valid email';
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  }

  // Final step
  if (isValid) {
    // Simulate successful login and redirect
    window.location.href = 'dashboard.html';
  }
});

// Attach click event to the toggle icon for password visibility
document.addEventListener('DOMContentLoaded', function () {
  function setupToggle(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    icon.addEventListener('click', function () {
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';

      icon.classList.toggle('fa-eye-slash');
      icon.classList.toggle('fa-eye');
    });
  }

  setupToggle('login-password', 'toggle-password');
});