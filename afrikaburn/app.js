/* ================================================================
   AfrikaBurn Companion — interactions
   ================================================================ */

(function () {

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    entries => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Countdown to AfrikaBurn 2026: 27 April 2026, 12:00 SAST ---------- */
  // SAST = UTC+2
  const target = new Date(Date.UTC(2026, 3, 27, 10, 0, 0)); // 27 Apr 2026 12:00 SAST

  const dEl = document.getElementById('cd-d');
  const hEl = document.getElementById('cd-h');
  const mEl = document.getElementById('cd-m');
  const sEl = document.getElementById('cd-s');

  const pad = n => String(Math.max(0, Math.floor(n))).padStart(2, '0');

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target.getTime() - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (dEl) dEl.textContent = pad(d);
    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- Hero dust particles ---------- */
  const canvas = document.getElementById('dust');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles = [];
    const N = 55;

    function resize() {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < N; i++) {
      particles.push({
        x: Math.random() * 1200,
        y: Math.random() * 800,
        r: 0.6 + Math.random() * 2.2,
        vx: 0.15 + Math.random() * 0.5,
        vy: -0.05 + Math.random() * 0.1,
        a: 0.1 + Math.random() * 0.35
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy + Math.sin(p.x * 0.01) * 0.08;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.85 0.08 60 / ${p.a * 0.7})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ---------- Hero parallax on sun ---------- */
  const sun = null;
  const heroTitle = document.querySelector('.hero-title');
  const heroPhoto = document.querySelector('.hero-photo');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (heroPhoto) heroPhoto.style.transform = `translateY(${y * 0.25}px) scale(${1 + y * 0.0003})`;
    if (heroTitle) heroTitle.style.transform = `translateY(${y * 0.08}px)`;
  }, { passive: true });

  /* ---------- Phone slider ---------- */
  const slider = document.getElementById('phone-slider');
  const dots = document.querySelectorAll('#phone-dots .phone-dot');
  const listItems = document.querySelectorAll('#exp-list li');
  let current = 0;
  let autoTimer;

  function go(i, { manual = false } = {}) {
    current = (i + 3) % 3;
    if (slider) slider.style.transform = `translateX(${-current * 100}%)`;
    dots.forEach(d => d.classList.toggle('on', Number(d.dataset.idx) === current));
    listItems.forEach(li => li.classList.toggle('on', Number(li.dataset.idx) === current));
    if (manual) resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => go(current + 1), 4200);
  }

  dots.forEach(d => d.addEventListener('click', () => go(Number(d.dataset.idx), { manual: true })));
  listItems.forEach(li => li.addEventListener('click', () => go(Number(li.dataset.idx), { manual: true })));

  // swipe
  let sx = null;
  const phoneEl = document.querySelector('.phone');
  if (phoneEl) {
    phoneEl.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
    phoneEl.addEventListener('touchend', e => {
      if (sx == null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1), { manual: true });
      sx = null;
    });
  }

  // pause auto when off-screen
  const expSection = document.getElementById('experience');
  if (expSection) {
    const expIo = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting) resetAuto();
        else clearInterval(autoTimer);
      }
    }, { threshold: 0.25 });
    expIo.observe(expSection);
  }

  /* ---------- Interactive map: pan + zoom ---------- */
  const mapwrap = document.getElementById('mapwrap');
  const mapImg = mapwrap && mapwrap.querySelector('.map-img');
  if (mapwrap && mapImg) {
    let scale = 1, tx = 0, ty = 0;
    let panning = false, sx = 0, sy = 0, stx = 0, sty = 0;
    const MIN = 1, MAX = 5;

    function apply() {
      mapImg.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    }
    function clampPan() {
      const r = mapwrap.getBoundingClientRect();
      const maxX = r.width * (scale - 1);
      const maxY = r.height * (scale - 1);
      tx = Math.max(-maxX, Math.min(0, tx));
      ty = Math.max(-maxY, Math.min(0, ty));
    }

    function zoomAt(factor, cx, cy) {
      const r = mapwrap.getBoundingClientRect();
      const px = cx - r.left, py = cy - r.top;
      const prev = scale;
      scale = Math.max(MIN, Math.min(MAX, scale * factor));
      const k = scale / prev;
      tx = px - (px - tx) * k;
      ty = py - (py - ty) * k;
      clampPan();
      apply();
    }

    mapwrap.addEventListener('wheel', (e) => {
      e.preventDefault();
      zoomAt(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX, e.clientY);
    }, { passive: false });

    mapwrap.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.map-zoom') || e.target.closest('.map-caption')) return;
      panning = true;
      mapwrap.classList.add('panning');
      mapwrap.setPointerCapture(e.pointerId);
      sx = e.clientX; sy = e.clientY; stx = tx; sty = ty;
    });
    mapwrap.addEventListener('pointermove', (e) => {
      if (!panning) return;
      tx = stx + (e.clientX - sx);
      ty = sty + (e.clientY - sy);
      clampPan();
      apply();
    });
    const endPan = (e) => {
      if (!panning) return;
      panning = false;
      mapwrap.classList.remove('panning');
      try { mapwrap.releasePointerCapture(e.pointerId); } catch(_) {}
    };
    mapwrap.addEventListener('pointerup', endPan);
    mapwrap.addEventListener('pointercancel', endPan);

    const zi = document.getElementById('zoom-in');
    const zo = document.getElementById('zoom-out');
    const zr = document.getElementById('zoom-reset');
    const centerZoom = (f) => {
      const r = mapwrap.getBoundingClientRect();
      zoomAt(f, r.left + r.width/2, r.top + r.height/2);
    };
    if (zi) zi.addEventListener('click', () => centerZoom(1.3));
    if (zo) zo.addEventListener('click', () => centerZoom(1/1.3));
    if (zr) zr.addEventListener('click', () => { scale = 1; tx = 0; ty = 0; apply(); });

    // Double-click / double-tap to zoom
    mapwrap.addEventListener('dblclick', (e) => {
      if (e.target.closest('.map-zoom')) return;
      zoomAt(scale < 2.5 ? 1.8 : 1 / 1.8, e.clientX, e.clientY);
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('#faq-list .faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('#faq-list .faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- Smooth scroll for nav ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

})();
