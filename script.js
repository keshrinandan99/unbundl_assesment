function toggleAcc(el) {
    const isActive = el.classList.contains('active');
    document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('active'));
    if (!isActive) el.classList.add('active');
  }
  function scrollReviews(dir) {
    const track = document.getElementById('reviewsTrack');
    track.scrollBy({ left: dir * 260, behavior: 'smooth' });
  }

  function toggleFaq(el) {
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var revealEls = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    if (!revealEls.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
    revealEls.forEach(function (el) { observer.observe(el); });
  });