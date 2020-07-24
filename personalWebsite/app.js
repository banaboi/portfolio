
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".react");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === closeButton) {
        toggleModal();
    }
}

function main () {
    trigger.addEventListener('click', function () {
        toggleModal() }
    );

    closeButton.addEventListener('click', function () {
        windowOnClick()}
    );
}

main();

