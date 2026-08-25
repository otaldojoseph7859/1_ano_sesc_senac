/* =========================================================
   JAVASCRIPT PLAYGROUND
   Arquivo principal do laboratório

   IMPORTANTE:
   Neste momento o arquivo contém apenas a estrutura geral
   de navegação do projeto.

   Os códigos didáticos de cada módulo serão adicionados
   posteriormente, conforme o planejamento das aulas.
   ========================================================= */


/* =========================================================
   1. SELEÇÃO DOS ELEMENTOS GERAIS DA INTERFACE
   ========================================================= */

// Seleciona todos os botões responsáveis pela troca dos módulos.
const moduleButtons = document.querySelectorAll(".module-nav-button");

// Seleciona todas as seções dos módulos.
const moduleSections = document.querySelectorAll(".module-section");

// Seleciona o elemento que mostra o módulo atual no cabeçalho.
const currentModuleLabel = document.querySelector("#current-module-label");


/* =========================================================
   2. FUNÇÃO RESPONSÁVEL POR EXIBIR UM MÓDULO
   ========================================================= */

/**
 * Exibe somente o módulo escolhido pelo usuário.
 *
 * @param {string} moduleId
 * ID da seção que deve ficar visível.
 */
function showModule(moduleId) {

    // Primeiro removemos a classe "active" de todas as seções.
    moduleSections.forEach(function (section) {
        section.classList.remove("active");
    });


    // Depois removemos a classe "active" de todos os botões.
    moduleButtons.forEach(function (button) {
        button.classList.remove("active");
    });


    // Procuramos a seção correspondente ao ID recebido.
    const selectedSection = document.querySelector(`#${moduleId}`);


    // Procuramos também o botão que aponta para essa seção.
    const selectedButton = document.querySelector(
        `[data-module-target="${moduleId}"]`
    );


    // Se a seção não existir, interrompemos a função.
    if (!selectedSection) {
        return;
    }


    // Exibe o módulo selecionado.
    selectedSection.classList.add("active");


    // Destaca o botão selecionado.
    if (selectedButton) {
        selectedButton.classList.add("active");
    }


    // Atualiza a informação "01 / 12", "02 / 12" etc.
    const moduleNumber = selectedSection.dataset.moduleNumber;

    currentModuleLabel.textContent = `${moduleNumber} / 12`;


    // Ao trocar de módulo, a página volta para o início
    // da área principal do laboratório.
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   3. EVENTOS DOS BOTÕES DE NAVEGAÇÃO
   ========================================================= */

// Percorre todos os botões de navegação.
moduleButtons.forEach(function (button) {

    // Adiciona um evento de clique em cada botão.
    button.addEventListener("click", function () {

        // Lê o valor armazenado no atributo:
        //
        // data-module-target="module-01"
        //
        // Neste exemplo, o valor obtido será "module-01".
        const moduleId = button.dataset.moduleTarget;


        // Exibe o módulo correspondente.
        showModule(moduleId);
    });

});


/* =========================================================
   4. ESPAÇO PARA OS MÓDULOS
   ========================================================= */


/* ---------------------------------------------------------
   MÓDULO 01 — INTRODUÇÃO AO JAVASCRIPT
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 02 — EVENTOS
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 03 — DOM
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 04 — ALTERAÇÃO DE CONTEÚDO
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 05 — ALTERAÇÃO DE ESTILOS
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 06 — VARIÁVEIS E VALORES
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 07 — ENTRADAS DE DADOS
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 08 — DECISÕES
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 09 — FUNÇÕES
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 10 — DOM DINÂMICO
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 11 — ANIMAÇÕES
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.


/* ---------------------------------------------------------
   MÓDULO 12 — JAVASCRIPT ASSÍNCRONO
   --------------------------------------------------------- */

// O código didático será desenvolvido posteriormente.
