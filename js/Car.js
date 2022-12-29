function Car(containerId) {
    this._engine = new Engine();
    this._gearBox = new GearBox();

    this._render(containerId);
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
        console.log('ok');
    },
    _carCannotBeStarted: function () {
        console.log('error');
    },
    _render: function (containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = `
        <div class="car">
            <div class="info-panel">
                <label>status: </label> <span data-role="status">off</span>
            </div>
            <div class="controls">
                <input data-role="start-car" type="button" value="Strat">
                <hr>
                <label>Gear box: </label> <span data-role="gear-box-value">N</span>
            </div>
        </div>
        `;
    }
};