// Espera que o documento seja completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões de abas e perguntas do FAQ
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    // Seleciona a seção "hero"
    const heroSection = document.querySelector(".hero");
    
    // Seleciona o elemento do cabeçalho
    const header = document.querySelector(".header");

    // Adiciona um ouvinte de evento de rolagem para controlar a visibilidade do cabeçalho
    window.addEventListener("scroll", function () {
        // Verifica se a posição de rolagem é menor que a altura da seção "hero"
        if (window.scrollY < heroSection.clientHeight) {
            // Oculta o cabeçalho
            header.classList.add("header--is-hidden");
        } else {
            // Exibe o cabeçalho
            header.classList.remove("header--is-hidden");
        }
    });

    // Adiciona ouvintes de evento para os botões de abas
    buttons.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            // Obtém o atributo personalizado do botão para determinar qual aba mostrar
            const abaAlvo = e.target.dataset.tabButton;
            // Esconde todas as abas
            escondeAbas();
            // Mostra a aba selecionada
            document.querySelector(`[data-tab-id=${abaAlvo}]`).classList.add("shows__list--is-active");
            // Remove a classe de ativo de todos os botões
            removeBordaBotaoAtivo();
            // Adiciona a classe de ativo ao botão clicado
            e.target.classList.add("shows__tabs__button--is-active");
        });
    });

    // Adiciona ouvintes de evento para as perguntas do FAQ
    questions.forEach((question) => {
        question.addEventListener("click", function (e) {
            // Alternar a classe que abre/fecha a pergunta no FAQ
            question.parentNode.classList.toggle("faq__questions__item--is-open");
        });
    });
});

// Função para remover a classe de ativo de todos os botões de abas
function removeBordaBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach((btn) => {
        btn.classList.remove("shows__tabs__button--is-active");
    });
}

// Função para esconder todas as abas
function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach((tab) => {
        tab.classList.remove("shows__list--is-active");
    });
}
