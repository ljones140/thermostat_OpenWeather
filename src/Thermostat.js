var Thermostat = function() {
  this.temp = 20;
  this.isPowerSaveOn = true;
};


Thermostat.prototype.temperature = function() {
  return this.temp + ' °C';
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.temp >= 32 && this.isPowerSaveOn == false) {
    this.temp = 32;
  } else if (this.temp >= 25 && this.isPowerSaveOn == true) {
    this.temp = 25;
  } else {
    this.temp++;
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temp <= 10) {
    return this.temp;
  } else {
    this.temp--;
  }
};

Thermostat.prototype.powerSave = function() {
   return this.isPowerSaveOn;
 };

Thermostat.prototype.switchMode = function() {
  if (this.isPowerSaveOn === true) {
    this.isPowerSaveOn = false;
  } else {
    this.isPowerSaveOn = true;
  }

  if (this.temp > 25) {
    this.temp = 25;
  }
};

Thermostat.prototype.resetTemperature = function() {
  return this.temp = 20;
};

Thermostat.prototype.colorChange = function() {
  if (this.temp < 18) {
    return 'green';
  } else if (this.temp > 25) {
    return 'red';
  } else {
    return 'orange';
  }
};
