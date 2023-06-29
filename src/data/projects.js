const projects = [
    {
        id: 1,
        title: 'Organ',
        category: 'Aplicação Desktop',
        img: require('@/assets/images/projects/organ/imagem1or.png'),
        projectInfo: {
            shortSummary:
                'Gerenciador de agronegócio, desenvolvido em C# Windows Forms com base de dados SQL',
            technologies: [
                {
                    title: 'Ferramentas & Tecnologias',
                    techs: [
                        'C#',
                        'Windows Forms',
                        'SQL Sever',
                    ],
                },
            ],
            projectDetails: [
                {
                    id: 1,
                    details:
                        `O Organ é um sistema desktop gestor de agronegócio, e tem como foco:`
                },
                {
                    id: 2,
                    details: "- Manejo das lavouras, plantio e colheita."
                },
                {
                    id: 3,
                    details: "- Cadastro dos funcionários, clientes e fornecedores."
                },
                {
                    id: 4,
                    details: "- Criação de relatórios para controle."
                },
                {
                    id: 5,
                    details: "- Gestão do estoque das safras."
                },
                {
                    id: 6,
                    details: "- Controle do armazenamento dos insumos e ferramentas."
                },
                {
                    id: 7,
                    details: "- Gerenciamento dos solos."
                },
                {
                    id: 8,
                    details: "- Controle de pragas e doenças."
                },
                {
                    id: 9,
                    details: "- Visualização de dados de cotação de produtos e clima local."
                },



            ],

        },
        singleProjectHeader: {
            singleProjectTitle: 'Organ',
            singleProjectDate: 'Janeiro, 2019',
            singleProjectTag: 'Design, Desenvolvimento',
        },
        projectImages: [
            {
                id: 1,
                title: 'Pagina do plantio',
                img: require('@/assets/images/projects/organ/imagem1or.png'),
            },
            {
                id: 2,
                title: 'Pagina da colheita',
                img: require('@/assets/images/projects/organ/imagem2or.png'),
            },
            {
                id: 3,
                title: 'Pagina da fazenda',
                img: require('@/assets/images/projects/organ/imagem6or.png'),
            },
        ],
    },




    {
        id: 2,
        title: 'Organ Web',
        category: 'Aplicação Web',
        img: require('@/assets/images/projects/organ-web/imagem3.png'),
        projectInfo: {
            shortSummary:
                'Gerenciador de agronegócio integrado a um ecommerce, desenvolvido em ASP.NET MVC e base de dados MySQL modelada com o Entity Framework',
            technologies: [
                {
                    title: 'Ferramentas & Tecnologias',
                    techs: [
                        'C#',
                        'HTML',
                        'CSS',
                        'Bootstrap',
                        'JavaScript',
                        'Asp.Net MVC',
                        'Entity Framework',
                        'MySQL',
                    ],
                },
            ],
            projectDetails: [
                {
                    id: 1,
                    details:
                        'O Organ Web é um sistema web gerenciador de agronegócio integrado a um ecommerce próprio. Ele tem como funções principais:',
                },
                {
                    id: 2,
                    details:
                        '- Monitoramento da lavoura',
                },

                {
                    id: 3,
                    details:
                        '-Manejar o controle de pragas e doenças',
                },

                {
                    id: 4,
                    details:
                        '- Controlar e organizar os itens do estoque',
                },

                {
                    id: 5,
                    details:
                        '- Gerenciar funcionários, clientes e fornecedores',
                },

                {
                    id: 6,
                    details:
                        '- Criação de anúncios de venda dos produtos',
                },

                {
                    id: 7,
                    details:
                        '- Acompanhamento dos pedidos feitos pelo ecommerce',
                },


            ],

        },
        singleProjectHeader: {
            singleProjectTitle: 'Organ Web',
            singleProjectDate: 'Dezembro, 2019',
            singleProjectTag: 'Design, Full Stack',
        },
        projectImages: [
            {
                id: 1,
                title: 'Página inicial do Organ Web',
                img: require('@/assets/images/projects/organ-web/imagem1.png'),
            },
            {
                id: 2,
                title: 'Pagina do Ecommerce',
                img: require('@/assets/images/projects/organ-web/imagem2.png'),
            },
            {
                id: 3,
                title: 'Pagina do Dashboard do Sistema',
                img: require('@/assets/images/projects/organ-web/imagem3.png'),
            },
        ],
    },







    {
        id: 3,
        title: 'Pet View',
        category: 'Aplicação Desktop',
        img: require('@/assets/images/projects/pet_view/pet1.png'),
        projectInfo: {
            shortSummary:
                'O Pet View é um sistema desktop gestor de uma clínica veterinária, desenvolvido em C# e TSQL.',
            technologies: [
                {
                    title: 'Ferramentas & Tecnologias',
                    techs: [
                        'C#',
                        'Windows Forms',
                        'SQL Server',
                    ],
                },
            ],
            projectDetails: [
                {
                    id: 1,
                    details:
                        'O Pet View é um sistema desktop gestor de uma clínica veterinária, suas principais funções incluem:',
                },

                {
                    id: 2,
                    details:
                        '- Controle de agendamento de consultas, exames e tratamentos.',
                },

                {
                    id: 3,
                    details:
                        '- Cadastros de funcionários, médicos, clientes e animais.',
                },

                {
                    id: 4,
                    details:
                        '- Controle de acesso de usuário',
                },
            ],

        },
        singleProjectHeader: {
            singleProjectTitle: 'Pet View',
            singleProjectDate: 'Maio, 2019',
            singleProjectTag: 'Desenvolvimento',
        },
        projectImages: [
            {
                id: 1,
                title: 'Pagina de login Pet View',
                img: require('@/assets/images/projects/pet_view/pet1.png'),
            },
            {
                id: 2,
                title: 'Pagina do Exame',
                img: require('@/assets/images/projects/pet_view/pet2.png'),
            },
            {
                id: 3,
                title: 'Pagina da Agenda',
                img: require('@/assets/images/projects/pet_view/pet3.png'),
            },
        ],
    },






    {
        id: 4,
        title: 'Rolar dados',
        category: 'Aplicação Mobile',
        img: require('@/assets/images/projects/rolar_dados/principal.png'),
        projectInfo: {
            shortSummary:
                'Um rolador de dados para Android desenvolvido em Java',
            technologies: [
                {
                    title: 'Ferramentas & Tecnologias',
                    techs: [
                        'Java',
                        'Android',
                    ],
                },
            ],
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Rolador de dados desenvolvido para Android em Java.',
                },

                {
                    id: 2,
                    details:
                        'Ótimo para sessões de jogos de mesa e RPGs, simples e customizável para qualquer valor de dado, número de vezes que o dado será rolado, seus modificadores e com o valor final já calculado.',
                },
            ],

        },
        singleProjectHeader: {
            singleProjectTitle: 'Rolar dados',
            singleProjectDate: 'Setembro, 2019',
            singleProjectTag: 'Desenvolvimento',
        },
        projectImages: [
            {
                id: 1,
                title: 'Tela incial',
                img: require('@/assets/images/projects/rolar_dados/rol1.png'),
            },
            {
                id: 2,
                title: 'Dados preenchidos',
                img: require('@/assets/images/projects/rolar_dados/rol2.png'),
            },
            {
                id: 3,
                title: 'Resultado',
                img: require('@/assets/images/projects/rolar_dados/rol3.png'),
            },
        ],
    },




    {
        id: 5,
        title: 'Matrix Calculator',
        category: 'Aplicação Web',
        img: require('@/assets/images/projects/matriz/ope.png'),
        projectInfo: {
            shortSummary:
                'Calculadora online para operações com matrizes, desenvolvido em Vue, CSS, JavaScript e TypeScript.',
            technologies: [
                {
                    title: 'Ferramentas & Tecnologias',
                    techs: [
                        'HTML',
                        'CSS',
                        'Bootstrap',
                        'JavaScript',
                        'Vue.js'

                    ],
                },
            ],
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Uma calculadora online para realizar operações com matrizes.',
                },
            ],

        },
        singleProjectHeader: {
            singleProjectTitle: 'Matrix Calculator',
            singleProjectDate: 'Outubro, 2022',
            singleProjectTag: 'Full Stack',
        },
        projectImages: [
            {
                id: 1,
                title: 'Tela incial da calculadora',
                img: require('@/assets/images/projects/matriz/ope.png'),
            },
            {
                id: 2,
                title: ' Calcular o determinante',
                img: require('@/assets/images/projects/matriz/dete.png'),
            },
            {
                id: 3,
                title: 'Cassos do cálculo',
                img: require('@/assets/images/projects/matriz/cal.png'),
            },
        ],
    },
];

export default projects;
