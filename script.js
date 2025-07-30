document.addEventListener('DOMContentLoaded', function () {
  const musica = document.getElementById('musica-fundo');
  const controle = document.getElementById('controle-musica');
  let tocando = false;

  // Tentativa automática de tocar a música (alguns navegadores bloqueiam autoplay)
  function iniciarMusica() {
    if (!tocando) {
      musica.play().then(() => {
        tocando = true;
        controle.textContent = '⏸️'; // Ícone de pausa
      }).catch((erro) => {
        console.log('Autoplay bloqueado, o usuário deve interagir.');
      });
    }
  }

  // Iniciar ao clicar em qualquer lugar da página (requerido por navegadores)
  document.body.addEventListener('click', iniciarMusica, { once: true });
 // Botão de controle: tocar ou pausar
  if (controle) {
    controle.addEventListener('click', function (event) {
      event.stopPropagation(); // Evita que o clique dispare iniciarMusica()
      if (musica.paused) {
        musica.play();
        controle.textContent = '⏸️';
        tocando = true;
      } else {
        musica.pause();
        controle.textContent = '🎵';
        tocando = false;
      }
    });
  }
});