const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenuIco = document.querySelector('.menu-mobile-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const navbarShoppingCart= document.querySelector('.navbar-shopping-cart')
const productDetailRight = document.querySelector('.product-detail-right')
const arrowCloseAsideProductDetail = document.querySelector('.arrow-close-aside-product-detail')
const cardsContainer = document.querySelector('.cards-container')
console.log(cardsContainer)

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

const productList= []
productList.push({
    nombre:'Bike',
    precio:180,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    nombre:'Chair',
    precio:90,
    image:"https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    nombre:'Mirror',
    precio:115,
    image:"https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},{
    nombre:'Bike',
    precio:180,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    nombre:'Chair',
    precio:90,
    image:"https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    nombre:'Mirror',
    precio:115,
    image:"https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

productList.push({
    nombre:'Bike',
    precio:180,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    nombre:'Chair',
    precio:90,
    image:"https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    nombre:'Mirror',
    precio:115,
    image:"https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},{
    nombre:'Bike',
    precio:180,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    nombre:'Chair',
    precio:90,
    image:"https://images.pexels.com/photos/4273433/pexels-photo-4273433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    nombre:'Mirror',
    precio:115,
    image:"https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

function renderProducts(array){
    for (array of productList){
        console.log(array.nombre)
        const productCard = document.createElement ('div');
        productCard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src', array.image)

        const productInfo = document.createElement ('div');
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement ('div');

        const productPrice = document.createElement ('p')
        productPrice.innerText= `$ ${array.precio}`
        const productName = document.createElement ('p');
        productName.innerText = array.nombre

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement ('figure');
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)