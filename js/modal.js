document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn_ver_mais');
    const modal = document.getElementById('projeto_modal');
    const modalTitulo = document.getElementById('modal_titulo');
    const modalConteudo = document.getElementById('modal_conteudo');
    const closeBtn = document.querySelector('.close_modal');

    //dados dos projetos um pra cada um pega pelo nome do h3
    const projetos = {
        "Projeto Metaverso": {
            descricao: "Site estático sobre realidade virtual",
            detalhes: "Desenvolvido com HTML, CSS e JavaScript, este projeto explora conceitos de interação em ambientes virtuais.",
            imagem: "img/metaverso_modal.png",
            links: [
                { texto: "GitHub", url: "https://github.com/seuuser/metaverso", classe: "github" },
                { texto: "Site Online", url: "https://meusite.com/metaverso", classe: "site" }
            ]
        },
        "To-Do List": {
            descricao: "Aplicativo de gerenciamento de tarefas",
            detalhes: "Desenvolvido com React, permite adicionar, marcar e filtrar tarefas diárias.",
            imagem: "img/todo_full.jpg",
            links: [
                { texto: "Repositório", url: "https://github.com/seuuser/todo", classe: "github" }
            ]
        }
    };

    // Abre o modal ao clicar no botao ver mais
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card_projeto');
            const titulo = card.querySelector('h3').textContent;
            const projeto = projetos[titulo];

            modalTitulo.textContent = titulo;
            modalConteudo.innerHTML = `
                <p><strong>${projeto.descricao}</strong></p>
                <img src="${projeto.imagem}" alt="${titulo}">
                <p>${projeto.detalhes}</p>
                <div class="modal_botoes">
                    ${projeto.links.map(link => `
                        <a href="${link.url}" target="_blank" class="modal_botao ${link.classe}">
                            ${link.texto}
                        </a>
                    `).join('')}
                </div>
            `;

            modal.style.display = 'flex';
        });
    });

    // fecha o modal
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});