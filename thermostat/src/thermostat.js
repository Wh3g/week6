class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true
  }

  up(number) {
    if(this.powerSavingMode == true && (this.temp + number) > 25) {
      throw new Error("The maximum temperature is 25 degrees with Power Saving");
    }
    if(this.powerSavingMode == false && (this.temp + number) > 32) {
      throw new Error("The maximum temperature is 32 degrees without Power Saving");
    }
    this.temp += number;
  }

  down(number) {
    if((this.temp - number) < 10) {
      throw new Error('The minimum temperature is 10 degrees');
    }
    this.temp -= number;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }
}