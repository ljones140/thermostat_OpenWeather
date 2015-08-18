thermostat = new Thermostat();

TemperatureColour = function() {
  temperature.style.color = thermostat.colorChange();
};

DisplayTemp = function() {
  temperature.innerHTML = thermostat.temperature();
}

var temperature = document.getElementById('temperature'); {
  temperature.innerHTML = thermostat.temperature();
};

var upButton = document.getElementById('upButton');
upButton.onclick = function() {thermostat.increaseTemperature();
                                DisplayTemp();
                                TemperatureColour();
                               };

var downButton = document.getElementById('downButton');
downButton.onclick = function() {thermostat.decreaseTemperature();
                                  DisplayTemp();
                                 TemperatureColour();
                                 };

var resetButton = document.getElementById('resetButton');
resetButton.onclick = function() {thermostat.resetTemperature();
                                    DisplayTemp();
                                   TemperatureColour();
                                     };

var saveButton = document.getElementById('saveButton');
saveButton.checked = function() {
                                   if(this.checked) {
                                     thermostat.switchMode();
                                     TemperatureColour();
                                       DisplayTemp();
                                   } else {
                                     thermostat.switchMode();
                                     TemperatureColour();
                                       DisplayTemp();
                                   };
                                 };
