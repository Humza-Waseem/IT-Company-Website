// document.addEventListener("DOMContentLoaded", function() {
//     // Function to check if an element is in viewport
//     function isInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     // Function to animate the counting
//     function animateCount(element, max) {
//         let current = 0;
//         const increment = Math.ceil(max / 200); // Adjust the increment value for smoother counting
//         const stepTime = 20; // Adjust the step time for slower increments

//         const timer = setInterval(() => {
//             current += increment;
//             if (current > max) {
//                 current = max;
//             }
//             element.querySelector('.count').innerText = current;
//             if (current >= max) {
//                 clearInterval(timer);
//             }
//         }, stepTime);
//     }

//     // Event listener for scroll
//     window.addEventListener('scroll', function() {
//         const counters = document.querySelectorAll('.data .number');

//         counters.forEach(counter => {
//             if (isInViewport(counter) && !counter.classList.contains('counted')) {
//                 counter.classList.add('counted');
//                 const max = parseInt(counter.getAttribute('data-max'), 10);
//                 animateCount(counter, max);
//             }
//         });
//     });

//     // Trigger the scroll event once to check if elements  are already in view
//     window.dispatchEvent(new Event('scroll'));
// });
document.addEventListener("DOMContentLoaded", function() {
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate the counting
    function animateCount(element, max) {
        let current = 0;
        let increment, stepTime;

        if (max <= 10) {
            increment = 1; // Slow increment for small numbers
            stepTime = 200; // Slower step time for small numbers
        } else if (max <= 100) {
            increment = Math.ceil(max / 100); // Medium increment for medium numbers
            stepTime = 50; // Medium step time for medium numbers
        } else {
            increment = Math.ceil(max / 200); // Faster increment for large numbers
            stepTime = 20; // Faster step time for large numbers
        }

        const timer = setInterval(() => {
            current += increment;
            if (current > max) {
                current = max;
            }
            element.querySelector('.count').innerText = current;
            if (current >= max) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Event listener for scroll
    window.addEventListener('scroll', function() {
        const counters = document.querySelectorAll('.data .number');

        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('counted')) {
                counter.classList.add('counted');
                const max = parseInt(counter.getAttribute('data-max'), 10);
                animateCount(counter, max);
            }
        });
    });

    // Trigger the scroll event once to check if elements are already in view
    window.dispatchEvent(new Event('scroll'));
});
