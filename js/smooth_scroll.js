const smoothScrollLinks = document.querySelectorAll('.smooth_scroll');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default jump

    const targetSection = document.getElementById(this.getAttribute('href').slice(1)); // Get target element

    const scrollOptions = {
      behavior: "smooth",
      block: "start" 
    };

    targetSection.scrollIntoView(scrollOptions); // Smooth scroll to target
  });
});
