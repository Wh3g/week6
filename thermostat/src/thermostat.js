class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.MIN_TEMP = 10;
    this.MAX_TEMP_PS = 25;
    this.MAX_TEMP = 32;
    this.temp = this.DEFAULT_TEMP;
    this.powerSavingMode = true
  }

  up(number) {
    if(this.powerSavingMode == true && (this.temp + number) > this.MAX_TEMP_PS) {
      throw new Error("The maximum temperature is 25 degrees with Power Saving");
    }
    if(this.powerSavingMode == false && (this.temp + number) > this.MAX_TEMP) {
      throw new Error("The maximum temperature is 32 degrees without Power Saving");
    }
    this.temp += number;
  }

  down(number) {
    if((this.temp - number) < this.MIN_TEMP) {
      throw new Error('The minimum temperature is 10 degrees');
    }
    this.temp -= number;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }

  resetTemp() {
    this.temp = this.DEFAULT_TEMP;
  }

  getEnergyUsage() {
    if (this.temp < 18) {
      return "low-usage";
    } else if(this.temp <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}