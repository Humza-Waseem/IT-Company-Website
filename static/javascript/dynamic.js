  ///////////////////////////////////   DYNAMIC TEXT   //////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('dynamicText');
  const words = ["Web Development", "Digital Marketing", "Data Analysis", "Graphic Design", "UI/UX Design"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[index];
    let displayedText = textElement.textContent;

    if (!isDeleting) {
      // Typing effect
      textElement.textContent = currentWord.slice(0, charIndex++);
      if (charIndex > currentWord.length) {
        charIndex--; // Delete the last character before switching words
        isDeleting = true;
      }
    } else {
      // Deleting effect
      textElement.textContent = currentWord.slice(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
        charIndex = 0; // Reset for the new word
      }
    }
    setTimeout(type, isDeleting ? 150 : 150); // Adjust delay between characters
  }

  setTimeout(type, 1000); // Start typing after a 1 second delay (adjust for desired pause)
});

  



  // <iframe class="elementor-background-video-embed" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Axix Technologies Video" width="640" height="360" src="https://www.youtube.com/embed/GxEZsyoYHGY?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Faxixtechnologies.com&amp;widgetid=1" id="widget2" data-gtm-yt-inspected-7="true" style="width: 1952px; height: 1098px;"></iframe>
  // #document (https://www.youtube.com/embed/GxEZsyoYHGY?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Faxixtechnologies.com&widgetid=1)