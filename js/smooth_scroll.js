const learnMoreBtn = document.querySelector('.smooth_scroll');

learnMoreBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default jump

  const targetSection = document.getElementById(this.getAttribute('href').slice(1)); // Get target element

  const scrollOptions = {
    behavior: "smooth",
    block: "start" // Optionally adjust scroll position (start, center, end)
  };

  targetSection.scrollIntoView(scrollOptions); // Smooth scroll to target
});