// /////////////////   navbar ///////////////////////

// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navBar');
//     if (window.scrollY > 0) {
//         if (window.scrollY > 0) {
//             navbar.classList.add('navbar-scrolled');
//             console.log(navbar.classList); // Log the class list to the console
//         }
//         // navbar.classList.add('navbar-scrolled');
//     } else {
//         navbar.classList.remove('navbar-scrolled');
//     }
// });

// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navBar');
//     if (window.scrollY > 0) {
//         if (window.scrollY > 0) {
//             navbar.classList.add('navbar-scrolled-logo');
//             console.log(navbar.classList); // Log the class list to the console
//         }
//         // navbar.classList.add('navbar-scrolled');
//     } else {
//         navbar.classList.remove('navbar-scrolled-logo');
//     }
// });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navBar');

    // Add or remove classes based on scroll position
    // if (window.scrollY > 0) {
    //     navbar.classList.add('navbar-scrolled');
    //     navbar.classList.add('navbar-scrolled-logo');
    // } else {
    //     navbar.classList.remove('navbar-scrolled');
    //     navbar.classList.remove('navbar-scrolled-logo');
    // }

    // Hide or show navbar based on specific scroll positions
    if (window.scrollY > 100 && window.scrollY < 700) {
        navbar.classList.add('hidden');
        navbar.classList.add('navbar-scrolled');
    } else if (window.scrollY >= 700) {
        navbar.classList.remove('hidden');
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('hidden');
        navbar.classList.remove('navbar-scrolled');
    }

    // Log the class list to the console for debugging
    console.log(navbar.classList);
});


// /////////////////   SECTION  ANIMATION ///////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//     const elements = document.querySelectorAll('.secRight .hidden');

//     function isInViewport(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function checkElements() {
//         elements.forEach(element => {
//             if (isInViewport(element)) {
//                 element.classList.add('visible');
//             }
//         });
//     }

//     window.addEventListener('scroll', checkElements);
//     window.addEventListener('resize', checkElements);

//     // Initial check
//     checkElements();
// });







//////////////////////  SEARCH BAR ELONGATION ///////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    const closeIcon = document.getElementById('closeIcon');
  
    searchButton.addEventListener('click', function() {
      searchBar.classList.add('expanded');
      searchInput.focus();
    });
  
    closeIcon.addEventListener('click', function() {
      searchBar.classList.remove('expanded');
      searchInput.value = '';
    });
  
    // Optionally close the search bar when clicking outside
    document.addEventListener('click', function(event) {
      if (!searchBar.contains(event.target) && !searchButton.contains(event.target)) {
        searchBar.classList.remove('expanded');
        searchInput.value = '';
      }
    });
  });
  









//////////////////////  Get Started Button ///////////////////////
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-getStarted').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of button (form submission, etc.)
        
        const windowHeight = window.innerHeight;
        const targetPosition = windowHeight;

        function smoothScroll(target, duration) {
            const start = window.pageYOffset;
            const distance = target - start;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, start, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }

        smoothScroll(targetPosition, 1000);
    });
});




////////////////////////////SECTIONS ANIMATION//////////////////////////















//////////////////////////////////   COUROUSAL FOR CLIENT TESTIMONIALS  ////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const nextButton = document.getElementById('carousel-next');
    const prevButton = document.getElementById('carousel-prev');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    // Auto-scroll functionality
    setInterval(function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }, 3000); // Change the image every 3 seconds
});


















////////////////////////////////    SECTIONS LEFT AND RIGHT  ////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const secRight = document.querySelector('.secRight');

    function checkVisibility() {
      const rect = secRight.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

      if (rect.top <= windowHeight) {
        secRight.classList.add('visible');
      }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check in case the element is already in view on load
    checkVisibility();
  });

  







////////////////////////MAGIC CURSOR////////////////////////

/**
 * Magic Cursor JS 
 */

// (function($) { "use strict";
//   if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
//       if ($(window).width() > 1024) {
//           $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');
//           if ($("a.magnetic-item").length) {
//               $("a.magnetic-item").addClass("not-hide-cursor");
//           }
//           var $mouse = { x: 0, y: 0 }; // Cursor position
//           var $pos = { x: 0, y: 0 }; // Cursor position
//           var $ratio = 0.15; // delay follow cursor
//           var $active = false;
//           var $ball = $("#ball");
//           var $ballWidth = 36; // Ball default width
//           var $ballHeight = 36; // Ball default height
//           var $ballOpacity = 0.5; // Ball default opacity
//           var $ballBorderWidth = 2; // Ball default border width
//           gsap.set($ball, {  // scale from middle and style ball
//               xPercent: -50,
//               yPercent: -50,
//               width: $ballWidth,
//               height: $ballHeight,
//               borderWidth: $ballBorderWidth,
//               opacity: $ballOpacity
//           });
//           document.addEventListener("mousemove", mouseMove);
//           function mouseMove(e) {
//               $mouse.x = e.clientX;
//               $mouse.y = e.clientY;
//           }
//           gsap.ticker.add(updatePosition);
//           function updatePosition() {
//               if (!$active) {
//                   $pos.x += ($mouse.x - $pos.x) * $ratio;
//                   $pos.y += ($mouse.y - $pos.y) * $ratio;
//                   gsap.set($ball, { x: $pos.x, y: $pos.y });
//               }
//           }
//           $(".magnetic-wrap").mousemove(function (e) {
//               parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
//               callParallax(e, this);
//           });
//           function callParallax(e, parent) {
//               parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25); // magnetic area = higher number is more attractive
//           }
//           function parallaxIt(e, parent, target, movement) {
//               var boundingRect = parent.getBoundingClientRect();
//               var relX = e.clientX - boundingRect.left;
//               var relY = e.clientY - boundingRect.top;
//               gsap.to(target, {
//                   duration: 0.3,
//                   x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
//                   y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
//                   ease: Power2.easeOut
//               });
//           }
//           function parallaxCursor(e, parent, movement) {
//               var rect = parent.getBoundingClientRect();
//               var relX = e.clientX - rect.left;
//               var relY = e.clientY - rect.top;
//               $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
//               $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
//               gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
//           }
//           // Magic cursor behavior
//           // ======================
//           // Magnetic item hover.
//           $(".magnetic-wrap").on("mouseenter mouseover", function (e) {
//               $ball.addClass("magnetic-active");
//               gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
//               $active = true;
//           }).on("mouseleave", function (e) {
//               $ball.removeClass("magnetic-active");
//               gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
//               gsap.to(this.querySelector(".magnetic-item"), { duration: 0.3, x: 0, y: 0, clearProps: "all" });
//               $active = false;
//           });
//           // Alternative cursor style on hover.
//           $(".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a")
//               .not(".magnetic-item") // omit from selection.
//               .on("mouseenter", function () {
//                   gsap.to($ball, {
//                       duration: 0.3,
//                       borderWidth: 0,
//                       opacity: 0.2,
//                       backgroundColor: "#CCC",
//                       width: "100px",
//                       height: "100px",
//                   });
//               }).on("mouseleave", function () {
//                   gsap.to($ball, {
//                       duration: 0.3,
//                       borderWidth: $ballBorderWidth,
//                       opacity: $ballOpacity,
//                       backgroundColor: "transparent",
//                       width: $ballWidth,
//                       height: $ballHeight,
//                       clearProps: "backgroundColor"
//                   });
//               });
//           // Overlay menu caret hover.
//           $(".tt-ol-submenu-caret-wrap .magnetic-wrap").on("mouseenter", function () {
//               gsap.to($ball, { duration: 0.3, scale: 0.6, borderWidth: 3 });
//           }).on("mouseleave", function () {
//               gsap.to($ball, { duration: 0.3, scale: 1, borderWidth: $ballBorderWidth });
//           });
//           // Cursor view on hover (data attribute "data-cursor="...").
//           $("[data-cursor]").each(function () {
//               $(this).on("mouseenter", function () {
//                   $ball.addClass("ball-view").append('<div class="ball-view-inner"></div>');
//                   $(".ball-view-inner").append($(this).attr("data-cursor"));
//                   gsap.to($ball, { duration: 0.3, yPercent: -75, width: 85, height: 85, opacity: 1, borderWidth: 0 });
//                   gsap.to(".ball-view-inner", { duration: 0.3, scale: 1, autoAlpha: 1 });
//               }).on("mouseleave", function () {
//                   gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity, borderWidth: $ballBorderWidth });
//                   $ball.removeClass("ball-view").find(".ball-view-inner").remove();
//               });
//               $(this).addClass("not-hide-cursor");
//           });
//           // Cursor drag on hover (class "cursor-drag"). For Swiper sliders.
//           $(".swiper").each(function () {
//               if ($(this).parent().attr("data-simulate-touch") == "true") {
//                   if ($(this).parent().hasClass("cursor-drag")) {
//                       $(this).on("mouseenter", function () {
//                           $ball.append('<div class="ball-drag"></div>');
//                           gsap.to($ball, { duration: 0.3, width: 60, height: 60, opacity: 1 });
//                       }).on("mouseleave", function () {
//                           $ball.find(".ball-drag").remove();
//                           gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
//                       });
//                       $(this).addClass("not-hide-cursor");
//                       // Ignore "data-cursor" on hover.
//                       $(this).find("[data-cursor]").on("mouseenter mouseover", function () {
//                           $ball.find(".ball-drag").remove();
//                           return false;
//                       }).on("mouseleave", function () {
//                           $ball.append('<div class="ball-drag"></div>');
//                           gsap.to($ball, { duration: 0.3, width: 60, height: 60, opacity: 1 });
//                       });
//                   }
//               }
//           });
//           // Cursor drag on mouse down / click and hold effect (class "cursor-drag-mouse-down"). For Swiper sliders.
//           $(".swiper").each(function () {
//               if ($(this).parent().attr("data-simulate-touch") == "true") {
//                   if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
//                       $(this).on("mousedown pointerdown", function (e) {
//                           if (e.which === 1) { // Affects the left mouse button only!
//                               gsap.to($ball, { duration: 0.2, width: 60, height: 60, opacity: 1 });
//                               $ball.append('<div class="ball-drag"></div>');
//                           }
//                       }).on("mouseup pointerup", function () {
//                           $ball.find(".ball-drag").remove();
//                           if ($(this).find("[data-cursor]:hover").length) {
//                           } else {
//                               gsap.to($ball, { duration: 0.2, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
//                           }
//                       }).on("mouseleave", function () {
//                           $ball.find(".ball-drag").remove();
//                           gsap.to($ball, { duration: 0.2, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
//                       });
//                       // Ignore "data-cursor" on mousedown.
//                       $(this).find("[data-cursor]").on("mousedown pointerdown", function () {
//                           return false;
//                       });
//                       // Ignore "data-cursor" on hover.
//                       $(this).find("[data-cursor]").on("mouseenter mouseover", function () {
//                           $ball.find(".ball-drag").remove();
//                           return false;
//                       });
//                   }
//               }
//           });
//           // Cursor close on hover.
//           $(".cursor-close").each(function () {
//               $(this).addClass("ball-close-enabled");
//               $(this).on("mouseenter", function () {
//                   $ball.addClass("ball-close-enabled");
//                   $ball.append('<div class="ball-close">Close</div>');
//                   gsap.to($ball, { duration: 0.3, yPercent: -75, width: 80, height: 80, opacity: 1 });
//                   gsap.from(".ball-close", { duration: 0.3, scale: 0, autoAlpha: 0 });
//               }).on("mouseleave click", function () {
//                   $ball.removeClass("ball-close-enabled");
//                   gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
//                   $ball.find(".ball-close").remove();
//               });
//               // Hover on "cursor-close" inner elements.
//               $(".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor")
//                   .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
//                   .on("mouseenter", function () {
//                       $ball.removeClass("ball-close-enabled");
//                   }).on("mouseleave", function () {
//                       $ball.addClass("ball-close-enabled");
//                   });
//           });
//           // Blog interactive title link hover.
//           $(".blog-interactive-item").each(function () {
//               var $biItem = $(this);
//               if ($biItem.find(".bi-item-image").length) {
//                   $biItem.find(".bi-item-title a").on("mouseenter mouseover", function () {
//                       $("#magic-cursor").addClass("blog-interactive-hover-on");
//                       $biItem.find(".bi-item-image").appendTo($ball);
//                       gsap.to($ball, { duration: 0.3, width: "20vw", height: "20vw", opacity: 1 });
//                   }).on("mouseleave", function () {
//                       $("#magic-cursor").removeClass("blog-interactive-hover-on");
//                       $ball.find(".bi-item-image").appendTo($biItem);
//                       gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
//                   });
//                   $biItem.find(".bi-item-title a").addClass("not-hide-cursor");
//                   $biItem.addClass("bi-item-image-on");
//               }
//           });
//           // ================================================================
//           // Scroll between anchors 
//           // Requires "Smooth Scrollbar" (https://github.com/idiotWu/smooth-scrollbar/blob/develop/docs/api.md#scrollbarscrollintoview)
//           // ================================================================
//           $('a[href^="#"]')
//               .not('[href$="#"]') // omit from selection
//               .not('[href$="#0"]') // omit from selection
//               .on("click", function () {
//                   var target = this.hash;
//                   // If fixed header position enabled.
//                   if ($("#tt-header").hasClass("tt-header-fixed")) {
//                       var $offset = $("#tt-header").height();
//                   } else {
//                       var $offset = 0;
//                   }
//                   // You can use data attribute (for example: data-offset="100") to set top offset in HTML markup if needed. 
//                   if ($(this).data("offset") != undefined) $offset = $(this).data("offset");
//                   if (!isMobile) { // Not for mobile devices!
//                       if ($("body").hasClass("tt-smooth-scroll")) {
//                           var topY = $(target).offset().top - $("#scroll-container > .scroll-content").offset().top - $offset;
//                           var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
//                           gsap.to($scrollbar, { duration: 1.5, scrollTo: { y: topY, autoKill: true }, ease: Expo.easeInOut });
//                       } else {
//                           var topY = $(target).offset().top - $("body").offset().top - $offset;
//                           $("html,body").animate({ scrollTop: topY }, 800);
//                       }
//                   } else {
//                       var topY = $(target).offset().top - $("body").offset().top - $offset;
//                       $("html,body").animate({ scrollTop: topY }, 800);
//                   }
//                   return false;
//               });
//           // ================================================================
//           // Scroll to top 
//           // Requires "GSAP ScrollToPlugin" (https://greensock.com/docs/v2/Plugins/ScrollToPlugin)
//           // ================================================================
//           $(".scroll-to-top").on("click", function () {
//               if (!isMobile) { // Not for mobile devices!
//                   if ($("body").hasClass("tt-smooth-scroll")) {
//                       var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
//                       gsap.to($scrollbar, { duration: 1.5, scrollTo: { y: 0, autoKill: true }, ease: Expo.easeInOut });
//                   } else {
//                       $("html,body").animate({ scrollTop: 0 }, 800);
//                   }
//               } else {
//                   $("html,body").animate({ scrollTop: 0 }, 800);
//               }
//               return false;
//           });
//           // Show/hide magic cursor
//           // =======================
//           // Hide on hover.
//           $("a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor") // class "hide-cursor" is for global use.
//               .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
//               .not(".cursor-alter") // omit from selection
//               .not(".tt-main-menu-list > li > a") // omit from selection
//               .not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
//               .on("mouseenter", function () {
//                   gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
//               }).on("mouseleave", function () {
//                   gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
//               });
//           // Hide on click.
//           $("a")
//               .not('[target="_blank"]') // omit from selection.
//               .not('[href^="#"]') // omit from selection.
//               .not('[href^="mailto"]') // omit from selection.
//               .not('[href^="tel"]') // omit from selection.
//               .not(".lg-trigger") // omit from selection.
//               .not(".tt-btn-disabled") // omit from selection.
//               .on('click', function () {
//                   gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
//               });
//           // Show/hide on document leave/enter.
//           $(document).on("mouseleave", function () {
//               gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
//           }).on("mouseenter", function () {
//               gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
//           });
//           // Show as the mouse moves.
//           $(document).mousemove(function () {
//               gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
//           });
//       }
//   }
  
//   }(jQuery));






