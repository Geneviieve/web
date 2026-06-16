/* Shared interactions: nav, reveal-on-scroll, year */
(function(){
  // year
  var yr = document.getElementById('yr');
  if(yr) yr.textContent = new Date().getFullYear();

  // nav scroll state
  var nav = document.getElementById('nav');
  if(nav){
    var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 20); };
    onScroll(); window.addEventListener('scroll', onScroll, {passive:true});
  }

  // mobile menu
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if(toggle && links){
    toggle.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.addEventListener('click', function(e){ if(e.target.tagName==='A') links.classList.remove('open'); });
  }

  // reveal on scroll
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // scroll progress bar (injected)
  var prog = document.createElement('div'); prog.className = 'scroll-progress'; document.body.appendChild(prog);
  // back-to-top (injected)
  var top = document.createElement('button'); top.className = 'to-top'; top.setAttribute('aria-label','Back to top'); top.innerHTML = '↑'; document.body.appendChild(top);
  top.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  function onScroll2(){
    var h = document.documentElement, sc = h.scrollTop || document.body.scrollTop, max = h.scrollHeight - h.clientHeight;
    prog.style.width = (max > 0 ? (sc / max * 100) : 0) + '%';
    top.classList.toggle('show', sc > 480);
  }
  onScroll2(); window.addEventListener('scroll', onScroll2, {passive:true});

  // animated count-up for [data-count]
  var counters = document.querySelectorAll('[data-count]');
  if(counters.length){
    var cio = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting) return;
        var el = e.target, target = parseInt(el.dataset.count,10), suf = el.dataset.suffix || '', start = null, dur = 1300;
        function step(ts){ if(!start) start = ts; var p = Math.min((ts-start)/dur,1);
          el.textContent = Math.floor(p*target) + suf; if(p<1) requestAnimationFrame(step); else el.textContent = target + suf; }
        requestAnimationFrame(step); cio.unobserve(el);
      });
    }, {threshold:0.6});
    counters.forEach(function(c){ cio.observe(c); });
  }
})();
