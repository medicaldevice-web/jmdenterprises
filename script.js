// Bold interactive effects: tilt on hover + simple parallax on scroll
document.addEventListener('DOMContentLoaded', function(){
  // Tilt effect (vanilla)
  const tiltEls = document.querySelectorAll('[data-tilt]');
  tiltEls.forEach(el=>{
    el.addEventListener('mousemove', e=>{
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateX(${ -y * 6 }deg) rotateY(${ x * 6 }deg) translateZ(8px)`;
      el.style.boxShadow = `${ -x * 12 }px ${ -y * 12 }px 30px rgba(0,0,0,0.35)`;
    });
    el.addEventListener('mouseleave', ()=>{ el.style.transform='none'; el.style.boxShadow='none'; });
  });

  // Parallax simple
  const hero = document.querySelector('.split-hero .right');
  window.addEventListener('scroll', ()=>{
    const sc = window.scrollY;
    if(hero) hero.style.transform = `translateY(${sc * 0.06}px)`;
  });


  document.getElementById('contact2').addEventListener('submit', function(e){
    //this.reset();
  });
});


// Hero-card slider
document.addEventListener('DOMContentLoaded', function(){
  const slider = document.querySelector('.hero-card.slider');
  if (slider) {
    const slides = slider.querySelector('.slides');
    const slideCount = slider.querySelectorAll('.slide').length;
    let index = 0;

    function showSlide(i) {
      index = (i + slideCount) % slideCount;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    slider.querySelector('.prev').addEventListener('click', ()=>showSlide(index - 1));
    slider.querySelector('.next').addEventListener('click', ()=>showSlide(index + 1));

    // Auto-slide every 4s
    setInterval(()=>showSlide(index + 1), 4000);
  }
});


// Product slider
document.addEventListener('DOMContentLoaded', function(){
  const slider = document.querySelector('.product-slider.slider');
  if (slider) {
    const slides = slider.querySelector('.slides');
    const slideCount = slider.querySelectorAll('.slide').length;
    let index = 0;

    function showSlide(i) {
      index = (i + slideCount) % slideCount;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    slider.querySelector('.prev').addEventListener('click', ()=>showSlide(index - 1));
    slider.querySelector('.next').addEventListener('click', ()=>showSlide(index + 1));

    // Auto-slide every 5s
    setInterval(()=>showSlide(index + 1), 5000);
  }
});
