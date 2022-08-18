const showblog = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-blog')
        })
    }
}
showblog('nav-toggle','nav-blog')


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navblog = document.getElementById('nav-blog')
    // When we click on each nav__link, we remove the show-blog class
    navblog.classList.remove('show-blog')
}
navLink.forEach(n => n.addEventListener('click', linkAction)) 


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__blog a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__blog a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 200)
    nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header")
}

window.addEventListener("scroll", scrollHeader)


function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    if(this.scrollY >= 560)
    scrollTop.classList.add("scroll-top");
    else scrollTop.classList.remove("scroll-top")
}

window.addEventListener("scroll", scrollTop)


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'bx-sun' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}




themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '2000',
    reset: true
});

sr.reveal('.home__data, .home img, .about__data, .about img, .services__content, .blog__content, .contact__data, .contact__button, .footer__content'),{
    interval: 200
}