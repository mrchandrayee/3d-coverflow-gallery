// 3D coverflow positioning — adapted from the visible video snippet.
const deck = document.querySelector('#deck');
const cards = [...document.querySelectorAll('.card')];
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const dots = document.querySelector('#dots');
const currentNumber = document.querySelector('#current-number');
const activeTitle = document.querySelector('#active-title');
const activeCaption = document.querySelector('#active-caption');
const autoplayButton = document.querySelector('#autoplay');

let active = 2;
let timer = null;
let isPlaying = true;
const SPACING = 205;
const DEPTH = 175;
const VISIBLE_RANGE = 2;

function render(position = active) {
  cards.forEach((card, i) => {
    // Keep each card's offset relative to the active slide.
    let offset = i - position;
    const total = cards.length;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const d = Math.abs(offset);
    const sign = Math.sign(offset);
    const x = SPACING * offset;
    const z = -DEPTH * d;
    const ry = -offset * 34;
    const scale = Math.max(.62, 1 - d * .16);
    const opacity = d > VISIBLE_RANGE ? 0 : 1 - d * .18;

    card.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${ry}deg) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.zIndex = String(20 - d);
    card.style.filter = d ? `brightness(${1 - d * .22})` : 'brightness(1)';
    card.style.pointerEvents = d > 1 ? 'none' : 'auto';
    card.setAttribute('aria-current', i === active ? 'true' : 'false');
  });

  currentNumber.textContent = String(active + 1).padStart(2, '0');
  activeTitle.textContent = cards[active].dataset.title;
  activeCaption.textContent = cards[active].dataset.caption;
  [...dots.children].forEach((dot, i) => dot.classList.toggle('active', i === active));
}

function goTo(index) {
  active = (index + cards.length) % cards.length;
  render();
}
function startAutoplay() {
  stopAutoplay();
  timer = setInterval(() => goTo(active + 1), 4200);
}
function stopAutoplay() {
  if (timer) clearInterval(timer);
  timer = null;
}
function updateAutoplay() {
  autoplayButton.innerHTML = isPlaying ? 'Ⅱ <span>PAUSE</span>' : '▶ <span>PLAY</span>';
  autoplayButton.setAttribute('aria-pressed', String(isPlaying));
  if (isPlaying) startAutoplay(); else stopAutoplay();
}

cards.forEach((card, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot';
  dot.type = 'button';
  dot.setAttribute('aria-label', `Show image ${i + 1}`);
  dot.addEventListener('click', () => goTo(i));
  dots.appendChild(dot);
  card.addEventListener('click', () => goTo(i));
});
prev.addEventListener('click', () => goTo(active - 1));
next.addEventListener('click', () => goTo(active + 1));
autoplayButton.addEventListener('click', () => { isPlaying = !isPlaying; updateAutoplay(); });

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') goTo(active - 1);
  if (event.key === 'ArrowRight') goTo(active + 1);
  if (event.key === ' ' && event.target === document.body) {
    event.preventDefault(); isPlaying = !isPlaying; updateAutoplay();
  }
});

// Pointer/touch swipe support.
let pointerStart = null;
deck.addEventListener('pointerdown', event => { pointerStart = event.clientX; deck.setPointerCapture(event.pointerId); });
deck.addEventListener('pointerup', event => {
  if (pointerStart === null) return;
  const delta = event.clientX - pointerStart;
  if (Math.abs(delta) > 35) goTo(active + (delta < 0 ? 1 : -1));
  pointerStart = null;
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopAutoplay();
  else if (isPlaying) startAutoplay();
});

render();
updateAutoplay();
