/* Interaksi ringan web story: navigasi aktif dan animasi masuk. Tidak ada lagi data provinsi, kuadran, peta, atau Cook's distance dari rancangan underreporting lama. */
(() => {
  const links = [...document.querySelectorAll('nav .links a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-25% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));
  }
  const revealItems = document.querySelectorAll('.method-step, .metric-card, .stat, table.results tr');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    revealItems.forEach(item => { item.classList.add('reveal'); revealObserver.observe(item); });
  }
})();
