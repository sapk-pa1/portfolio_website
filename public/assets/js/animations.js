export function initAnimations() {
  const cards = document.querySelectorAll(
    '.blog-card, .skill-card, .project-card'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  cards.forEach(card => observer.observe(card));
}
