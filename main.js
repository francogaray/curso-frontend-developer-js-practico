const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuIco = document.querySelector('.menu-mobile-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const navbarShoppingCart= document.querySelector('.navbar-shopping-cart')
const productDetailRight = document.querySelector('.product-detail-right')
const arrowCloseAsideProductDetail = document.querySelector('.arrow-close-aside-product-detail')
console.log(productDetailRight)

menuEmail.addEventListener('click', toggleDesktopMenu)
mobileMenuIco.addEventListener('click', tooggleMobileMenu )
navbarShoppingCart.addEventListener('click', toggleProductDetailAside)
arrowCloseAsideProductDetail.addEventListener('click', toggleProductDetailAside)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function tooggleMobileMenu(){
    const isProductDetailRightClosed = productDetailRight.classList.contains('inactive')
    if (!isProductDetailRightClosed) {
        productDetailRight.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleProductDetailAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    productDetailRight.classList.toggle('inactive')
}
