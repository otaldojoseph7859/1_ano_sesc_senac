function setActiveButton(button, selector) {
    document.querySelectorAll(selector).forEach(currentButton => {
        currentButton.classList.remove("active");
        currentButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
}

/* ===========================================
   flex-direction
=========================================== */

const directionContainer = document.getElementById("container");
const directionValue = document.getElementById("value");
const directionButtons = document.querySelectorAll("[data-direction]");

directionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const direction = button.dataset.direction;

        directionContainer.style.flexDirection = direction;
        directionValue.textContent = direction;

        setActiveButton(button, "[data-direction]");
    });

});

/* ===========================================
   justify-content
=========================================== */

const justifyContainer = document.querySelector(".justify-container");
const justifyValue = document.querySelector(".justify-value");
const justifyButtons = document.querySelectorAll("[data-justify]");

justifyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.justify;

        justifyContainer.style.justifyContent = value;
        justifyValue.innerText = value;

        setActiveButton(button, "[data-justify]");
    });

});

/* ===========================================
   align-items
=========================================== */

const alignContainer = document.querySelector(".align-container");
const alignValue = document.querySelector(".align-value");
const alignButtons = document.querySelectorAll("[data-align]");

alignButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.align;

        alignContainer.style.alignItems = value;
        alignValue.innerText = value;

        setActiveButton(button, "[data-align]");
    });

});

/* ===========================================
   gap
=========================================== */

const gapContainer = document.querySelector(".gap-container");
const gapValue = document.querySelector(".gap-value");
const gapButtons = document.querySelectorAll("[data-gap]");

gapButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.gap;

        gapContainer.style.gap = value;
        gapValue.innerText = value;

        setActiveButton(button, "[data-gap]");
    });

});

/* ===========================================
   flex-wrap
=========================================== */

const wrapContainer = document.querySelector(".wrap-container");
const wrapValue = document.querySelector(".wrap-value");
const wrapButtons = document.querySelectorAll("[data-wrap]");

wrapButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.wrap;

        wrapContainer.style.flexWrap = value;
        wrapValue.textContent = value;

        setActiveButton(button, "[data-wrap]");
    });

});

/* ===========================================
   flex-flow
=========================================== */

const flowContainer = document.querySelector(".flow-container");
const flowValue = document.querySelector(".flow-value");
const flowButtons = document.querySelectorAll("[data-flow]");

flowButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.flow;

        flowContainer.style.flexFlow = value;
        flowValue.textContent = value;

        setActiveButton(button, "[data-flow]");
    });

});

/* ===========================================
   align-content
=========================================== */

const alignContentContainer = document.querySelector(".align-content-container");
const alignContentValue = document.querySelector(".align-content-value");
const alignContentButtons = document.querySelectorAll("[data-align-content]");

alignContentButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.alignContent;

        alignContentContainer.style.alignContent = value;
        alignContentValue.textContent = value;

        setActiveButton(button, "[data-align-content]");
    });

});

/* ===========================================
   order
=========================================== */

const orderItem = document.querySelector(".item-order");
const orderValue = document.querySelector(".order-value");
const orderButtons = document.querySelectorAll("[data-order]");

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.order;

        orderItem.style.order = value;
        orderValue.textContent = value;

        setActiveButton(button, "[data-order]");
    });

});

/* ===========================================
   flex-grow
=========================================== */

const growItem = document.querySelector(".item-grow");
const growValue = document.querySelector(".grow-value");
const growButtons = document.querySelectorAll("[data-grow]");

growButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.grow;

        growItem.style.flexGrow = value;
        growValue.textContent = value;

        setActiveButton(button, "[data-grow]");
    });

});

/* ===========================================
   flex-shrink
=========================================== */

const shrinkItem = document.querySelector(".item-shrink");
const shrinkValue = document.querySelector(".shrink-value");
const shrinkButtons = document.querySelectorAll("[data-shrink]");

shrinkButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.shrink;

        shrinkItem.style.flexShrink = value;
        shrinkValue.textContent = value;

        setActiveButton(button, "[data-shrink]");
    });

});

/* ===========================================
   flex-basis
=========================================== */

const basisItem = document.querySelector(".item-basis");
const basisValue = document.querySelector(".basis-value");
const basisButtons = document.querySelectorAll("[data-basis]");

basisButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.basis;

        basisItem.style.flexBasis = value;
        basisValue.textContent = value;

        setActiveButton(button, "[data-basis]");
    });

});

/* ===========================================
   flex
=========================================== */

const flexItem = document.querySelector(".item-flex");
const flexValue = document.querySelector(".flex-value");
const flexGrowValue = document.querySelector(".flex-grow-value");
const flexShrinkValue = document.querySelector(".flex-shrink-value");
const flexBasisValue = document.querySelector(".flex-basis-value");
const flexButtons = document.querySelectorAll("[data-flex]");

function updateFlexDetails() {

    const computedStyle = getComputedStyle(flexItem);

    flexGrowValue.textContent = computedStyle.flexGrow;
    flexShrinkValue.textContent = computedStyle.flexShrink;
    flexBasisValue.textContent = computedStyle.flexBasis;

}

flexButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.flex;

        flexItem.style.flex = value;
        flexValue.textContent = value;
        updateFlexDetails();

        setActiveButton(button, "[data-flex]");
    });

});

updateFlexDetails();

/* ===========================================
   align-self
=========================================== */

const alignSelfItem = document.querySelector(".item-align-self");
const alignSelfValue = document.querySelector(".align-self-value");
const alignSelfButtons = document.querySelectorAll(
    "[data-align-self]"
);

alignSelfButtons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.alignSelf;

        alignSelfItem.style.alignSelf = value;
        alignSelfValue.textContent = value;

        setActiveButton(button, "[data-align-self]");
    });

});