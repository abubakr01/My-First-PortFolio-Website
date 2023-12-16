var hamburger = document.querySelector('.icon-hamburger')
var close = document.querySelector('.icon-close')
var Nav = document.querySelector('nav ul')

hamburger.addEventListener('click', function(){
    hamburger.style.display = 'none'
    close.style.display = 'block'
    Nav.style.display = 'block'

})
close.addEventListener('click', function(){
    hamburger.style.display = 'block'
    close.style.display = 'none'
    Nav.style.display = 'none'

})