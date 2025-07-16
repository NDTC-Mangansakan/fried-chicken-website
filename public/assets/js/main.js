// Navbar
const containerNavList = document.querySelector('#md-container')
const closeNavBtn = document.querySelector('#close-navbar-btn')
const openNavBtn = document.querySelector('#open-navbar-btn')

openNavBtn.addEventListener('click', e => {
    e.stopPropagation()

    containerNavList.classList.add('right-0')
    containerNavList.classList.remove('-right-[280px]')
})

closeNavBtn.addEventListener('click', e => {
    e.stopPropagation()

    containerNavList.classList.remove('right-0')
    containerNavList.classList.add('-right-[280px]')
})

containerNavList.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
        e.stopPropagation()
        containerNavList.classList.remove('right-0')
        containerNavList.classList.add('-right-[280px]')
    }
})


//AOS

const sr = ScrollReveal({
    delay: 300,
    opacity:0,
    distance:'100px',
    origin: 'bottom',
    // reset:true,
    viewFactor:.4
})

// Main
sr.reveal('.home-img-container', {origin: 'right', delay: 1800})
sr.reveal('.home-data-text, .about-data-text', {interval:300})
sr.reveal('.about-img-1', {origin: 'right', delay: 1500})
sr.reveal('.about-img-2', {origin: 'left', delay: 1500})
sr.reveal('.order-1-data', {origin: 'right', delay: 600})
sr.reveal('.order-2-data', {origin: 'left', delay: 600})
sr.reveal('.order-1-img', {origin: 'left', delay: 300})
sr.reveal('.order-2-img', {origin: 'right', delay: 300})
sr.reveal('.combo-lg-text-container')
sr.reveal('.combo-img', {delay: 600})
sr.reveal('.combo-num-container', {delay: 900})
sr.reveal('.combo-data', {delay: 1200})
sr.reveal('.contact-text, .about-data-text', {interval:300})
sr.reveal('.contact-data-container', {origin: 'right', delay: 1500})

// Overlays
sr.reveal('.home-overlay', {interval:100, rotate:{z: 90}, delay: 1500})
sr.reveal('.contact-overlay', {interval:100, rotate:{z:90}, delay:1500})