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
        detalhes: "Desenvolvido com HTML, CSS e JavaScript, este projeto explora conceitos de int" +
                "eração em ambientes virtuais aprendidos no primeiro semestre.",
        imagens: [
            "img/metaverso_modal.png", "img/metaverso_modal_2.png"
        ],
        links: [
            {
                texto: "Repositório",
                url: "https://github.com/SrGodoy/Trabalho-Metaverso",
                classe: "github"
            }
        ]
    },
    "Trabalho Rede e Internet": {
        descricao: "Teste e Simulação de Varias Redes Interligadas",
        detalhes: "Esse projeto mostra a criação e configuração de três redes LAN conectadas a um" +
                "a WAN, usando o Packet Tracer para simular a comunicação entre dispositivos. F" +
                "oram configurados IPs, roteadores e protocolos para garantir que todas as máqu" +
                "inas se comuniquem sem conflitos.",
        imagens: ["img/trabalho_rede_e_internet.png"],
        links: [
            {
                texto: "Imagem do Projeto",
                url: "https://drive.google.com/file/d/1a4zhrG71VrkLdCqiqs2505HQHLleQm2u/view?usp=dri" +
                        "ve_link",
                classe: "site"
            }, {
                texto: "Projeto do Packet Tracer",
                url: "https://drive.google.com/file/d/19-fxHz3rBrQansV8vjdcP-fzvmpEiIT1/view?usp=dri" +
                        "ve_link",
                classe: "github"
            }
        ]

    },
    "Projeto Pizzaria": {
        descricao: "Site Responsivo de uma Pizzaria fazendo uso de Javascript e CSS mais avançado",
        detalhes: "Foi desenvolvido um site de pizzaria estático e responsivo, usando HTML, CSS e" +
                " JavaScript, aplicando técnicas como media query e menu interativo. Foram conf" +
                "igurados layouts para mobile e desktop, com foco na manipulação de elementos g" +
                "ráficos e criação de uma navegação intuitiva.",
        imagens: [
            "img/pizza2.png", "img/pizza3.png", "img/pizza4.png"
        ],
        links: [
            {
                texto: "Repositório",
                url: "https://github.com/SrGodoy/DavinciPizza",
                classe: "github"
            }
        ]
    },
    "Projeto Banco de Dados": {
        descricao: "Banco de Dados com Chave Estrangeira",
        detalhes: "Esse projeto mostra a criação e configuração de um banco de dados relacional c" +
                "om seis tabelas interligadas, usando MySQL Workbench e SQL. Foram aplicados co" +
                "nceitos de chaves primárias e estrangeiras, além de comandos de manipulação de" +
                " dados para testar a lógica e o funcionamento do sistema.",
        imagens: ["img/banco_de_dados1.png"],
            links: [
            {
                texto: "Imagem do Projeto",
                 url: "https://drive.google.com/file/d/1WAxxLq-P5znZGyuAog21ksvfK6aUDuyh/view?usp=sharing" +
                
                        "ve_link",
                classe: "site"
            }, {
                texto: "Script do Banco",
               url: "https://drive.google.com/file/d/1ICqGDiTccjYlnaj0DF0krzSvtKLrAEhF/view?usp=sharing" +
                        "ve_link",
                classe: "github"
            }
        ]
},

   "Projeto Mercado X" : {
    descricao: "Aplicativo de Mercado mobile desenvolvido em Ionic com banco de dados",
    detalhes: "Esse projeto consistiu no desenvolvimento de um aplicativo para um supermercad" +
            "o local, integrando conceitos de design UX, programação assíncrona e banco de " +
            "dados. Utilizou-se o framework Ionic e a API IndexedDB, garantindo funcionalid" +
            "ade multiplataforma. O sistema foi projetado para otimizar a usabilidade e efi" +
            "ciência no fluxo de compras.",
    imagens: ["img/mercado_1.png", "img/mercado_2.png", "img/mercado_3.png"],
    links: [
        {
            texto: "Repositório",
            url: "https://github.com/SrGodoy/Mercado_X",
            classe: "github"
        }
    ]
},

    "Aplicação de Serviço" : {
    descricao: "Aplicação Java Cliente Servidor",
    detalhes: "Este projeto consistiu na criação de uma aplicação Java baseada em Programação" +
            " Orientada a Serviços, utilizando o Eclipse e o servidor Apache Tomcat. Implem" +
            "entou-se um serviço com dois métodos e um cliente consumidor, testados via SOA" +
            "P. O objetivo foi demonstrar a integração entre sistemas através de Web Servic" +
            "es.",
    imagens: [
        "img/microserviço_1.png", "img/microserviço_2.png", "img/microserviço_3.png", "img/microserviço_4.png"
    ],
    links: [
        {
            texto: "Repositório",
            url: "https://github.com/SrGodoy/Servi-o_Cliente_Javao",
            classe: "github"
        }
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