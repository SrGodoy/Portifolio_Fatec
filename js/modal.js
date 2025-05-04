document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card_projeto_01');
    const modal = document.getElementById('projeto_modal');
    const modalTitulo = document.getElementById('modal_titulo');
    const modalConteudo = document.getElementById('modal_conteudo');
    const closeBtn = document.querySelector('.close_modal');
  
    cards.forEach(card => {
      card.addEventListener('click', function() {
        const titulo = this.querySelector('h3').textContent;
        const conteudo = this.querySelector('p').textContent;
  
        modalTitulo.textContent = titulo;
        modalConteudo.innerHTML = `
          <p>${conteudo}</p>
          <img src="img/rinoexemplo.png" alt="${titulo}" style="max-width:100%; margin-top:20px;">
          <p><strong>Tecnologias usadas:</strong> HTML, CSS, JavaScript</p>
        `;
  
        modal.style.display = 'block';
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  