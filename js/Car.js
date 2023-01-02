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
        var startResult = this._engine.start();
        if (startResult) {
            this._view.drawStatus('Car have started');
            this._view.onCarStarted();
            this._gearBox.start();
        } else {
            this._logger.log('Something wrong');
            this._view.drawStatus('Car can\'t be started. try again!');
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

}