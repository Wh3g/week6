class Plane {

  constructor() {
    this.state = "flying";
  }

  land() {
    this.state = "landed";
  }

  takeoff() {
    this.state = "flying";
  }

  getState() {
    return this.state
  }
}