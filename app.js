const openToggle = document.querySelector('.header-icon')
const menu = document.querySelector('.header-sign')
const closeToggle = document.querySelector('.menu-close')
const navbar = document.querySelector('.header-main')
const arrowUp = document.querySelector('.ontop')
openToggle.addEventListener('click', function(e){
    e.preventDefault()
    menu.classList.add('isActive')
})
closeToggle.addEventListener('click', function(e){
    e.preventDefault()
    menu.classList.remove('isActive')
})
window.addEventListener('scroll', function(){
    if(window.scrollY > 1)
    {
        navbar.classList.add('activeNavbar')
        arrowUp.classList.add('activeUp')
    }
    else{
        navbar.classList.remove('activeNavbar')
        arrowUp.classList.remove('activeUp')
    }
})

const icons = document.getElementsByClassName('explore-icon')
console.log(icons)
for(let i = 0;i<icons.length;i++){
    icons[i].addEventListener('click', function(){
        if(icons[i].style.color == 'red')
        {
            icons[i].style.color = 'grey'
        }
        else{
            icons[i].style.color = 'red'
        }
    })
}
