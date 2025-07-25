document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const content = document.querySelector('.all-dashboard');

        //  hide the preloader and display content

        preloader.style.display = 'none';
        content.style.display = 'flex';
    }, 4000)
});