
    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Make sure video plays on mobile (most mobiles block autoplay unless muted)
    (function ensureVideoPlays(){
      const vid = document.getElementById('heroVideo');
      if (!vid) return;
      vid.muted = true;
      const tryPlay = () => vid.play().catch(()=>{ /* ignore */ });
      tryPlay();
      document.addEventListener('click', tryPlay, { once: true, passive: true });
    })();

    // Mobile nav toggle

        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
        });


    // Simple fade-in with IntersectionObserver
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section-title, .service, .project-card, .team-member, .testi').forEach(el => io.observe(el));



    const scrollBtn = document.getElementById("scrollTopBtn");

// Show button after scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Scroll to top smoothly
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});