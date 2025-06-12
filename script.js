document.getElementById("noBtn").addEventListener("click", function() {
  const button = this;
  
  // Posição inicial do botão
  const initialPosition = {
    top: button.offsetTop,
    left: button.offsetLeft
  };
  
  // Função para mover o botão aleatoriamente
  function moveButton() {
    // Obtém a largura e altura da janela
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Gera posições aleatórias dentro da janela
    const randomX = Math.floor(Math.random() * (width - 100)); // Subtrai 100 para garantir que o botão não saia da tela
    const randomY = Math.floor(Math.random() * (height - 50)); // Subtrai 50 para garantir que o botão não saia da tela

    // Muda a posição do botão
    button.style.position = 'absolute'; // Garantir que o botão é posicionado de forma absoluta
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
  }
  
  // Inicia a movimentação do botão a cada 100ms
  const danceInterval = setInterval(moveButton, 100);

  // Após 5 segundos, o botão começa a desaparecer
  setTimeout(function() {
    // Para a movimentação
    clearInterval(danceInterval); 
    
    // Inicia o desaparecimento
    let opacity = 1; // Começa com a opacidade 1 (visível)
    const fadeOutInterval = setInterval(function() {
      if (opacity <= 0) {
        clearInterval(fadeOutInterval); // Para o fade-out quando a opacidade chegar a 0
        button.style.display = 'none'; // Esconde o botão
        showNewButton(); // Exibe o novo botão
      } else {
        opacity -= 0.05; // Diminui a opacidade aos poucos
        button.style.opacity = opacity;
      }
    }, 50); // Controla a velocidade do fade-out (50ms por mudança)
  }, 5000); // 5 segundos de dança
  
  // Função para exibir o novo botão "Não"
  function showNewButton() {
    const newButton = document.createElement("button");
    newButton.classList.add("btn", "no");
    newButton.textContent = "Não"; // Novo texto no botão
    newButton.onclick = function() {
      window.location.href = "nao.html"; // Redireciona para "nao.html"
    };

    // Adiciona o novo botão ao corpo da página
    document.body.appendChild(newButton);

    // Coloca o novo botão no mesmo lugar que o antigo
    newButton.style.position = 'absolute';
    newButton.style.left = initialPosition.left + 'px';
    newButton.style.top = initialPosition.top + 'px';
  }
});
