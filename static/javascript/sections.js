document.addEventListener("DOMContentLoaded", function() {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        const element = document.querySelector('.about-five-quote');
        if (isInViewport(element) && !element.classList.contains('slide-in')) {
            element.classList.add('slide-in');
        }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Optional: handle resize events
    handleScroll(); // Trigger on page load
});



document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    const target = document.querySelector(".sections .secRight .sectionTag");
    observer.observe(target);
  });



document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.achievement-single').forEach((element, index) => {
            setTimeout(() => {
              element.classList.add('active');
            }, index * 200); // Adjust delay as needed
          });
        }
      });
    });
  
    const target = document.querySelector(".swiper-wrapper");
    observer.observe(target);
  });
  