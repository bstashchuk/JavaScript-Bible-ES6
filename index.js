/**
 * CHALLENGE 7-1
 *
 * Insert new prototype "Vehicle.prototype" to the existing prototype chain
 *
 * CURRENT CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * > Object.protoype
 *
 * UPDATED CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * > Vehicle.prototype > Object.protoype
 *
 * Vehicle.prototype should set two additional
 * properties:
 * 1. maxSpeed
 * 2. weight
 *
 * It should also contain method "vehicleInfo"
 * available for any object down the prototype chain
 */

function Vehicle(props) {
  this.maxSpeed = props.maxSpeed;
  this.weight = props.weight;
}

Vehicle.prototype.vehicleInfo = function() {
  console.log(
    `Max speed of the vehicle is ${
      this.maxSpeed
    } and weight is ${this.weight}`
  );
};

function Airplane(props) {
  Vehicle.call(this, props);
  this.wingspan = props.wingspan;
  this.maxRangeOfFlight = props.maxRangeOfFlight;
}

Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.constructor = Airplane;

Airplane.prototype.airplaneInfo = function() {
  console.log(
    `Wingspan of the airplane is ${
      this.wingspan
    } and maximal range of flight is ${
      this.maxRangeOfFlight
    }`
  );
};

function CivilPlane(props) {
  Airplane.call(this, props);
  this.numberOfSeats = props.numberOfSeats;
}

CivilPlane.prototype = Object.create(Airplane.prototype);

CivilPlane.prototype.constructor = CivilPlane;

CivilPlane.prototype.seatsInfo = function() {
  console.log(this); // instance of the prototype
  console.log(
    `Number of seats in the plane is ${this.numberOfSeats}`
  );
};

CivilPlane.prototype.modifySeatsNumber = function(
  newSeatsQty
) {
  this.numberOfSeats = newSeatsQty;
};

const propsForSmallPlane = {
  numberOfSeats: 4,
  wingspan: 20,
  maxRangeOfFlight: 1000,
  maxSpeed: 800,
  weight: 15
};

const smallPlane = new CivilPlane(propsForSmallPlane);

const propsForLargePlane = {
  numberOfSeats: 250,
  wingspan: 60,
  maxRangeOfFlight: 3500,
  maxSpeed: 900,
  weight: 40
};

const largePlane = new CivilPlane(propsForLargePlane);

/**
 * VERIFICATION
 */
smallPlane.vehicleInfo(); // Max speed of the vehicle is 800 and weight is 15

largePlane.vehicleInfo(); // Max speed of the vehicle is 900 and weight is 40
