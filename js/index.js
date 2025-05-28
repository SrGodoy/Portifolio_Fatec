
// botão de navegação

// Mostra o botão ao rolar a pagina
window.addEventListener('scroll', function() {
    const botaoInicio = document.querySelector('.botao_inicio');
    if (window.scrollY > 300) {
        botaoInicio.classList.add('mostrar_botao');
    } else {
        botaoInicio.classList.remove('mostrar_botao');
    }
});


//Rolagem suave
document.querySelector('.botao_inicio').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


//email

document.getElementById('botaoCopiarEmail').addEventListener('click', function() {
  const email = 'luccas.miazzo@fatec.sp.gov.br'; 
  navigator.clipboard.writeText(email);
  
  
 
  const mensagem = this.querySelector('.mensagem_copiado');
  mensagem.style.display = 'block';
  

  setTimeout(() => {
    mensagem.style.display = 'none';
  }, 2000);
});

