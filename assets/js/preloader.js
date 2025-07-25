function showPreloaderAndRedirect(targetPage) {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'flex';

  // Optional delay for effect
  setTimeout(() => {
    window.location.href = targetPage;
  }, 5000);
}
