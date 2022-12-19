carBtn = document.querySelector('#start-car');
carBtn.addEventListener('click', btnOperation)

function btnOperation() {
    var random = Math.random();
    if (random > 0.5) {
        alert('Car have started');
    }
}
