burger = document.querySelector('.hamburger')
navbar = document.querySelector('.navBar')
navList = document.querySelector('.nav-list')
rightNav= document.querySelector('.nav-right')


burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-responsive');
    rightNav.classList.toggle('v-class-responsive');
    navbar.classList.toggle('h-nav-responsive');
})

document.addEventListener('scroll', function() {
    const hamburger = document.querySelector('.hamburger');
    const scrollThreshold = window.innerHeight * 0.1; // 10% of the window height
  
    if (window.scrollY > scrollThreshold) {
      hamburger.classList.add('hidden');
    } else {
      hamburger.classList.remove('hidden');
    }
  });
  
  