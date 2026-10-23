/**
 * ═══════════════════════════════════════════════════════════════
 * LA BIBLIOTECA DE SOF — INTERACTIVE SYSTEM & LOGIC
 * Edición Especial · 23 de Octubre de 2026
 * ═══════════════════════════════════════════════════════════════
 */

// ════════════ DATA: THE 10 BOOKS ON THE SHELF ════════════
const booksData = [
  {
    id: "disculpa-sincera",
    category: "letter",
    number: "I",
    spineTitle: "El Eco de mi Silencio",
    fullTitle: "El Eco de mi Silencio",
    kicker: "TOMO I · ARREPENTIMIENTO SINCERO",
    theme: "theme-vinotinto",
    icon: "🍷",
    image: "../assets/img/sof/sof_descripcion.png",
    caption: "Las palabras donde descubrí la inmensa nobleza de tu corazón.",
    body: `
      <p><strong>Sé que metí la pata y me pesa en lo más hondo.</strong> Sé con total claridad lo importante que era ese momento para ti, lo mucho que esperabas que estuviera ahí a tu lado, y que mi lentitud para responderte rompió algo valioso.</p>
      <p>No busco excusas torpes ni justificaciones. Cuando alguien te importa con el alma, la presencia y la atención no se negocian. Te fallé en el instante en que más debí responderte rápido, y saber que te provoqué dolor o decepción me parte el pecho.</p>
      <p>Tú misma escribiste: <em>«sé que el perdón lo merecen todos sin importar quién son, así soy yo, amable de corazón que sin importar tu error, el dolor suelo dejar pasar con un simple perdón»</em>. Al releerlo solo puedo sentir una admiración infinita por tu pureza. Pero no quiero dar por sentado tu perdón: quiero ganármelo cada día, aprender de mi error y demostrarte que tú siempre serás mi prioridad.</p>
    `
  },
  {
    id: "orgullo-graduacion",
    category: "letter",
    number: "II",
    spineTitle: "A Punto de Volar",
    fullTitle: "A Punto de Volar: Tu Grado",
    kicker: "TOMO II · ORGULLO INFINITO",
    theme: "theme-navy",
    icon: "🎓",
    image: "../assets/img/sof/seal_flower.jpg",
    caption: "Flores y aplausos para la mujer brillante que ya casi se gradúa.",
    body: `
      <p><strong>¡Ya casi te gradúas, Sofi!</strong> ¿Eres consciente de todo lo que has construido para llegar hasta este momento?</p>
      <p>He visto tu constancia, tus madrugadas, las dudas que supiste vencer con carácter y esa disciplina férrea que te define. Como escribiste tú misma con toda la seguridad del mundo: <em>«mis expectativas arrasan lo llamado superior, sé de dónde vengo y para dónde voy»</em>.</p>
      <p>¡Y claro que arrasan! No hay techo que pueda contener tu talento y tu inteligencia. Verte a punto de cruzar esa meta y recibir tu título me llena de un orgullo tan grande que no cabe en el pecho. Eres una mujer extraordinaria y esto apenas es el inicio de todo lo que vas a conquistar.</p>
    `
  },
  {
    id: "feria-alfajores",
    category: "alfajores",
    number: "III",
    spineTitle: "Rellenos de Amor",
    fullTitle: "23 de Octubre: Rellenos de Amor",
    kicker: "TOMO III · TU GRAN DÍA EN CHÍA",
    theme: "theme-caramel",
    icon: "🧁",
    image: "../assets/img/sof/rellenos_de_amor_feria.jpg",
    caption: "Hoy 23 de octubre en su feria: Alfajores artesanales hechos con amor.",
    body: `
      <p><strong>¡Hoy 23 de octubre es tu gran feria!</strong> Tu emprendimiento <em>«Rellenos de Amor»</em> es mucho más que alfajores: es tu pasión, tu creatividad y tu sello puesto en cada detalle.</p>
      <p>Tres sabores que conquistan a cualquiera: el exótico <strong>Dulce de Lulo</strong>, la suavidad irresistible de la <strong>Nutella</strong> y el tradicional <strong>Arequipe</strong> espolvoreado en coco. Hechos en Chía con ingredientes de calidad y con el ingrediente secreto más valioso: tus manitas y tu amor.</p>
      <p><em>«Cada bocado, una razón para sonreír»</em>. Sofi, hoy vas a brillar como te lo mereces. Sé que todo el mundo en la feria se va a rendir ante tu talento repostero. ¡Te admiro y te aplaudo de pie hoy y siempre!</p>
    `
  },
  {
    id: "aprendio-a-programar",
    category: "whatsapp",
    number: "IV",
    spineTitle: "Bbs Aprendí a Programar",
    fullTitle: "Cuando aprendiste por mí",
    kicker: "TOMO IV · DETALLES QUE MARCAN",
    theme: "theme-forest",
    icon: "💻",
    image: "../assets/img/sof/aprendio_a_programar.jpg",
    caption: "«Bbs aprendi a programar JAJAJAJ ☆sofim☆»",
    body: `
      <p>Cuando vi esa notificación en mi pantalla me quedé sin palabras y con una sonrisa de oreja a oreja: <strong>«Bbs aprendi a programar JAJAJAJ ☆sofim☆»</strong>.</p>
      <p>Que te hayas tomado el tiempo de mirar código, de meterte en un mundo que a veces puede ser abstracto y tedioso, solo por estar cerca de lo que yo hago... fue uno de los gestos de amor más puros y tiernos que jamás haya recibido.</p>
      <p>Ese nivel de complicidad, de querer entender al otro y de regalarle una sonrisa con algo tan inesperado, demuestra la clase de persona maravillosa que eres. Nunca voy a olvidar ese mensaje.</p>
    `
  },
  {
    id: "mensaje-pelea-postres",
    category: "whatsapp",
    number: "V",
    spineTitle: "Te Elijo en la Tormenta",
    fullTitle: "Hasta en las peleas te elijo",
    kicker: "TOMO V · LA DULZURA EN EL CONFLICTO",
    theme: "theme-rose",
    icon: "🫶",
    image: "../assets/img/sof/mensaje_pelea_recortado.png",
    caption: "«Pues no soy la mejor mujer del mundo, pero puedo hacerte postres😝🫶»",
    body: `
      <p>Esta captura fue de un momento tenso, de una pelea. Y sin embargo, decidí guardarla como un tesoro sagrado porque a la final <strong>hasta las peleas son importantes cuando uno quiere a alguien de verdad</strong>.</p>
      <p>Tu mensaje fue desarmador: <em>«Pues no soy la mejor mujer del mundo, pero puedo hacerte postres 😝🫶»</em>. En medio del choque, tu ternura y tu humor encontraron la forma de recordarme por qué te quiero tanto.</p>
      <p>Las relaciones reales no son las que nunca discuten; son las que, después de la lluvia, se miran a los ojos y eligen seguir adelante. Para mí no necesitas ser perfecta: eres mi persona, con tus momentos difíciles y con tus postres llenos de amor.</p>
    `
  },
  {
    id: "acompanando-trabajo",
    category: "whatsapp",
    number: "VI",
    spineTitle: "Tus Siestas en Llamada",
    fullTitle: "Tus sueños mientras yo trabajaba",
    kicker: "TOMO VI · COMPAÑÍA SILENCIOSA",
    theme: "theme-charcoal",
    icon: "🌙",
    image: "../assets/img/sof/acompanando_videollamada.jpg",
    caption: "11:23 PM · Arropadita bajo la cobija mientras yo hacía entregas.",
    body: `
      <p>Eran pasadas las 11:20 de la noche. Yo tenía pendientes, tareas y entregas de trabajo por terminar, y tú estabas cansada del día. En lugar de colgar, te quedaste ahí conmigo.</p>
      <p>Te arropaste bien con tu cobija rosada y te quedaste dormida plácidamente mientras la videollamada seguía abierta. Yo podía escuchar tu respiración serena al fondo mientras picaba código.</p>
      <p>Esa sensación de no estar solo en la noche, de saber que la persona que quieres está descansando tranquila a tu lado a través de la pantalla... es de las sensaciones más reconfortantes y bellas que existen.</p>
    `
  },
  {
    id: "abelardo-caricatura",
    category: "whatsapp",
    number: "VII",
    spineTitle: "Nuestra Revolución",
    fullTitle: "Risas con Abelardo",
    kicker: "TOMO VII · COMPLICIDAD Y CARCAJADAS",
    theme: "theme-gold",
    icon: "⭐",
    image: "../assets/img/sof/abelardo_caricatura.jpg",
    caption: "«Antes muerta que fascista» · Risas compartidas a la 1:24 AM.",
    body: `
      <p>¡Qué momento tan épico! Eran casi la una y media de la mañana y me mostraste ese dibujo que hiciste de Abelardo de la Espriella con la estrella roja y la leyenda: <strong>«ANTES MUERTA QUE FASCISTA»</strong>.</p>
      <p>En la captura se me ve la cara tapándome la boca de la risa incontrolable que me causó. Esas son las cosas que hacen que lo nuestro sea irrepetible: el humor compartido, la ironía, criticar las mismas cosas y reírnos hasta que nos duela la barriga.</p>
      <p>Tener una compañera con la que puedes debatir, reírte sin censura y ser completamente auténtico es uno de los mayores regalos de la vida.</p>
    `
  },
  {
    id: "llamada-11-horas",
    category: "whatsapp",
    number: "VIII",
    spineTitle: "11 Horas y Media",
    fullTitle: "11 Horas que fueron segundos",
    kicker: "TOMO VIII · EL TIEMPO SIN RELOJ",
    theme: "theme-navy",
    icon: "📞",
    image: "../assets/img/sof/llamada_11_horas.jpg",
    caption: "11:32:46 · Once horas y media de llamada sin querer colgar.",
    body: `
      <p><strong>11 horas, 32 minutos y 46 segundos.</strong> Casi doce horas seguidas hablando al teléfono sin que ninguno de los dos quisiera cortar.</p>
      <p>Hablamos de todo lo imaginable: recuerdos de la infancia, sueños del futuro, miedos, anécdotas bobas, chismes y hasta silencios en los que simplemente escuchábamos al otro respirar.</p>
      <p>Eran y fueron de las mejores horas de mi vida. Porque cuando el tiempo vuela tan rápido con alguien, es porque estás exactamente en el lugar donde tu alma quiere estar.</p>
    `
  },
  {
    id: "la-recuperamos-shi-shi",
    category: "whatsapp",
    number: "IX",
    spineTitle: "Shi Shi: Lo Recuperamos",
    fullTitle: "Un Nuevo Comienzo Significativo",
    kicker: "TOMO IX · SEGUNDAS OPORTUNIDADES",
    theme: "theme-forest",
    icon: "🐱",
    image: "../assets/img/sof/la_recuperamos.jpg",
    caption: "«¿La recuperamos? — Shi shi» con el sticker sonrojado.",
    body: `
      <p><em>«Noooooooo... Mi culpa... Pero jajsjqj... ¿La recuperamos?»</em> y tu respuesta más dulce y sincera: <strong>«Shi shi»</strong> acompañado de ese gatito sonrojado.</p>
      <p>Ese momento representó recuperar todo lo que somos. Demostró que por encima de los tropiezos, las dudas y los silencios, las ganas de cuidarnos y de estar juntos siempre fueron más fuertes.</p>
      <p>Ese 'Shi shi' es mi recordatorio favorito de que siempre vale la pena pedir perdón, reconocer los fallos y volver a empezar con más cariño que nunca.</p>
    `
  },
  {
    id: "diccionario-sof",
    category: "sof",
    number: "X",
    spineTitle: "El Cielo de Sof",
    fullTitle: "El Manifiesto de Sofi",
    kicker: "TOMO X · TU PROPIA ESENCIA",
    theme: "theme-vinotinto",
    icon: "✨",
    image: "../assets/img/sof/sof_descripcion.png",
    caption: "«Yo soy Sofia, sofi, fofi, shopas, chofi, animal, misia, cucarron, mocosa, lecherita y enana.»",
    body: `
      <p>Dijiste: <em>«No, no me conoces... O tal vez sí pero a alguien que no soy yo. ATT:) SOFIM♡»</em>.</p>
      <p>Pero yo sí quiero conocerte en cada una de tus facetas. En tus atardeceres de color vinotinto que te hacen vibrar el alma, en las noches donde esperas con ansias que la luna brille con su mayor poder, en las estrellas que miras en silencio y en las figuras que inventas buscando formas en las nubes sin parar.</p>
      <p>Te conozco en tu firmeza, en tu dulzura, en tus alfajores y en tu orgullo. Y a esa Sofi real, con todo lo que es y todo lo que sueña, es a la que elijo cuidar hoy y siempre.</p>
    `
  },
  {
    id: "mi-luna-ojos-sonrisa",
    category: "sof",
    number: "XI",
    spineTitle: "Mi Luna: Tus Ojos",
    fullTitle: "Mi Luna, y como tú ninguna",
    kicker: "TOMO XI · LA MIRADA, EL ARTE Y LA LUNA",
    theme: "theme-gold",
    icon: "🌙",
    image: "../assets/img/sof/ojos_de_sof.png",
    caption: "«Pareciera que miraras con amor a todo» · Y esa fascinación por maquillarte que es fuera de lo común",
    gallery: [
      {
        src: "../assets/img/sof/ojos_de_sof.png",
        label: "👁️ Tus Ojos",
        caption: "«Pareciera que miraras con amor a todo» — Aunque a ti no te gustaran, a mí me fascinan."
      },
      {
        src: "../assets/img/sof/maquillaje_artistico_sonrisa.png",
        label: "💄 Maquillaje & Sonrisa",
        caption: "Tu fascinación por maquillarte siempre · Algo fuera de lo común y tu sonrisa de luna."
      }
    ],
    body: `
      <p>Siempre te recalcaba mucho tus ojos, aunque a veces no te gustaran o dudaras de ellos. Pero es que cuando te miro, <strong>pareciera que miraras con amor a todo</strong> lo que te rodea; tienen una luz tan dulce, sincera y pura que es imposible no quedarse viéndote embobado.</p>
      <p>Y aunque en la segunda foto se referencie algo raro o diferente, para mí representa algo maravilloso: <strong>tu fascinación por maquillarte siempre</strong>, por probar cosas artísticas, creativas y atrevidas. Es algo tan propio de ti, tan <strong>fuera de lo común</strong>, y justo ese estilo único y sin miedo al qué dirán es de las cosas que más me gustan de ti.</p>
      <p>Y todo, absolutamente todo, combina a la perfección con tu <strong>sonrisa que brilla como la luna</strong>. Te lo decía antes y te lo prometo hoy con todo mi corazón: <em>tú eres mi luna, y como tú ninguna</em>. 🌙✨</p>
    `
  }
];

// ════════════ DOM ELEMENTS ════════════
const booksRow = document.getElementById("booksRow");
const readCountEl = document.getElementById("readCount");
const filterChips = document.querySelectorAll(".filter-chip");

// Book Modal Elements
const bookModal = document.getElementById("bookModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeBookBtn = document.getElementById("closeBookBtn");
const modalMediaFrame = document.getElementById("modalMediaFrame");
const modalMediaCaption = document.getElementById("modalMediaCaption");
const modalPageNumLeft = document.getElementById("modalPageNumLeft");
const modalChapterKicker = document.getElementById("modalChapterKicker");
const modalBookTitle = document.getElementById("modalBookTitle");
const modalBookBody = document.getElementById("modalBookBody");
const modalPageNumRight = document.getElementById("modalPageNumRight");
const prevBookBtn = document.getElementById("prevBookBtn");
const nextBookBtn = document.getElementById("nextBookBtn");
const reactBtns = document.querySelectorAll(".react-btn");

// Main Letter Modal Elements
const openMainLetterBtn = document.getElementById("openMainLetterBtn");
const mainLetterModal = document.getElementById("mainLetterModal");
const letterModalBackdrop = document.getElementById("letterModalBackdrop");
const closeLetterBtn = document.getElementById("closeLetterBtn");
const finishLetterBtn = document.getElementById("finishLetterBtn");

// Interactive Atmosphere Elements
const moonBtn = document.getElementById("moonBtn");
const starsLayer = document.getElementById("starsLayer");
const constellationLayer = document.getElementById("constellationLayer");

// Music Player Elements
const audioElement = document.getElementById("audioElement");
const musicPlayer = document.getElementById("musicPlayer");
const musicCoverImg = document.getElementById("musicCoverImg");
const musicSongName = document.getElementById("musicSongName");
const musicArtistLine = document.getElementById("musicArtistLine");
const musicFavTag = document.getElementById("musicFavTag");
const musicPlayIcon = document.getElementById("musicPlayIcon");
const musicPlayToggleBtn = document.getElementById("musicPlayToggleBtn");
const musicSkipBtn = document.getElementById("musicSkipBtn");
const musicDiscWrap = document.getElementById("musicDiscWrap");

// Alfajores Elements
const cheerAlfajorBtn = document.getElementById("cheerAlfajorBtn");
const cheerNumEl = document.getElementById("cheerNum");
const flavorPills = document.querySelectorAll(".flavor-pill");

// Nicknames & Clouds Elements
const nickTags = document.querySelectorAll(".nick-tag");
const nickExplanation = document.getElementById("nickExplanation");
const spawnCloudBtn = document.getElementById("spawnCloudBtn");
const cloudToast = document.getElementById("cloudToast");
const cloudsLayer = document.getElementById("cloudsLayer");

// Peeking Seal Elements
const peekingSeal = document.getElementById("peekingSeal");
const sealBubble = document.getElementById("sealBubble");

// Music Playlist (Sofi's Favorite: Risk It All by Bruno Mars!)
const playlist = [
  {
    id: "risk-it-all",
    title: "Risk It All",
    artist: "Bruno Mars · Muy suave de fondo",
    file: "../assets/audio/risk_it_all.mp3",
    cover: "../assets/img/sof/cover_risk_it_all.png",
    isFav: true
  },
  {
    id: "amarrame",
    title: "Amárrame",
    artist: "Mon Laferte, Juanes · Muy suave",
    file: "../assets/audio/amarrame.mp3",
    cover: "../assets/img/sof/cover_amarrame.png",
    isFav: false
  }
];

// ════════════ STATE ════════════
let currentBookIndex = 0;
let currentFilter = "all";
let currentTrackIndex = 0;
let isMusicPlaying = false;
let userExplicitlyPaused = false;
let readBooks = new Set(JSON.parse(localStorage.getItem("sof_read_books") || "[]"));
let cheerCount = parseInt(localStorage.getItem("sof_alfajor_cheers") || "14", 10);
let audioContext = null;

// Seal cute dialogue pool
const sealMessages = [
  "¡Oye Sofi! Nico te quiere un montón y te desea muchos éxitos hoy en la feria 🧁✨",
  "Nico me contó que tus ojos miran con amor a todo y que tu sonrisa brilla como la luna 👁️🌙",
  "«Como mi luna ninguna»... ¡y con esa fascinación por maquillarte eres única! 💄✨",
  "¡Pruébale un alfajor de Nutella a Sofi, son una locura! 🍫",
  "«Alta no soy pero mis expectativas arrasan lo llamado superior» 🎓👑",
  "¡Sofi, hoy Chía se va a enamorar de tus alfajores! 📍❤️",
  "Nico me dijo en secreto que eres la mujer más increíble del planeta 🌙",
  "¡Mira cómo brilla la luna hoy con su mayor poder! 🌕✨",
  "«Shi shi, la recuperamos»... ¡y valió cada segundo! 🌸"
];

// Cloud shapes pool
const cloudShapes = [
  { name: "Un Alfajor de Arequipe", desc: "Redondito y bañado en coco con dulce de amor 🧁" },
  { name: "Una Foca con Flores", desc: "Sonriendo y aplaudiendo por Sofi 🦭🌸" },
  { name: "Un Birrete de Graduación", desc: "Volando bien alto hacia el cielo del éxito 🎓✨" },
  { name: "Un Corazón Vinotinto", desc: "Bañado por la luz del atardecer más bonito 🍷❤️" },
  { name: "La Luna en Creciente", desc: "Lista para brillar con su mayor poder 🌙" }
];

// ════════════ INITIALIZATION ════════════
document.addEventListener("DOMContentLoaded", () => {
  generateStars();
  renderBooks();
  updateReadStatus();
  updateCheerDisplay();
  loadTrack(0);

  // Bind Events
  setupEventListeners();

  // Gentle background music start on first interaction (only if not manually paused)
  const handleFirstInteraction = (e) => {
    window.removeEventListener("click", handleFirstInteraction);
    window.removeEventListener("touchstart", handleFirstInteraction);

    // If user clicked directly on the music player pill, let togglePlay handle it
    if (e && e.target && e.target.closest("#musicPlayer")) {
      return;
    }

    if (!userExplicitlyPaused && audioElement && audioElement.paused) {
      playTrack();
    }
  };
  window.addEventListener("click", handleFirstInteraction);
  window.addEventListener("touchstart", handleFirstInteraction, { passive: true });
});

// ════════════ SHELF & BOOKS RENDERING ════════════
function renderBooks() {
  booksRow.innerHTML = "";

  const filtered = booksData.filter(book => {
    if (currentFilter === "all") return true;
    return book.category === currentFilter;
  });

  filtered.forEach((book, idx) => {
    const isRead = readBooks.has(book.id);
    const card = document.createElement("div");
    card.className = `book-spine-card ${book.theme} ${isRead ? "is-read" : ""}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("title", `Tomo ${book.number}: ${book.fullTitle}`);

    card.innerHTML = `
      <div class="spine-top-num">${book.number}</div>
      <div class="spine-ridge"></div>
      <div class="spine-title-wrap">
        <span class="spine-title">${book.spineTitle}</span>
      </div>
      <div class="spine-ridge"></div>
      <div class="spine-bottom-icon">${book.icon}</div>
      <div class="spine-ribbon"></div>
    `;

    card.addEventListener("click", () => {
      // Find actual index in complete array
      const realIdx = booksData.findIndex(b => b.id === book.id);
      openBook(realIdx);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const realIdx = booksData.findIndex(b => b.id === book.id);
        openBook(realIdx);
      }
    });

    booksRow.appendChild(card);
  });
}

function updateReadStatus() {
  readCountEl.textContent = readBooks.size;
}

// ════════════ BOOK MODAL CONTROLS ════════════
function openBook(index) {
  if (index < 0 || index >= booksData.length) return;
  currentBookIndex = index;
  const book = booksData[index];

  // Mark as read
  readBooks.add(book.id);
  localStorage.setItem("sof_read_books", JSON.stringify([...readBooks]));
  updateReadStatus();
  renderBooks();

  // Populate Modal
  if (book.gallery && book.gallery.length > 1) {
    const thumbsHtml = book.gallery.map((g, i) => `
      <button class="gallery-switch-btn ${i === 0 ? 'active' : ''}" data-idx="${i}" type="button">
        ${g.label}
      </button>
    `).join("");

    modalMediaFrame.innerHTML = `
      <div class="gallery-viewport">
        <img id="galleryMainImg" src="${book.gallery[0].src}" alt="${book.gallery[0].caption}" loading="lazy">
      </div>
      <div class="gallery-selector">
        ${thumbsHtml}
      </div>
    `;
    modalMediaCaption.textContent = book.gallery[0].caption;

    const switchBtns = modalMediaFrame.querySelectorAll(".gallery-switch-btn");
    switchBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        switchBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const idx = parseInt(btn.dataset.idx, 10);
        const item = book.gallery[idx];
        const gImg = document.getElementById("galleryMainImg");
        if (gImg) {
          gImg.style.opacity = "0";
          setTimeout(() => {
            gImg.src = item.src;
            modalMediaCaption.textContent = item.caption;
            gImg.style.opacity = "1";
          }, 180);
        }
      });
    });
  } else {
    modalMediaFrame.innerHTML = `
      <img src="${book.image}" alt="${book.fullTitle}" loading="lazy">
    `;
    modalMediaCaption.textContent = book.caption;
  }
  modalPageNumLeft.textContent = `Tomo ${book.number}`;

  modalChapterKicker.textContent = book.kicker;
  modalBookTitle.textContent = book.fullTitle;
  modalBookBody.innerHTML = book.body;
  modalPageNumRight.textContent = `Tomo ${index + 1} de ${booksData.length}`;

  // Update navigation buttons
  prevBookBtn.disabled = index === 0;
  nextBookBtn.disabled = index === booksData.length - 1;

  // Open modal with smooth animation
  bookModal.classList.add("active");
  bookModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Play subtle paper sound / harmonic chime
  playHarpChime(index);
}

function closeBook() {
  bookModal.classList.remove("active");
  bookModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ════════════ MAIN LETTER MODAL ════════════
function openMainLetter() {
  mainLetterModal.classList.add("active");
  mainLetterModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  playHarpChime(2);
}

function closeMainLetter() {
  mainLetterModal.classList.remove("active");
  mainLetterModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ════════════ EVENT LISTENERS SETUP ════════════
function setupEventListeners() {
  // Shelf filter chips
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.dataset.filter;
      renderBooks();
    });
  });

  // Modal navigation & close
  closeBookBtn.addEventListener("click", closeBook);
  modalBackdrop.addEventListener("click", closeBook);
  prevBookBtn.addEventListener("click", () => openBook(currentBookIndex - 1));
  nextBookBtn.addEventListener("click", () => openBook(currentBookIndex + 1));

  // Main Letter Modal
  openMainLetterBtn.addEventListener("click", openMainLetter);
  closeLetterBtn.addEventListener("click", closeMainLetter);
  letterModalBackdrop.addEventListener("click", closeMainLetter);
  finishLetterBtn.addEventListener("click", () => {
    closeMainLetter();
    spawnFloatingHeart(window.innerWidth / 2, window.innerHeight / 2, "❤️");
  });

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBook();
      closeMainLetter();
    }
    if (bookModal.classList.contains("active")) {
      if (e.key === "ArrowLeft" && currentBookIndex > 0) {
        openBook(currentBookIndex - 1);
      } else if (e.key === "ArrowRight" && currentBookIndex < booksData.length - 1) {
        openBook(currentBookIndex + 1);
      }
    }
  });

  // Book reaction buttons
  reactBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const reaction = btn.dataset.reaction;
      const rect = btn.getBoundingClientRect();
      spawnFloatingHeart(rect.left + rect.width / 2, rect.top, reaction);
      playBubblePop();
    });
  });

  // Moon Button Click -> Full Moon & Constellation
  moonBtn.addEventListener("click", () => {
    triggerFullMoonMagic();
  });

  // Music Player Events
  if (musicPlayToggleBtn) {
    musicPlayToggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      togglePlay();
    });
  }
  if (musicDiscWrap) {
    musicDiscWrap.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      togglePlay();
    });
  }
  if (musicSkipBtn) {
    musicSkipBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      userExplicitlyPaused = false;
      nextTrack(true);
    });
  }

  // Audio element native lifecycle events (Single Source of Truth)
  if (audioElement) {
    audioElement.addEventListener("play", () => {
      isMusicPlaying = true;
      if (musicPlayer) musicPlayer.classList.add("is-playing");
      if (musicPlayIcon) musicPlayIcon.textContent = "⏸";
    });

    audioElement.addEventListener("pause", () => {
      isMusicPlaying = false;
      if (musicPlayer) musicPlayer.classList.remove("is-playing");
      if (musicPlayIcon) musicPlayIcon.textContent = "▶";
    });

    audioElement.addEventListener("ended", () => {
      nextTrack(true);
    });
  }

  // Alfajores cheer button
  cheerAlfajorBtn.addEventListener("click", () => {
    cheerCount++;
    localStorage.setItem("sof_alfajor_cheers", cheerCount);
    updateCheerDisplay();
    playBubblePop();
    
    // Spawn festive emojis
    const rect = cheerAlfajorBtn.getBoundingClientRect();
    const icons = ["🧁", "✨", "🍫", "❤️", "🥥"];
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const offset = (Math.random() - 0.5) * 80;
        spawnFloatingHeart(rect.left + rect.width / 2 + offset, rect.top, icons[i % icons.length]);
      }, i * 100);
    }
  });

  // Flavor pills
  flavorPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const flavor = pill.dataset.flavor;
      playBubblePop();
      if (flavor === "lulo") {
        spawnFloatingHeart(window.innerWidth / 2, window.innerHeight / 2, "🍈");
      } else if (flavor === "nutella") {
        spawnFloatingHeart(window.innerWidth / 2, window.innerHeight / 2, "🍫");
      } else {
        spawnFloatingHeart(window.innerWidth / 2, window.innerHeight / 2, "🥥");
      }
    });
  });

  // Nicknames tags
  nickTags.forEach(tag => {
    tag.addEventListener("click", () => {
      const desc = tag.dataset.desc;
      nickExplanation.textContent = `«${tag.textContent}»: ${desc}`;
      nickExplanation.style.color = "var(--gold-pure)";
      playBubblePop();
    });
  });

  // Cloud Finder
  spawnCloudBtn.addEventListener("click", () => {
    spawnSpecialCloud();
  });

  // Peeking Seal
  peekingSeal.addEventListener("click", () => {
    toggleSealMessage();
  });
}

function updateCheerDisplay() {
  cheerNumEl.textContent = cheerCount;
}

// ════════════ ATMOSPHERE & MAGIC EFFECTS ════════════
function generateStars() {
  const count = 120;
  starsLayer.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 80}%`;
    const size = Math.random() * 2.5 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.borderRadius = "50%";
    star.style.backgroundColor = Math.random() > 0.4 ? "#fffdf0" : "#ffd166";
    star.style.opacity = (Math.random() * 0.7 + 0.3).toString();
    star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 235, 170, 0.6)`;
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite alternate ease-in-out`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starsLayer.appendChild(star);
  }

  // Add keyframe twinkle if not in CSS
  const style = document.createElement("style");
  style.textContent = `
    @keyframes twinkle {
      0% { opacity: 0.2; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1.3); }
    }
  `;
  document.head.appendChild(style);
}

function triggerFullMoonMagic() {
  playHarpChime(4);
  constellationLayer.classList.toggle("hidden");

  // Draw Constellation SVG lines if empty
  const svg = document.getElementById("constellationSvg");
  if (!svg.hasChildNodes()) {
    // Points forming SOFIM ♡
    const points = [
      { x: 120, y: 180 }, { x: 180, y: 140 }, { x: 240, y: 190 }, { x: 300, y: 240 }, // S
      { x: 380, y: 160 }, { x: 440, y: 160 }, { x: 440, y: 240 }, { x: 380, y: 240 }, // O
      { x: 500, y: 240 }, { x: 500, y: 140 }, { x: 550, y: 140 }, { x: 500, y: 190 }, // F
      { x: 610, y: 140 }, { x: 610, y: 240 }, // I
      { x: 670, y: 240 }, { x: 670, y: 140 }, { x: 710, y: 190 }, { x: 750, y: 140 }, { x: 750, y: 240 }, // M
      { x: 830, y: 180 }, { x: 860, y: 150 }, { x: 890, y: 180 }, { x: 860, y: 220 } // ♡
    ];

    let linesSvg = "";
    for (let i = 0; i < points.length - 1; i++) {
      linesSvg += `<line x1="${points[i].x}" y1="${points[i].y}" x2="${points[i+1].x}" y2="${points[i+1].y}" stroke="#ffd166" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.7"/>`;
    }
    points.forEach(p => {
      linesSvg += `<circle cx="${p.x}" cy="${p.y}" r="3.5" fill="#fff" filter="drop-shadow(0 0 5px #ffd166)"/>`;
    });
    svg.innerHTML = linesSvg;
  }

  // Shooting stars burst
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      createShootingStar();
    }, i * 350);
  }

  // Romantic moon message
  showFloatingMoonToast("«Tú eres mi luna, y como tú ninguna» 🌙✨");
}

function showFloatingMoonToast(text) {
  let toast = document.getElementById("moonFloatingToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "moonFloatingToast";
    toast.className = "moon-floating-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add("visible");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 4200);
}

function createShootingStar() {
  const star = document.createElement("div");
  star.style.position = "fixed";
  star.style.top = `${Math.random() * 40}vh`;
  star.style.left = `${Math.random() * 50}vw`;
  star.style.width = "120px";
  star.style.height = "2px";
  star.style.background = "linear-gradient(90deg, #fff, rgba(255, 209, 102, 0.8), transparent)";
  star.style.transform = "rotate(-35deg)";
  star.style.zIndex = "5";
  star.style.pointerEvents = "none";
  star.style.boxShadow = "0 0 10px #ffd166";
  star.style.transition = "all 0.9s cubic-bezier(0.25, 1, 0.5, 1)";

  document.body.appendChild(star);

  requestAnimationFrame(() => {
    star.style.transform = "translate(280px, 180px) rotate(-35deg)";
    star.style.opacity = "0";
  });

  setTimeout(() => star.remove(), 1000);
}

// ════════════ FLOATING REACTION PARTICLES ════════════
function spawnFloatingHeart(x, y, char = "❤️") {
  const el = document.createElement("div");
  el.textContent = char;
  el.style.position = "fixed";
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.fontSize = "1.8rem";
  el.style.pointerEvents = "none";
  el.style.zIndex = "9999";
  el.style.transition = "all 1.2s cubic-bezier(0.1, 0.8, 0.3, 1)";
  el.style.transform = "translate(-50%, -50%) scale(0.6)";

  document.body.appendChild(el);

  requestAnimationFrame(() => {
    const randomX = (Math.random() - 0.5) * 90;
    const randomY = -120 - Math.random() * 80;
    el.style.transform = `translate(calc(-50% + ${randomX}px), ${randomY}px) scale(1.4)`;
    el.style.opacity = "0";
  });

  setTimeout(() => el.remove(), 1300);
}

// ════════════ CLOUDS FINDER ════════════
function spawnSpecialCloud() {
  playBubblePop();
  const choice = cloudShapes[Math.floor(Math.random() * cloudShapes.length)];
  cloudToast.textContent = `¡Encontraste en el cielo: ${choice.name}! — ${choice.desc}`;
  cloudToast.style.opacity = "1";

  // Create visible drifting cloud element
  const cloud = document.createElement("div");
  cloud.className = "floating-cloud";
  cloud.style.top = `${Math.random() * 35 + 10}vh`;
  cloud.style.width = "220px";
  cloud.style.height = "100px";
  cloud.style.animationDuration = "18s";
  cloudsLayer.appendChild(cloud);

  setTimeout(() => cloud.remove(), 19000);
}

// ════════════ PEEKING SEAL LOGIC ════════════
let sealMsgIndex = 0;
function toggleSealMessage() {
  playBubblePop();
  sealBubble.textContent = sealMessages[sealMsgIndex % sealMessages.length];
  sealBubble.classList.remove("hidden");
  sealMsgIndex++;

  setTimeout(() => {
    sealBubble.classList.add("hidden");
  }, 4500);
}

// ════════════ SOUND EFFECTS ════════════
// Muted synthetic oscillators so they do not clash or mix strangely with the songs
function initAudio() {}
function playHarpChime(noteIndex = 0) {}
function playBubblePop() {}

// ════════════ MUSIC PLAYER FUNCTIONS ════════════
function loadTrack(index) {
  if (!playlist || playlist.length === 0) return;
  currentTrackIndex = (index + playlist.length) % playlist.length;
  const track = playlist[currentTrackIndex];

  if (audioElement) {
    audioElement.src = track.file;
    audioElement.volume = 0.22; // Suave de fondo
    audioElement.load();
  }

  if (musicCoverImg) musicCoverImg.src = track.cover;
  if (musicSongName) musicSongName.textContent = track.title;
  if (musicArtistLine) musicArtistLine.textContent = track.artist;

  if (musicFavTag) {
    if (track.isFav) {
      musicFavTag.style.display = "inline-block";
      musicFavTag.textContent = "★ Tu favorita";
    } else {
      musicFavTag.style.display = "none";
    }
  }
}

function playTrack() {
  if (!audioElement) return;
  userExplicitlyPaused = false;
  audioElement.volume = 0.22;
  const promise = audioElement.play();
  if (promise !== undefined) {
    promise.catch(() => {
      // Browser autoplay policy caught cleanly
    });
  }
}

function pauseTrack() {
  if (!audioElement) return;
  userExplicitlyPaused = true;
  audioElement.pause();
}

function togglePlay() {
  if (!audioElement) return;
  if (!audioElement.paused) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function nextTrack(autoPlay = true) {
  if (!playlist || playlist.length === 0) return;
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
  loadTrack(currentTrackIndex + 1);
  if (autoPlay && !userExplicitlyPaused) {
    playTrack();
  }
}
