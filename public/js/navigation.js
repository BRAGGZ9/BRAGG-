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

//Navigation functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});

//Navigation links active
const navigation = document.getElementById("navigation");
const links = navigation.getElementsByClassName("nav-item");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        var currentLink = document.getElementsByClassName("active");
        if (currentLink.length > 0) {
            currentLink[0].className = currentLink[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}



