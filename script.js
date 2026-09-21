/**
 * ═══════════════════════════════════════════════
 * EL RINCÓN DE SOF — SCRIPT PRINCIPAL
 * ═══════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {

  // FINAL MESSAGE DEFINITION (CONSERVADO)
  const FINAL_MESSAGE = {
    title: "Una última cosa",
    paragraphs: [
      "Quería dejarte este pequeño rincón porque me pareció la mejor forma de darte algo que realmente sintiera nuestro.",
      "Espero que te haya gustado."
    ],
    signature: "— N."
  };

  // Inicializar pétalos de fondo
  initPetals();

  // Gestión de estado (localStorage)
  const visitedReader = localStorage.getItem('sof_visited_reader') === 'true';
  const visitedStory = localStorage.getItem('sof_visited_story') === 'true';
  const visitedFlores = localStorage.getItem('sof_visited_flores') === 'true';

  // Elementos principales
  const entryScreen = document.getElementById('entry-screen');
  const hubScreen = document.getElementById('hub-screen');
  const entryText1 = document.getElementById('entry-text-1');
  const entryText2 = document.getElementById('entry-text-2');
  const enterBtn = document.getElementById('enter-btn');
  const indexItems = document.querySelectorAll('.index-item');
  const indexContainer = document.getElementById('index-container');
  const starsDisplay = document.getElementById('stars-display');
  const unlockSection = document.getElementById('unlock-section');

  // ═══════════════════════════════════════════
  // SECUENCIA DE ENTRADA (Misterio inicial)
  // ═══════════════════════════════════════════
  setTimeout(() => {
    if (entryText1) {
      entryText1.classList.remove('hidden');
      entryText1.classList.add('visible');
    }
  }, 1000);

  setTimeout(() => {
    if (entryText2) {
      entryText2.classList.remove('hidden');
      entryText2.classList.add('visible');
    }
  }, 3200);

  setTimeout(() => {
    if (enterBtn) {
      enterBtn.classList.remove('hidden');
      enterBtn.classList.add('visible');
    }
  }, 5200);

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      entryScreen.style.opacity = '0';
      setTimeout(() => {
        entryScreen.classList.add('hidden');
        hubScreen.classList.remove('hidden');
        initHub();
      }, 1400);
    });
  }

  // ═══════════════════════════════════════════
  // INICIALIZACIÓN DEL HUB PRINCIPAL
  // ═══════════════════════════════════════════
  function initHub() {
    // Renderizar datos dinámicos (Capítulos, Fechas, Novedades)
    renderChapters();
    renderDates();
    renderUpdates();
    initScrollReveal();

    // Actualizar Estrellas de progreso
    let visitedCount = 0;
    if (visitedReader) visitedCount++;
    if (visitedStory) visitedCount++;
    if (visitedFlores) visitedCount++;

    if (visitedCount === 0) {
      starsDisplay.textContent = '✧   ✧   ✧';
    } else if (visitedCount === 1) {
      starsDisplay.textContent = '✦   ✧   ✧';
    } else if (visitedCount === 2) {
      starsDisplay.textContent = '✦   ✦   ✧';
    } else {
      starsDisplay.textContent = '✦   ✦   ✦';
    }

    // Secuencia de revelado progresivo de las puertas
    setTimeout(() => {
      const introReveal = document.getElementById('intro-reveal');
      if (introReveal) introReveal.classList.remove('hidden');
    }, 1000);

    setTimeout(() => {
      if (indexItems[0]) indexItems[0].classList.remove('hidden');
    }, 2200);

    setTimeout(() => {
      if (indexItems[1]) indexItems[1].classList.remove('hidden');
    }, 3400);

    setTimeout(() => {
      if (indexItems[2]) indexItems[2].classList.remove('hidden');
    }, 4600);

    setTimeout(() => {
      if (starsDisplay) starsDisplay.classList.remove('hidden');
    }, 4500);

    // Revelar la sección de desbloqueo y misterio
    setTimeout(() => {
      if (unlockSection) {
        unlockSection.classList.remove('hidden');
        
        setTimeout(() => {
          const t1 = document.getElementById('unlock-text-1');
          if (t1) {
            t1.classList.remove('hidden');
            t1.classList.add('visible');
          }
        }, 1000);
        
        setTimeout(() => {
          const sp = document.getElementById('unlock-spacer');
          if (sp) sp.classList.remove('hidden');
        }, 2400);

        setTimeout(() => {
          const t2 = document.getElementById('unlock-text-2');
          if (t2) {
            t2.classList.remove('hidden');
            t2.classList.add('visible');
          }
        }, 3800);

        setTimeout(() => {
          const ub = document.getElementById('unlock-btn');
          if (ub) {
            ub.classList.remove('hidden');
            ub.classList.add('visible');
          }
        }, 5200);
      }
    }, 5800);

    // ═══════════════════════════════════════════
    // INTERACCIÓN Y NAVEGACIÓN DE LAS PUERTAS
    // ═══════════════════════════════════════════
    indexItems.forEach(item => {
      // Manejo táctil para móvil
      item.addEventListener('touchstart', () => {
        indexItems.forEach(other => other.classList.remove('active'));
        item.classList.add('active');
        if (indexContainer) indexContainer.classList.add('has-hover');
      }, { passive: true });

      // Hover en desktop
      item.addEventListener('mouseenter', () => {
        if (indexContainer) indexContainer.classList.add('has-hover');
      });
      
      item.addEventListener('mouseleave', () => {
        if (indexContainer) indexContainer.classList.remove('has-hover');
        item.classList.remove('active');
      });

      // Clic para abrir la experiencia
      item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetUrl = item.getAttribute('data-target');
        const doorId = item.getAttribute('data-id');

        // Guardar estado de visita
        if (doorId === 'reader') localStorage.setItem('sof_visited_reader', 'true');
        if (doorId === 'story') localStorage.setItem('sof_visited_story', 'true');
        if (doorId === 'flores') localStorage.setItem('sof_visited_flores', 'true');

        // Transición suave de umbral
        item.classList.add('door-opening');
        document.body.style.transition = 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
        document.body.style.opacity = '0';

        setTimeout(() => {
          window.location.href = targetUrl;
        }, 650);
      });
    });

    // Limpiar estado si se toca fuera
    document.addEventListener('touchstart', (e) => {
      if (!e.target.closest('.index-item') && indexContainer) {
        indexItems.forEach(item => item.classList.remove('active'));
        indexContainer.classList.remove('has-hover');
      }
    }, { passive: true });

    // ═══════════════════════════════════════════
    // MODAL DEL MENSAJE SECRETO
    // ═══════════════════════════════════════════
    const unlockBtn = document.getElementById('unlock-btn');
    const modal = document.getElementById('secret-message-modal');
    const modalContent = document.getElementById('secret-message-content');
    const modalOverlay = document.getElementById('modal-overlay');

    if (unlockBtn && modal && modalContent) {
      unlockBtn.addEventListener('click', () => {
        modalContent.innerHTML = `
          <button class="close-modal" id="close-modal">&times;</button>
          <h3>${FINAL_MESSAGE.title}</h3>
          ${FINAL_MESSAGE.paragraphs.map(p => `<p>${p}</p>`).join('')}
          <p class="signature">${FINAL_MESSAGE.signature}</p>
        `;
        
        modal.classList.add('visible');

        const closeBtn = document.getElementById('close-modal');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            modal.classList.remove('visible');
          });
        }
      });
    }

    if (modalOverlay && modal) {
      modalOverlay.addEventListener('click', () => {
        modal.classList.remove('visible');
      });
    }

    // ═══════════════════════════════════════════
    // LA FOCA EASTER EGG
    // ═══════════════════════════════════════════
    const sealEgg = document.getElementById('seal-egg');
    const sealSpeech = document.getElementById('seal-speech');
    const sealImg = sealEgg ? sealEgg.querySelector('.seal-img') : null;
    let sealClickCount = 0;
    let sealTimeout;

    const sealMessages = [
      'No estaba en los planes.',
      'Estoy tomando apuntes.',
      'Creo que ya estoy entendiendo.',
      'Bueno... todavía me falta bastante.',
      'Supongo que algunas personas vale la pena seguir conociéndolas.'
    ];

    if (sealEgg && sealSpeech) {
      sealEgg.addEventListener('click', () => {
        clearTimeout(sealTimeout);
        
        const msg = sealMessages[sealClickCount % sealMessages.length];
        sealSpeech.textContent = msg;
        sealSpeech.classList.add('visible');
        
        sealClickCount++;

        if (sealImg) {
          sealImg.style.transform = 'scale(1.15) rotate(8deg)';
          setTimeout(() => {
            sealImg.style.transform = 'scale(1) rotate(0deg)';
          }, 300);
        }

        sealTimeout = setTimeout(() => {
          sealSpeech.classList.remove('visible');
        }, 3500);
      });
    }
  }


  // ═══════════════════════════════════════════
  // RENDER: PÁGINAS POR ESCRIBIR
  // ═══════════════════════════════════════════
  function renderChapters() {
    const container = document.getElementById('chaptersList');
    if (!container || typeof chapters === 'undefined') return;

    container.innerHTML = '';
    chapters.forEach(chap => {
      const card = document.createElement(chap.available ? 'a' : 'div');
      card.className = `chapter-card ${chap.available ? 'available' : 'unavailable'}`;
      if (chap.available && chap.target) {
        card.href = chap.target;
        card.addEventListener('click', (e) => {
          e.preventDefault();
          // Track visit based on chapter
          if (chap.target.includes('Dia del lector')) {
            localStorage.setItem('sof_visited_story', 'true');
          } else if (chap.target.includes('Un ramo atrasado')) {
            localStorage.setItem('sof_visited_flores', 'true');
          }
          card.classList.add('door-opening');
          document.body.style.transition = 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
          document.body.style.opacity = '0';
          setTimeout(() => {
            window.location.href = chap.target;
          }, 650);
        });
      }

      card.innerHTML = `
        <span class="chapter-num">${chap.number}</span>
        <div class="chapter-card-info">
          <h3>${chap.title}</h3>
          <p>${chap.description}</p>
        </div>
        ${chap.available ? '<span class="chapter-card-arrow">&rarr;</span>' : ''}
      `;

      container.appendChild(card);
    });
  }


  // ═══════════════════════════════════════════
  // RENDER: ALGUNAS FECHAS
  // ═══════════════════════════════════════════
  function renderDates() {
    const container = document.getElementById('datesTimeline');
    if (!container || typeof importantDates === 'undefined') return;

    container.innerHTML = '';

    importantDates.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = 'date-moment';
      el.innerHTML = `
        <div class="date-display">${item.date}</div>
        <div class="date-ornament-moment">✦</div>
        <h3 class="date-title">${item.title}</h3>
        <p class="date-description">${item.description}</p>
      `;
      container.appendChild(el);

      if (idx < importantDates.length - 1) {
        const dots = document.createElement('div');
        dots.className = 'date-dots';
        dots.innerHTML = '<span></span><span></span><span></span>';
        container.appendChild(dots);
      }
    });

    // Próximo momento / pausa
    const dotsEnd = document.createElement('div');
    dotsEnd.className = 'date-dots';
    dotsEnd.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(dotsEnd);

    const nextMoment = document.createElement('div');
    nextMoment.className = 'date-placeholder';
    nextMoment.innerHTML = 'HAY DÍAS QUE TODAVÍA NO LLEGAN';
    container.appendChild(nextMoment);
  }


  // ═══════════════════════════════════════════
  // RENDER: PEQUEÑAS COSAS QUE HAN CAMBIADO
  // ═══════════════════════════════════════════
  function renderUpdates() {
    const container = document.getElementById('updatesList');
    if (!container || typeof updates === 'undefined') return;

    container.innerHTML = '';

    updates.forEach(u => {
      const el = document.createElement('div');
      el.className = 'update-entry';
      el.innerHTML = `
        <span class="update-date">${u.date}</span>
        <h3 class="update-title">${u.title}</h3>
        <p class="update-desc">${u.description}</p>
      `;
      container.appendChild(el);
    });
  }


  // ═══════════════════════════════════════════
  // SCROLL REVEAL OBSERVER
  // ═══════════════════════════════════════════
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }


  // ═══════════════════════════════════════════
  // GENERADOR DE PÉTALOS FLOTANTES
  // ═══════════════════════════════════════════
  function initPetals() {
    const container = document.createElement('div');
    container.className = 'petals-container';
    document.body.appendChild(container);

    const numPetals = 35;

    for (let i = 0; i < numPetals; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      const size = Math.random() * 14 + 10;
      const left = Math.random() * 100;
      const animDuration = Math.random() * 10 + 9;
      const animDelay = Math.random() * 12;
      const rotate = Math.random() * 360;
      const scale = Math.random() * 0.5 + 0.6;

      petal.style.width = `${size}px`;
      petal.style.height = `${size * 1.3}px`;
      petal.style.left = `${left}vw`;
      
      petal.style.setProperty('--rot', `${rotate}deg`);
      petal.style.setProperty('--scale', scale);
      petal.style.animation = `fallingPetal ${animDuration}s ${animDelay}s linear infinite`;
      
      container.appendChild(petal);
    }
  }

});
