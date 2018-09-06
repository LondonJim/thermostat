function Thermostat() {
  this.STARTINGTEMP = 20;
  this.maximumTemperature = 25;
  this.MINIMUMTEMPERATURE = 10;
  this._temperature = this.STARTINGTEMP;
  this.isPowerSavingMode = true;
};

Thermostat.prototype.currentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if (this._temperature < this.maximumTemperature) {
    this._temperature += 1
  };
};

Thermostat.prototype.down = function() {
  if (this._temperature > this.MINIMUMTEMPERATURE) {
    this._temperature -= 1
  };
};

Thermostat.prototype.switchPowerSavingMode = function() {
  this.isPowerSavingMode = !this.isPowerSavingMode;
  this.isPowerSavingMode ? (this.maximumTemperature = 25) : (this.maximumTemperature = 32)
  this.temperatureCheck()
};

Thermostat.prototype.reset = function () {
  this._temperature = this.STARTINGTEMP;
};

Thermostat.prototype.energyUsage = function () {
  return (this.currentTemperature() < 18 ? 'low' : (this.currentTemperature() < 26 ? 'medium' : 'high' )).concat('-usage');
};

Thermostat.prototype.temperatureCheck = function () {
  if (this._temperature > this.maximumTemperature ) {
    this._temperature = this.maximumTemperature
  };
};

Thermostat.prototype.powerSavingState = function() {
  return (this.isPowerSavingMode ? 'on' : 'off' )
};
