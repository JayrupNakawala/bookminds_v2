const progressBar = document.querySelector('.reading-progress-bar');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  progressBar.style.width = `${scrolled * 100}%`; // Convert to percentage
});
