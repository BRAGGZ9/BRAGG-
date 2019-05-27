window.sr = ScrollReveal();

sr.reveal('.projectBox .card', {
    duration: 2000
});

sr.reveal('.headerText', {
    duration: 2000
})

sr.reveal('.skills-box', {
    duration: 2000
})

// Navigation functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});