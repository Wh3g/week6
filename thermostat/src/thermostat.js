class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.MIN_TEMP = 10;
    this.MAX_TEMP_PS = 25;
    this.MAX_TEMP = 32;
    this.MED_ENERGY_LIMIT = 18;
    this.HIGH_ENERGY_LIMIT = 25;
    this.temp = this.DEFAULT_TEMP;
    this.powerSavingMode = true
  }

  up() {
    if(this.powerSavingMode == true && (this.temp + 1) > this.MAX_TEMP_PS) {
      throw new Error("The maximum temperature is 25 degrees with Power Saving");
    }
    if(this.powerSavingMode == false && (this.temp + 1) > this.MAX_TEMP) {
      throw new Error("The maximum temperature is 32 degrees without Power Saving");
    }
    this.temp += 1;
  }

  down() {
    if((this.temp - 1) < this.MIN_TEMP) {
      throw new Error('The minimum temperature is 10 degrees');
    }
    this.temp -= 1;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }

  resetTemp() {
    this.temp = this.DEFAULT_TEMP;
  }

  getEnergyUsage() {
    if (this.temp < this.MED_ENERGY_LIMIT) {
      return "low-usage";
    } else if(this.temp <= this.HIGH_ENERGY_LIMIT) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}