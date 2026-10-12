/**
 * Cybersecurity Portfolio - Main Interactive Script
 * Lightbox modal viewer & interacciones de interfaz
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de Lightbox para capturas de evidencia
  initLightbox();
});

function initLightbox() {
  const cards = document.querySelectorAll('.evidence-card');
  if (!cards.length) return;

  // Crear modal si no existe en el DOM
  let modal = document.querySelector('.lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <div class="lightbox-container" role="dialog" aria-modal="true">
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
