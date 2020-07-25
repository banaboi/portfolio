
var reactModal = document.getElementById("react-modal");
var reactTrigger = document.getElementById("react");
var reactClose = document.getElementById("react-close-button");


var vbaModal = document.getElementById("vba-modal");
var vbaTrigger = document.getElementById("vba");
var vbaClose = document.getElementById("vba-close-button");

var portfolioModal = document.getElementById("portfolio-modal");
var portfolioTrigger = document.getElementById("portfolio");
var portfolioClose = document.getElementById("portfolio-close-button");

function toggleReactModal() {
    reactModal.classList.toggle("show-modal");
}

function toggleVbaModal() {
    vbaModal.classList.toggle("show-modal");
}

function togglePortfolioModal() {
    portfolioModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === reactClose) {
        toggleReactModal();
    } else if (event.target === vbaClose) {
        toggleVbaModal();
    } else if (event.target === portfolioModal) {
        togglePortfolioModal();
    }
}

function main () {
    reactTrigger.addEventListener('click', function () {
        toggleReactModal() }
    );

    vbaTrigger.addEventListener('click', function () {
        toggleVbaModal() }
    );

    portfolioTrigger.addEventListener('click', function () {
        togglePortfolioModal() }
    );

    reactClose.addEventListener('click', function () {
        windowOnClick()}
    );

    vbaClose.addEventListener('click', function () {
        windowOnClick()}
    );

    portfolioClose.addEventListener('click', function () {
        windowOnClick()}
    );
}

main();

