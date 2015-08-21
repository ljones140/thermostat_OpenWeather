thermostat = new Thermostat();

TemperatureColour = function() {
  temperature.style.color = thermostat.colorChange();
};

DisplayTemp = function() {
  temperature.innerHTML = thermostat.temperature();
  // sendTemp(thermostat.temperature());
      $.ajax({
      type: "POST",
      url: "/",
      data: { 'temperature': thermostat.temperature()
      }
    });
};

$(document).ready(function() {
  $('#temperature').show(function(){
    DisplayTemp();
    TemperatureColour();
  });

  $('button').eq(0).click(function(){
    thermostat.increaseTemperature();
    DisplayTemp();
    TemperatureColour();
  });

  $('button').eq(1).click(function() {
    thermostat.decreaseTemperature();
    DisplayTemp();
    TemperatureColour();
  });

  $('button').eq(3).click(function() {
    var city = $('input:text').val();
    getCityWeather(city);
  });

  var getCityWeather = function(city) {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric', function(result) {
      showWeather(result);
    });
  };

  var showWeather = function(result) {
    $('#weather').html('City: ' + result.name + ' Weather: ' + result.main.temp + ' ' + result.weather[0].description);
  };


  $('#resetButton').click(function() {
    thermostat.resetTemperature();
    DisplayTemp();
    TemperatureColour();
  });

  $('#saveButton').click(function() {
     thermostat.switchMode();
     TemperatureColour();
     DisplayTemp();
  });

  // var sendTemp = function(temperature) {
  //   $.ajax({
  //     type: "POST",
  //     url: "/",
  //     data: { 'temperature':'123'
  //     },
  //     success: function(msg){
  //     alert('wow' + msg);
  //     }
  //   });
  // };

});




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
