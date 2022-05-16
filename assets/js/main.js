//navbar navbarBtn
const navbarBtn = document.getElementById('navbar__btn')

//navbar menú
const navbarMenu = document.getElementById('navbar')

let agregarActive = function (){
    navbarMenu.classList.toggle('active')
}
navbarBtn.addEventListener('click', agregarActive)