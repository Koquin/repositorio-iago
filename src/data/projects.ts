export interface ImageItem {
  src: string;
  description: string;
}

export interface ImageSection {
  title: string;
  description: string;
  images: ImageItem[];
}

export interface Project {
  id: string;
  title: string;
  logo: string;
  description: string;
  images?: ImageItem[];
  sections?: ImageSection[];
}

export const projects: Project[] = [
  {
    id: 'orange-scout',
    title: 'Orange Scout',
    logo: '/logos/orange-scout.png',
    description: 'Sistema de análise e estatísticas de jogos com histórico e gerenciamento de partidas.',
    images: [
      { src: '/images/orange-scout/tela_inicial_select_game.jpeg', description: 'Tela inicial de seleção de jogo' },
      { src: '/images/orange-scout/tela_game_com_stats.jpg', description: 'Tela para anotar as estatísticas do jogo' },
      { src: '/images/orange-scout/tela_stats.jpeg', description: 'Tela de estatísticas pós jogo' },
      { src: '/images/orange-scout/tela_history_com_exemplos.jpeg', description: 'Tela de histórico de jogos' },
    ]
  },
  {
    id: 'saciar',
    title: 'Saciar',
    logo: '/logos/saciar.png',
    description: 'Sistema completo com gerenciamento para funcionários e aplicativo de auto-atendimento para clientes.',
    sections: [
      {
        title: 'Sistema de Gerenciamento',
        description: 'Painel administrativo para funcionários gerenciarem compras, clientes e resgates.',
        images: [
          { src: '/images/saciar/SaciarTelaLogin.png', description: 'Tela de login do sistema, onde só o funcionário tem acesso' },
          { src: '/images/saciar/SaciarTelaClientes.png', description: 'Tela de gerenciamento de clientes' },
          { src: '/images/saciar/SaciarTelaCompras.png', description: 'Tela de registro de compras' },
          { src: '/images/saciar/SaciarTelaResgates.png', description: 'Tela de resgates de prêmios' },
        ]
      },
      {
        title: 'Aplicativo de Auto-Atendimento',
        description: 'App para clientes consultarem pontos, realizarem resgates e gerenciarem cadastro.',
        images: [
          { src: '/images/saciar/app/saciar-app-tela-inicial.jpeg', description: 'Tela inicial onde o cliente se identifica para acessar seus pontos' },
          { src: '/images/saciar/app/saciar-app-cadastro.jpeg', description: 'Tela de cadastro do cliente, caso ele não possua cadastro' },
          { src: '/images/saciar/app/saciar-app-pontos.jpeg', description: 'Tela de consulta de pontos, mostrando as possíveis recompensas e a quantidade de pontos' },
          { src: '/images/saciar/app/saciar-app-resgate.jpeg', description: 'Tela após o resgate de um prêmio, contendo efeito sonoro para que o funcionário ouça' },
        ]
      }
    ]
  },
  {
    id: 'valdeci',
    title: 'Sistema Valdeci',
    logo: '/logos/valdeci.jpg',
    description: 'Sistema completo de gerenciamento de clientes, dívidas, produtos, compras e assinaturas.',
    images: [
      { src: '/images/valdeci/SistemaValdeciTelaNovaCompra.jpeg', description: 'Tela de registro de nova compra' },
      { src: '/images/valdeci/SistemaValdeciTelaClientes.jpeg', description: 'Tela mostrando os clientes com dividas em aberto' },
      { src: '/images/valdeci/SistemaValdeciTelaDividas.jpeg', description: 'Tela de dividas do cliente selecionado' },
      { src: '/images/valdeci/SistemaValdeciTelaProdutosDaDivida.jpeg', description: 'Tela de produtos da divida selecionada' },
      { src: '/images/valdeci/SistemaValdeciTelaAssinatura.jpeg', description: 'Tela de para fazer a assinatura, provando que o cliente fez a divida' },
    ]
  }
];
