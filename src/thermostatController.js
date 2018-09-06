$(document).ready(function () {
  var thermostat = new Thermostat();

  $('#currentTemperature').text(thermostat.currentTemperature());
  $('#power-saving-mode').text(thermostat.powerSavingState());

  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving').on('click', function() {
    thermostat.switchPowerSavingMode();
    updateTemperature();
    updatePowerSaving();
  });

  function updatePowerSaving() {
    $('#power-saving-mode').text(thermostat.powerSavingState());
  };

  function updateTemperature() {
    $('#currentTemperature').text(thermostat.currentTemperature());
    if (thermostat.energyUsage() === 'low-usage') {
      $('#currentTemperature').css('color', 'blue')
    } else if (thermostat.energyUsage() === 'medium-usage') {
      $('#currentTemperature').css('color', 'black')
    } else {
      $('#currentTemperature').css('color', 'red')
    };
  };
});
