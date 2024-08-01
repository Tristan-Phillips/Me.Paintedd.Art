window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('sticky');
        header.style.opacity = '0.5';
        header.style.transition = 'opacity 0.3s ease-in-out';
    } else {
        header.classList.remove('sticky');
        header.style.opacity = '1';
        header.style.transition = 'opacity 0.3s ease-in-out';
    }
});

