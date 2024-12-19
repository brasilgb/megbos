const statusServico = [
    { value: 1, label: "Ordem Aberta" },
    { value: 2, label: "Ordem Fechada" },
    { value: 3, label: "Orçamento Gerado" },
    { value: 4, label: "Orçamento Aprovado" },
    { value: 5, label: "Executando reparo" },
    { value: 6, label: "(CA)Serviço concluído" },
    { value: 7, label: "(CN)Serviço concluído" },
    { value: 8, label: "Entregue ao cliente" },
];

const roleUser = [
    { value: 1, label: "Administrador" },
    { value: 2, label: "Usuário" },
    { value: 3, label: "Técnico" },
];

const statusUser = [
    { value: 1, label: "Ativo" },
    { value: 2, label: "Inativo" },
];

const movimentosProdutos = [
    { value: 1, label: "Entrada" },
    { value: 2, label: "Saída" },
];

const unidadesProdutos = [
    { value: 1, label: "Unidade" },
    { value: 2, label: "Caixa" },
    { value: 3, label: "Metros" },
    { value: 4, label: "Kg" },
    { value: 5, label: "Litros" },
];

const tiposProdutos = [
    { value: 1, label: "Nova" },
    { value: 2, label: "Usada" },
    { value: 3, label: "Seminova" },
    { value: 4, label: "Remanufaturada" },
];

const statusAgenda = [
    { value: 1, label: "Aberta" },
    { value: 2, label: "Em atendimento" },
    { value: 3, label: "Fechada" },
];

const statusMessage = [
    { value: 1, label: "Não lida" },
    { value: 2, label: "Lida" },
];

export {
    statusServico,
    statusUser,
    roleUser,
    movimentosProdutos,
    unidadesProdutos,
    tiposProdutos,
    statusAgenda,
    statusMessage
};
