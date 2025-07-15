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