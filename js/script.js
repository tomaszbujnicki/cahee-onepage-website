$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top < 200) {
        $('.nav-fixed').addClass('nav-fixed--bigger');
        $('#scroll').hide();
    } else {
        $('.nav-fixed').removeClass('nav-fixed--bigger');
        $('#scroll').show();
    }
});

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