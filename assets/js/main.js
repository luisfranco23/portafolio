//navbar navbarBtn
const navbarBtn = document.getElementById('navbar__btn')

//navbar menú
const navbarMenu = document.getElementById('navbar')

let agregarActive = function (){
    navbarMenu.classList.toggle('active')
}
navbarBtn.addEventListener('click', agregarActive)

const link = document.getElementsByClassName('navbar__link')

let agregarActiveLinks = function (){
    document.getElementById("navbar__link").style.display = "none";
}


let agregarActiveLink = addEventListener('click',agregarActiveLinks)