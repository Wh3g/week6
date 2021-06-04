document.addEventListener("DOMContentLoaded", () => {
  const updateTemp = () => {
    document.querySelector('#temperature').innerText = thermostat.temp + " ˚C";
    document.querySelector('#temperature').className = thermostat.getEnergyUsage();
  }

  const thermostat = new Thermostat();
  updateTemp();

  document.querySelector('#temp-up').addEventListener('click', () => {
    thermostat.up();
    updateTemp();
  });

  document.querySelector('#temp-down').addEventListener('click', () => {
    thermostat.down();
    updateTemp();
  });

  document.querySelector("#temp-reset").addEventListener('click', () => {
    thermostat.resetTemp();
    updateTemp();
  });

  document.querySelector('#power-saving-on').addEventListener('click', () => {
    thermostat.powerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'Power Saving Mode: On';
  })

  document.querySelector('#power-saving-off').addEventListener('click', () => {
    thermostat.powerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'Power Saving Mode: Off';
  })
});