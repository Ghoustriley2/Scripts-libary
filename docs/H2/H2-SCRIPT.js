function copyToClipboard(button) {
  const code = button.closest('.script-box').querySelector('code').innerText;
  navigator.clipboard.writeText(code);
  button.textContent = 'Скопировано!';
  setTimeout(() => button.textContent = 'Копировать', 1500);
}

let menuVisible = false;

function toggleMenu() {
  const menu = document.getElementById('menu');

  if (!menuVisible) {
    menu.classList.remove('hiding');
    menu.classList.add('revealing', 'active');
  } else {
    menu.classList.remove('revealing');
    menu.classList.add('hiding');
    setTimeout(() => {
      menu.classList.remove('active');
    }, 500);
  }

  menuVisible = !menuVisible;
}