document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.login-link');
  const preloader = document.getElementById('preloader');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('data-target');
      preloader.classList.add('active');

      setTimeout(() => {
        window.location.href = target;
      }, 5000);
    });
  });
});
