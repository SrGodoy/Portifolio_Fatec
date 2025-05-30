document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn_ver_mais');
    const modal = document.getElementById('projeto_modal');
    const modalTitulo = document.getElementById('modal_titulo');
    const modalConteudo = document.getElementById('modal_conteudo');
    const closeBtn = document.querySelector('.close_modal');

    // dados dos projetos modal
    const projetos = {
        "Projeto Metaverso": {
            descricao: "Site estático sobre realidade virtual",
            detalhes: "Desenvolvido com HTML, CSS e JavaScript, este projeto explora conceitos de interação em ambientes virtuais aprendidos no primeiro semestre.",
            imagens: ["img/metaverso_modal.png", "img/metaverso_modal_2.png"],
            links: [
                {
                    texto: "Repositório",
                    url: "https://github.com/SrGodoy/Trabalho-Metaverso",
                    classe: "site"
                }
            ]
        },
    "Trabalho Rede e Internet" : {
    descricao: "Teste e Simulação de Varias Redes Interligadas",
    detalhes: "Esse projeto mostra a criação e configuração de três redes LAN conectadas a um" +
            "a WAN, usando o Packet Tracer para simular a comunicação entre dispositivos. F" +
            "oram configurados IPs, roteadores e protocolos para garantir que todas as máqu" +
            "inas se comuniquem sem conflitos.",
    imagens: ["img/trabalho_rede_e_internet.png"],
    links: [
        {
            texto: "Imagem do Projeto",
            url: "https://drive.google.com/file/d/1a4zhrG71VrkLdCqiqs2505HQHLleQm2u/view?usp=drive_link",
            classe: "site"
        }, {
            texto: "Projeto do Packet Tracer",
            url: "https://drive.google.com/file/d/19-fxHz3rBrQansV8vjdcP-fzvmpEiIT1/view?usp=drive_link",
            classe: "github"
        }
    ]

},
        "Projeto Pizzaria": {
            descricao: "Site Responsivo de uma Pizzaria fazendo uso de Javascript e CSS mais avançado",
            detalhes: "Foi desenvolvido um site de pizzaria estático e responsivo, usando HTML, CSS e JavaScript, aplicando técnicas como media query e menu interativo. Foram configurados layouts para mobile e desktop, com foco na manipulação de elementos gráficos e criação de uma navegação intuitiva.",
            imagens: ["img/pizza2.png", "img/pizza3.png", "img/pizza4.png"],
            links: [
                {
                    texto: "Repositório",
                    url: "https://github.com/SrGodoy/DavinciPizza",
                    classe: "site"
                }
            ]
        },
        "Projeto Banco de Dados": {
            descricao: "Aplicativo de gerenciamento de tarefas",
            detalhes: "Continuar a partir daqui",
            imagens: ["img/banco_de_dados1.png"],
            links: [
                { texto: "Repositório", url: "https://github.com/seuuser/todo", classe: "github" }
            ]
        },

        "To-Do List": {
            descricao: "Aplicativo de gerenciamento de tarefas",
            detalhes: "Desenvolvido com React, permite adicionar, marcar e filtrar tarefas diárias.",
            imagens: ["img/todo_full.jpg"],
            links: [
                { texto: "Repositório", url: "https://github.com/seuuser/todo", classe: "github" }
            ]
        }
    };

 // botão ver mais ação modal
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card_projeto');
            const titulo = card.querySelector('h3').textContent;
            const projeto = projetos[titulo];

            modalTitulo.textContent = titulo;
            modalConteudo.innerHTML = `
                <p><strong>${projeto.descricao}</strong></p>
                <div class="modal_galeria">
                    ${projeto.imagens.map(img => `
                        <img src="${img}" alt="${titulo}" class="modal_imagem">
                    `).join('')}
                </div>
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


    //fecha o modal
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});