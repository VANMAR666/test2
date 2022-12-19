carBtn = document.querySelector('#start-car');
carBtn.addEventListener('click', btnOperation)

function btnOperation() {
    var random = Math.random();
    if (random > 0.5) {
        carBtn.classList.add('hide');
        console.log('Car have started');
        window.setTimeout(engine, 5000);
        console.log("we wait crash");
    } else {
        console.log('Something wrong');
    }
}

function engine() {
    console.log('engine crashed');
    carBtn.classList.remove('hide');
}

carBtn = document.querySelector('#start-car');
carBtn.addEventListener('click', btnOperation)