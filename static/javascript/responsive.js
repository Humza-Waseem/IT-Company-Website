burger = document.querySelector('.hamburger')
navbar = document.querySelector('.navBar')
navList = document.querySelector('.nav-list')
rightNav= document.querySelector('.nav-right')


burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-responsive');
    rightNav.classList.toggle('v-class-responsive');
    navbar.classList.toggle('h-nav-responsive');
})