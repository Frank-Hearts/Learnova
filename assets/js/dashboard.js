document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const content = document.querySelector('.all-dashboard');

        //  hide the preloader and display content

        preloader.style.display = 'none';
        content.style.display = 'flex';
    }, 4000)
});

const leftBar = document.querySelector('.sidebar-2');
const bars = document.getElementById('toggle-icon');
bars.addEventListener('click', () => {
    leftBar.classList.toggle('show');
    bars.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});