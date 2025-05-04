
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
document.querySelector('botao_inicio').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Modal

