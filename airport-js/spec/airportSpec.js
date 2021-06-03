describe("Airport", function() {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  })

  describe("land", function() {
    it("orders a plane to land", function () {
      spyOn(airport, 'isStormy').and.returnValue(false);
      airport.land(plane);
      expect(plane.getState()).toEqual("landed")
    });
    it("fails when the airport is full", function (){
      spyOn(airport, 'isStormy').and.returnValue(false);
      for(i = 1; i <= 20; i++) {
        airport.land(new Plane());
      }
      expect( function(){ airport.land(plane); } ).toThrowError('The airport is full');
    });
  });

  describe("takeoff", function(){
    it("orders a plane to takeoff", function() {
      spyOn(airport, 'isStormy').and.returnValue(false);
      airport.land(plane)
      airport.takeoff(plane)
      expect(plane.getState()).toEqual("flying");
    })
    it("fails when the plane is not landed at that airport", function() {
      spyOn(airport, 'isStormy').and.returnValue(false);
      expect( function(){ airport.takeoff(plane); } ).toThrowError('This plane is not landed at this airport')
    })
  })
  describe("constructor", function() {
    it("has a default capacity of 20", function() {
      expect(airport.capacity).toEqual(20);
    })
    it("capacity changes with an argument", function() {
      airport2 = new Airport(30);
      expect(airport2.capacity).toEqual(30)
    })
  })
  describe("weather", function() {
    it("throws an error on landing when stormy", function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect( function(){ airport.land(plane); } ).toThrowError('Landing is prevented during storm');
    })
    it("throws an error on takeoff when stormy", function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect( function(){ airport.takeoff(plane); } ).toThrowError('Takeoff is prevented during storm');
    })
  })
})