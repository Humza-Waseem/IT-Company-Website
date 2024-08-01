///////////////////PRELOADER/////////////////////
// function counter_num() {
//   var count = setInterval(function () {
//       var c = parseInt($(".counter").text());
//       console.log("Current counter value: " + c); // Debug log
//       $(".counter").text((++c).toString());
//       if (c === 100) {
//           clearInterval(count);
//           $(".counter").addClass("hide");
//           $(".preloader").addClass("active");
//           console.log("Counter reached 100. Interval cleared and classes added."); // Debug log
//       }
//   }, 100); // Interval duration in milliseconds
// }
// counter_num();



var loader = document.getElementsByClassName('preloader')[0];

window.addEventListener('load', function() {
  setTimeout(function() {
    loader.classList.add('hidden');  
  }, 500); 
});
