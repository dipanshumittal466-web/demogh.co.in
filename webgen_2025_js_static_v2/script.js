
// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const mobile = document.querySelector('#mobile');
menuBtn?.addEventListener('click', () => {
  mobile.hidden = !mobile.hidden;
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
      mobile && (mobile.hidden = true);
    }
  });
});

// Reveal on scroll
const reveal = (els) => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(ent => {
      if(ent.isIntersecting){ ent.target.classList.add('reveal'); io.unobserve(ent.target); }
    });
  }, {threshold:.15});
  els.forEach(el => io.observe(el));
};
reveal(document.querySelectorAll('.card'));
reveal(document.querySelectorAll('.portfolio img'));

// Typing effect in hero
const target = document.querySelector('[data-typing]');
if (target){
  const phrases = ['Creative Websites', 'E‑Commerce Stores', 'Modern Web Apps'];
  let p=0, i=0, forward=true;
  setInterval(()=>{
    const text = phrases[p];
    if(forward){
      i++;
      if(i===text.length){ forward=false; setTimeout(()=>{},700); }
    } else {
      i--;
      if(i===0){ forward=true; p=(p+1)%phrases.length; }
    }
    target.textContent = text.slice(0,i);
  }, 100);
}
