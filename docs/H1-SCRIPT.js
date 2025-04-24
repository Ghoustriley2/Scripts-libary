const text = "RB LIBARY✧";
const typingEl = document.getElementById("typing-text");
let index = 0;

function typeChar() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeChar, 150);
  }
}

window.onload = typeChar;

const menu = document.getElementById('sideMenu');
const menuBtn = document.getElementById('menuBtn');
let startX = null;

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
  if (!startX) return;

  let currentX = e.touches[0].clientX;
  let diffX = currentX - startX;

  if (diffX > 50 && !menu.classList.contains('open')) {
    menu.classList.add('open');
    startX = null;
  }

  if (diffX < -50 && menu.classList.contains('open')) {
    menu.classList.remove('open');
    startX = null;
  }
});

setTimeout(() => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
}, 5000);
