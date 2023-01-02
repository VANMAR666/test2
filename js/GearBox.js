function GearBox() {
    this.gearBoxValue = 'N';
    this._logger=new Logger();
}

GearBox.prototype = {
    start: function () {
        this.gearBoxValue = 1;
        // processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
        //     gearBoxValueLabel.innerHTML = gearBoxValue;
        // });
        var self=this;
        gearBoxInterval = window.setInterval(function () {
                self._incrementGearBoxValue()
        }, 1000);
    },
    _incrementGearBoxValue: function () {
        if (this.gearBoxValue < 5) {
            this.gearBoxValue++;
            // processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
            //     gearBoxValueLabel.innerHTML = gearBoxValue;
            // });
        }
        this._logger.log("from gearBox: "+this.gearBoxValue);
    }
}