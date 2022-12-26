function btnOperation() {
    var random = Math.random();
    if (random > 0.5) {
        carStarted();
    } else {
        carCannotBeStarted();
    }
}

function engineCrashed() {
    devLog('engine crashed');
    drawStatus('Engine have crashed. Car stopped');
    startButton.classList.remove('hide');
}

function drawStatus(status) {
    statusLabel.innerHTML = status;
}

function devLog(message) {
    console.log(message);
}

function carStarted() {
    drawStatus('Car have started');
    devLog('Car have started');
    startButton.classList.add('hide');
    window.setTimeout(engineCrashed, 2000);
    devLog('we wait crash')
}

function carCannotBeStarted() {
    devLog('Something wrong');
    drawStatus('Car can\'t be started. try again!');
}

var startButton = document.querySelector('#start-car');
var statusLabel = document.querySelector('#status');
startButton.addEventListener('click', btnOperation)