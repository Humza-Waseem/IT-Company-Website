  ///////////////////////////////////   DYNAMIC TEXT   //////////////////////////////////////
  document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('dynamicText');
    const words = ["Web Development", "Digital Marketing", "Data Analysis", "Graphic Design", "Content Creation"];
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
          isDeleting = true;
          setTimeout(type, 1000); // Pause before starting to delete
          return;
        }
      } else {
        // Deleting effect
        textElement.textContent = currentWord.slice(0, charIndex--);
        if (charIndex < 0) {
          isDeleting = false;
          index = (index + 1) % words.length;
          setTimeout(type, 500); // Pause before starting to type the next word
          return;
        }
      }
      setTimeout(type, isDeleting ? 50 : 100); // Adjust speed of typing and deleting
    }
  
    setTimeout(type, 500); // Start typing after a delay
  });
  