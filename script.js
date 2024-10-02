// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding the getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + " " + this.model;
};

// Constructor function for SportsCar
function SportsCar(make, model, topSpeed) {
    // Call the parent constructor
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
