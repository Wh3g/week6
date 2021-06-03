describe("Thermostat", function() {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  })
  
  describe("temp", function() {
    it("starts at 20 degrees", function() {
      expect(thermostat.temp).toEqual(20);
    })
  })

  describe("up", function() {
    it("increases the temp", function() {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    })
    it("has max temp of 25 when power saving is on", function() {
      for(i = 1; i <= 5; i++) {
        thermostat.up();
      }
      expect( function(){ thermostat.up(); }).toThrowError("The maximum temperature is 25 degrees with Power Saving");
    })
    it("has max temp of 32 when power saving is off", function() {
      thermostat.powerSavingModeOff();
      for(i = 1; i <= 12; i++) {
        thermostat.up();
      }
      expect( function(){ thermostat.up(); }).toThrowError("The maximum temperature is 32 degrees without Power Saving");
    })
  })

  describe("down", function() {
    it("decreases the temp", function() {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    })
    it("has a minimum temp of 10 degrees", function() {
      for(i = 1; i <= 10; i++) {
        thermostat.down();
      }
      expect( function(){ thermostat.down(); }).toThrowError("The minimum temperature is 10 degrees");
    })
  })

  describe("powerSavingModeOff", function() {
    it("turns off power saving mode", function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingMode).toEqual(false);
    })
  })

  describe("resetTemp", function() {
    it("resets temp to 20", function() {
      thermostat.up(3);
      thermostat.resetTemp();
      expect(thermostat.temp).toEqual(20);
    })
  })

  describe("getEnergyUsage", function() {
    it("returns low-usage when temp is below 18", function() {
      for(i = 1; i <= 3; i++) {
        thermostat.down();
      }
      expect(thermostat.getEnergyUsage()).toEqual("low-usage");
    })
    it("returns medium-usage when temp is up to 25", function() {
      for(i = 1; i <= 5; i++) {
        thermostat.up();
      }
      expect(thermostat.getEnergyUsage()).toEqual("medium-usage");
    })
    it("returns high-usage when temp is more than 25", function() {
      thermostat.powerSavingModeOff();
      for(i = 1; i <= 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getEnergyUsage()).toEqual("high-usage");
    })
  })
})