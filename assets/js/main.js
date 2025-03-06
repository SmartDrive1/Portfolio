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
    reset: true
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

//Scroll skills
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{interval:200})
sr.reveal('.skills_img',{delay:200})

//Scroll Work
sr.reveal('.work__img',{interval:200})

//Scroll Contact
sr.reveal('.contact__input',{interval:200})