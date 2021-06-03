class Airport {
  constructor(capacity = 20) {
    this.capacity = capacity;
    this.planes = [];
  }

  land(plane) {
    if(this.isStormy()) {
      throw new Error('Landing is prevented during storm');
    } else if(this.planes.length == this.capacity) {
      throw new Error('The airport is full');
    } else {
      this.planes.push(plane);
      plane.land();
    }
  }

  takeoff(plane) {
    if(this.isStormy()) {
      throw new Error('Takeoff is prevented during storm');
    } else if(this.planes.includes(plane) == false) {
      throw new Error('This plane is not landed at this airport')
    }
    
    plane.takeoff();
  }

  isStormy() {
    return (Math.random() > 0.5)
  }
}