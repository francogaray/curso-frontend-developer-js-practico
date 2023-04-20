const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuIco = document.querySelector('.menu-mobile-icon')
const mobileMenu = document.querySelector('.mobile-menu')
console.log(mobileMenu)

menuEmail.addEventListener('click', toggleDesktopMenu)
mobileMenuIco.addEventListener('click', tooggleMobileMenu )

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function tooggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

