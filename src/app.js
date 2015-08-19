thermostat = new Thermostat();

TemperatureColour = function() {
  temperature.style.color = thermostat.colorChange();
};

DisplayTemp = function() {
  temperature.innerHTML = thermostat.temperature();
};

$(document).ready(function() {
  $('#temperature').show(function(){
    DisplayTemp();
    TemperatureColour();
  })

  $('#upButton').click(function(){
    thermostat.increaseTemperature();
    DisplayTemp();
    TemperatureColour();
  })

  $('#downButton').click(function() {
    thermostat.decreaseTemperature();
    DisplayTemp();
    TemperatureColour();
  })

  $('#resetButton').click(function() {
    thermostat.resetTemperature();
    DisplayTemp();
    TemperatureColour();
  })

  $('#saveButton').click(function() {
    console.log('hello');
     thermostat.switchMode();
     TemperatureColour();
     DisplayTemp();

  })

})




// var temperature = document.getElementById('temperature'); {
//   temperature.innerHTML = thermostat.temperature();
// };

// var upButton = document.getElementById('upButton');
// upButton.onclick = function() {
//                                 thermostat.increaseTemperature();
//                                 DisplayTemp();
//                                 TemperatureColour();
//                               };

// var downButton = document.getElementById('downButton');
// downButton.onclick = function() {
//                                   thermostat.decreaseTemperature();
//                                   DisplayTemp();
//                                   TemperatureColour();
//                                 };

// var resetButton = document.getElementById('resetButton');
// resetButton.onclick = function() {
//                                     thermostat.resetTemperature();
//                                     DisplayTemp();
//                                     TemperatureColour();
//                                   };

// var saveButton = document.getElementById('saveButton');
// saveButton.onclick = function() {
//                         console.log('hello');
//                                      thermostat.switchMode();
//                                      TemperatureColour();
//                                      DisplayTemp();
//
//                                  };
