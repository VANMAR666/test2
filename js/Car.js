function Car(containerId) {
    //Business Logic Layer
    that = this;
    this._engine = new Engine();
    this._gearBox = new GearBox();

    this._view = new CarView();
    this._view.addEventListener("start", function () {
        that.start();
    });

    //Util logic
    this._logger = new Logger();
    //
    this._view.render(containerId);
}

Car.prototype = {
    //interface
    start: function () {
        var random = Math.random();
        if (random > 0.5) {
            this._carStarted();
        } else {
            this._carCannotBeStarted();
        }
    },
    //private methods
    _carStarted: function () {
        this._logger.log('ok');
    },
    _carCannotBeStarted: function () {
        this._logger.log('error');
        this._view.drawStatus('Car can\'t be started. try again!');
    }

};