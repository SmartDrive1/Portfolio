const showMenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove the nav bar
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll
const sr= ScrollReveal({
    origin:'top',
    distance:'80px',
    duration: 2000,
    reset: false
})

// Scroll Home
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social-icon',{interval:200})

//Scroll About
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:400})

// Scroll Projects
sr.reveal('.projects__subtitle',{})
sr.reveal('.projects__images img',{interval:200})
sr.reveal('.project__date',{delay:200})
sr.reveal('.project__list li',{interval:200})

// Work Experience
sr.reveal('.work__box',{interval:300})

//Scroll skills
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{interval:200})
sr.reveal('.skills_img',{delay:200})

//Scroll Languages
sr.reveal('.languages__data',{interval:100})

//Scroll Contact
sr.reveal('.contact__input',{interval:200})

// Moving Nav Bar when Scrolled
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".nav__menu a"); // Select all nav links

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let id = entry.target.getAttribute("id");

                    // Remove active class from all links
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                    });

                    // Add active class to the current section's nav link
                    document
                        .querySelector(`.nav__menu a[href="#${id}"]`)
                        .classList.add("active");
                }
            });
        },
        { threshold: 0.6 } // Trigger when 60% of section is in view
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
