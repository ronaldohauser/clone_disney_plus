document.addEventListener("DOMContentLoaded", function (e) {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector(".hero");

    window.addEventListener("scroll", function (e) {
        if (window.scrollY < heroSection.clientHeight) {
            document.querySelector(".header").classList.add("header--is-hidden");
        } else {
            document.querySelector(".header").classList.remove("header--is-hidden");
        }
    })

    buttons.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            const abaAlvo = e.target.dataset.tabButton;
            escondeAbas();
            document.querySelector(`[data-tab-id=${abaAlvo}]`).classList.add("shows__list--is-active");
            removeBordaBotaoAtivo();
            e.target.classList.add("shows__tabs__button--is-active");
        })
    })

    questions.forEach((question) => {
        question.addEventListener("click", function (e) {
            question.parentNode.classList.toggle("faq__questions__item--is-open")
        })
    })
})

function removeBordaBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach((btn) => {
        btn.classList.remove("shows__tabs__button--is-active");
    })
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach((tab) => {
        tab.classList.remove("shows__list--is-active")
    })
}