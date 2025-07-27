document.addEventListener('DOMContentLoaded', function () {
  // Password toggle functionality
  const passwordInput = document.getElementById('login-password');
  const toggleIcon = document.getElementById('toggle-password');

  toggleIcon.addEventListener('click', function () {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    toggleIcon.className = isPassword ? 'fa fa-eye' : 'fa fa-eye-slash';
  });

  // Login form validation and redirect
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = document.getElementById('login-email');
      const passwordValue = passwordInput.value.trim();
      const emailValue = emailInput ? emailInput.value.trim() : '';

      // Get error message elements
      const emailError = document.getElementById('login-email-error');
      const passwordError = document.getElementById('login-password-error');

      let valid = true;

      // Reset error messages
      if (emailError) emailError.textContent = '';
      if (passwordError) passwordError.textContent = '';

      // Basic email validation
      if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      valid = false;
      if (emailError) emailError.textContent = 'Please enter a valid email.';
      }

      // Password validation
      if (!passwordValue) {
      valid = false;
      if (passwordError) passwordError.textContent = 'Please enter your password.';
      }

      if (!valid) {
      return;
      }

      // Simulate successful login and redirect
      window.location.href = '/dashboard.html';
    });
  }
});