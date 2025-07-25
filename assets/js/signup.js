document.addEventListener('DOMContentLoaded', function () {
  function setupToggle(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    icon.addEventListener('click', function () {
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';

      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
    });
  }

  setupToggle('signup-password', 'toggle-password');
  setupToggle('confirm-password', 'toggle-confirm-password');
});


document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Inputs
  const fullname = document.getElementById('fullname');
  const email = document.getElementById('email');
  const password = document.getElementById('signup-password');
  const confirmPassword = document.getElementById('confirm-password');

  // Error spans
  const fullnameError = document.getElementById('fullname-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('signup-password-error');
  const confirmPasswordError = document.getElementById('confirm-password-error');

  // Reset errors
  fullnameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';

  let isValid = true;

  // Fullname validation
  if (fullname.value.trim() === '') {
    fullnameError.textContent = 'Full name is required';
    isValid = false;
  }

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
  } else if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 8 characters';
    isValid = false;
  }

  // Confirm Password validation
  if (confirmPassword.value.trim() === '') {
    confirmPasswordError.textContent = 'Confirm your password';
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    isValid = false;
  }

  // Final check
  if (isValid) {
    window.location.href = "dashboard.html";
  }
});
