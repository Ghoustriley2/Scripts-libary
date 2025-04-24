(function () {
  const now = new Date();
  const kievOffset = 3 * 60; // UTC+3
  const localOffset = now.getTimezoneOffset();
  const kievTime = new Date(now.getTime() + (kievOffset + localOffset) * 60000);
  const hour = kievTime.getHours();
  if (hour === 3) {
    document.body.classList.add('witching-mode');

    document.querySelectorAll('h1, h2, h3').forEach(el => {
      el.textContent = 'I see you...';
    });

    const glitch = document.createElement('div');
    glitch.className = 'glitch-overlay';
    document.body.appendChild(glitch);
  }
})();
