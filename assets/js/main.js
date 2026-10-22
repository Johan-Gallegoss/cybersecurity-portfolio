/**
 * Cybersecurity Portfolio - Main Interactive Script
 * - Lightbox modal viewer para evidencias
 * - Menú móvil accesible (apertura, cierre, accesibilidad aria, escape)
 * - ScrollSpy con IntersectionObserver para estado activo en navegación
 * - Terminal decorativa en el Hero con typewriter y respeto a prefers-reduced-motion
 */

document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initMobileMenu();
  initScrollSpy();
  initHeroTerminal();
});

/* ==========================================================================
   1. Lightbox para capturas de evidencia (páginas de laboratorios)
   ========================================================================== */
function initLightbox() {
  const cards = document.querySelectorAll('.evidence-card');
  if (!cards.length) return;

  // Crear modal si no existe en el DOM
  let modal = document.querySelector('.lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-container" role="dialog" aria-modal="true" aria-label="Visualizador de captura">
        <div class="lightbox-top">
          <span class="lightbox-caption">Evidencia</span>
          <button class="lightbox-close" aria-label="Cerrar modal">&times;</button>
        </div>
        <div class="lightbox-img-wrapper">
          <img src="" alt="Captura de evidencia en alta resolución">
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const modalImg = modal.querySelector('.lightbox-img-wrapper img');
  const modalCaption = modal.querySelector('.lightbox-caption');
  const closeBtn = modal.querySelector('.lightbox-close');

  function openModal(src, title) {
    modalImg.src = src;
    modalCaption.textContent = title || 'Captura de evidencia';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const titleElem = card.querySelector('h4');
      if (img) {
        const fullSrc = img.getAttribute('src');
        const title = titleElem ? titleElem.textContent : 'Evidencia de laboratorio';
        openModal(fullSrc, title);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   2. Menú móvil accesible con soporte ARIA y teclado
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  const iconHamburger = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  `;

  const iconClose = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;

  function setMenuState(open) {
    if (open) {
      navMenu.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.setAttribute('aria-label', 'Cerrar menú de navegación');
      toggleBtn.innerHTML = iconClose;
    } else {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
      toggleBtn.innerHTML = iconHamburger;
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.contains('open');
    setMenuState(!isOpen);
  });

  // Cerrar al pulsar un enlace de navegación
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        setMenuState(false);
      }
    });
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      setMenuState(false);
    }
  });

  // Cerrar con tecla Escape y devolver el foco al botón
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      setMenuState(false);
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   3. ScrollSpy para actualizar enlace activo según la sección visible
   ========================================================================== */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.site-header .nav-link[href^="#"]');
  if (!navLinks.length) return;

  const sectionIds = Array.from(navLinks)
    .map(link => link.getAttribute('href').slice(1))
    .filter(Boolean);

  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  let currentActiveId = null;

  const observer = new IntersectionObserver((entries) => {
    // Buscar la sección con mayor intersección visible
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentActiveId = entry.target.id;
      }
    });

    if (currentActiveId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentActiveId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }, {
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   4. Terminal decorativa con animación tipo máquina de escribir
   Respeta estrictamente prefers-reduced-motion
   ========================================================================== */
function initHeroTerminal() {
  const terminal = document.getElementById('hero-terminal-output');
  if (!terminal) return;

  // Si el usuario prefiere movimiento reducido, conservar el HTML estático intacto
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Definición de las líneas a simular
  const scriptLines = [
    { type: 'comment', text: '# Lab 01 — Fundamentos de Red' },
    { type: 'cmd', text: 'ip a | grep "inet "' },
    { type: 'out', text: '  inet 10.0.2.15/24 brd 10.0.2.255' },
    { type: 'cmd', text: 'ping -c 3 google.com' },
    { type: 'out', text: '  3 packets transmitted, 3 received' },
    { type: 'comment', text: '# Lab 02 — Análisis de Tráfico' },
    { type: 'cmd', text: 'wireshark -k &' },
    { type: 'out', text: '  [ICMP · DNS · TCP/TLS captured]' },
    { type: 'prompt', text: '' }
  ];

  // Limpiar terminal para iniciar animación suave
  terminal.innerHTML = '';

  let lineIndex = 0;

  function runNextLine() {
    if (lineIndex >= scriptLines.length) return;

    const line = scriptLines[lineIndex];
    lineIndex++;

    if (line.type === 'comment') {
      const el = document.createElement('span');
      el.className = 'comment';
      el.textContent = line.text;
      terminal.appendChild(el);
      terminal.appendChild(document.createElement('br'));
      setTimeout(runNextLine, 120);
    } else if (line.type === 'out') {
      const el = document.createElement('span');
      el.style.color = '#e2e8f0';
      el.textContent = line.text;
      terminal.appendChild(el);
      terminal.appendChild(document.createElement('br'));
      setTimeout(runNextLine, 180);
    } else if (line.type === 'cmd') {
      const promptSpan = document.createElement('span');
      promptSpan.className = 'cmd';
      promptSpan.textContent = '$ ';
      terminal.appendChild(promptSpan);

      const cmdTextSpan = document.createElement('span');
      cmdTextSpan.className = 'cmd';
      terminal.appendChild(cmdTextSpan);

      const cursor = document.createElement('span');
      cursor.className = 'terminal-cursor';
      terminal.appendChild(cursor);

      let charIdx = 0;
      function typeChar() {
        if (charIdx < line.text.length) {
          cmdTextSpan.textContent += line.text.charAt(charIdx);
          charIdx++;
          setTimeout(typeChar, 32);
        } else {
          cursor.remove();
          terminal.appendChild(document.createElement('br'));
          setTimeout(runNextLine, 140);
        }
      }
      setTimeout(typeChar, 80);
    } else if (line.type === 'prompt') {
      const promptSpan = document.createElement('span');
      promptSpan.className = 'cmd';
      promptSpan.textContent = '$ ';
      terminal.appendChild(promptSpan);

      const cursor = document.createElement('span');
      cursor.className = 'terminal-cursor';
      terminal.appendChild(cursor);
    }
  }

  // Iniciar tras breve pausa inicial
  setTimeout(runNextLine, 350);
}
