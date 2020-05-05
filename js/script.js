function scrollPosition(){
    var scroll = window.scrollY;
    if (scroll < 200) {
        document.getElementById("nav-bar").classList.add('nav-fixed--bigger')
        document.getElementById("scroll").style="display:block";
    } else {
        document.getElementById("nav-bar").classList.remove('nav-fixed--bigger')
        document.getElementById("scroll").style="display:none";
    }
}
document.addEventListener("DOMContentLoaded", scrollPosition);
window.addEventListener('scroll', scrollPosition);

lightGallery(document.getElementById('lightgallery')); 

const mainNav = document.getElementById('main-nav');
const navBar = document.getElementById('nav-bar')
const hamburger = document.getElementById("hamburger");
const links = document.querySelectorAll(".nav-fixed__a")

hamburger.addEventListener('click', e => {
    e.preventDefault();
  mainNav.classList.toggle('active');
  navBar.classList.toggle('white');
});

links.forEach(link=>{
    link.addEventListener("click", ()=>{
        mainNav.classList.remove('active');
        navBar.classList.remove('white');
    })
})