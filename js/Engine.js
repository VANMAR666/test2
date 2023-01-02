function Engine() {
    console.log('engine create');
}

Engine.prototype.start = function () {
    var random = Math.random();
    if (random > 0.5) {
        return true;
    } else {
        return false;
    }
}