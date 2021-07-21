var chessModal = document.getElementById("chess-modal");
var chessTrigger = document.getElementById("chess");
var chessClose = document.getElementById("chess-close-button");

var vbaModal = document.getElementById("vba-modal");
var vbaTrigger = document.getElementById("vba");
var vbaClose = document.getElementById("vba-close-button");

var portfolioModal = document.getElementById("portfolio-modal");
var portfolioTrigger = document.getElementById("portfolio");
var portfolioClose = document.getElementById("portfolio-close-button");

function togglechessModal() {
    chessModal.classList.toggle("show-modal");
}

function toggleVbaModal() {
    vbaModal.classList.toggle("show-modal");
}

function togglePortfolioModal() {
    portfolioModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === chessClose) {
        togglechessModal();
    } else if (event.target === vbaClose) {
        toggleVbaModal();
    } else if (event.target === portfolioModal) {
        togglePortfolioModal();
    } else if (event.target === sunswiftTrigger) {
        console.log("hey");
    }
}

function main() {
    chessTrigger.addEventListener("click", function () {
        togglechessModal();
    });

    vbaTrigger.addEventListener("click", function () {
        toggleVbaModal();
    });

    portfolioTrigger.addEventListener("click", function () {
        togglePortfolioModal();
    });

    chessClose.addEventListener("click", function () {
        windowOnClick();
    });

    vbaClose.addEventListener("click", function () {
        windowOnClick();
    });

    portfolioClose.addEventListener("click", function () {
        windowOnClick();
    });
}

main();
