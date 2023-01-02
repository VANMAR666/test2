function CarView() {
    this._carStartedListeners = [];
}

CarView.prototype = {
    render: function (containerId) {
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
        this._startButtons = document.getElementById(containerId).querySelectorAll("[data-role='start-car']");
        this._statusLabels = document.getElementById(containerId).querySelectorAll("[data-role='status']");
        this._gearBoxValueLabels = document.getElementById(containerId).querySelectorAll("[data-role='gear-box-value']");

        var that = this;

        this._processEls(this._startButtons, function (startButton) {
            startButton.addEventListener('click', function (ev) {
                that._carStartListener(ev);
            });
        });
    },
    drawStatus: function (status) {
        this._processEls(this._statusLabels, function (statusLabel) {
            statusLabel.innerHTML = status;
        });
    },
    addEventListener: function (eventName, listener) {
        if (eventName == "start") {
            this._carStartedListeners.push(listener);
        }
    },
    onCarStarted: function () {
        this._processEls(this._startButtons, function (startButton) {
            startButton.disabled = true;
        });
    },
    _processEls: function (arrayOfEls, processor) {
        for (var i = 0; i < arrayOfEls.length; i++) {
            var item = arrayOfEls[i];
            processor.apply(this, [item]);
        }
    },
    _carStartListener: function (ev) {
        for (var i = 0; i < this._carStartedListeners.length; i++) {
            var listener = this._carStartedListeners[i];
            listener();
        }

    }
}