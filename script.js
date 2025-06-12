window.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('noBtn');
  const body = document.body;

  function getRandomPosition() {
    const maxX = window.innerWidth - noBtn.offsetWidth;  // Largura total da janela
    const maxY = window.innerHeight - noBtn.offsetHeight; // Altura total da janela
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
  }

  function getRandomTransform() {
    const rotate = Math.floor(Math.random() * 60) - 30; // -30 a 30 graus
    const scale = 0.8 + Math.random() * 0.5; // De 0.8 a 1.3
    return `rotate(${rotate}deg) scale(${scale})`;
  }

  function getRandomColor() {
    const colors = ['#ff79c6', '#bd93f9', '#8be9fd', '#f1fa8c', '#ffb86c'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  noBtn.addEventListener('click', () => {
    // Atualiza a posição do botão
    const { x, y } = getRandomPosition();
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Aplica rotação e escala
    const transform = getRandomTransform();
    noBtn.style.transform = transform;

    // Aplica cor aleatória por 0.5s
    const color = getRandomColor();
    noBtn.style.backgroundColor = color;

    // Volta à cor e forma originais após 0.5s
    setTimeout(() => {
      noBtn.style.backgroundColor = '#ff5555';
      noBtn.style.transform = 'none';
    }, 500);
  });
});
