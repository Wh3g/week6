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
      thermostat.up(4);
      expect(thermostat.temp).toEqual(24);
    })
    it("has max temp of 25 when power saving is on", function() {
      expect( function(){ thermostat.up(6); }).toThrowError("The maximum temperature is 25 degrees with Power Saving");
    })
    it("has max temp of 32 when power saving is off", function() {
      thermostat.powerSavingModeOff();
      expect( function(){ thermostat.up(13); }).toThrowError("The maximum temperature is 32 degrees without Power Saving");
    })
  })

  describe("down", function() {
    it("decreases the temp", function() {
      thermostat.down(10);
      expect(thermostat.temp).toEqual(10);
    })
    it("has a minimum temp of 10 degrees", function() {
      expect( function(){ thermostat.down(11); }).toThrowError("The minimum temperature is 10 degrees");
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
      thermostat.down(3);
      expect(thermostat.getEnergyUsage()).toEqual("low-usage");
    })
    it("returns medium-usage when temp is up to 25", function() {
      thermostat.up(5);
      expect(thermostat.getEnergyUsage()).toEqual("medium-usage");
    })
    it("returns high-usage when temp is more than 25", function() {
      thermostat.powerSavingModeOff();
      thermostat.up(6);
      expect(thermostat.getEnergyUsage()).toEqual("high-usage");
    })
  })
})