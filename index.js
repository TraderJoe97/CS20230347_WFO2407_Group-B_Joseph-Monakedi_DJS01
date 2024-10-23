

// Given Parameters
const initialVelocity = { value: 10000, unit: 'km/h' }; // velocity (km/h)
const acceleration = { value: 3, unit: 'm/s^2' }; // acceleration (m/s^2)
const time = { value: 3600, unit: 's' }; // time (s) 
const initialDistance = { value: 0, unit: 'km' }; // distance (km)
const initialFuel = { value: 5000, unit: 'kg' }; // initial fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = { value: 0.5, unit: 'kg/s' }; // fuel burn rate (kg/s)

const newDistance = {
  value: initialDistance.value + (initialVelocity.value * time.value) / 3600,
  unit: 'km',
};
const remainingFuel = {
  value: initialFuel.value - fuelBurnRate.value * time.value,
  unit: 'kg',
};
const newVelocity = calcNewVel(acceleration, initialVelocity, time);

/**
 * Calculate the new velocity based on acceleration, initial velocity, and time.
 * 
 * @param {Object} acceleration - Acceleration object with value and unit properties. Unit must be 'm/s^2'.
 * @param {Object} initialVelocity - Initial velocity object with value and unit properties. Unit must be 'km/h'.
 * @param {Object} time - Time object with value and unit properties. Unit must be 's'.
 * @returns {object} - New velocity object with value and unit properties.
 * @throws Will throw an error if parameters are not of type object or are negative.
 * @throws Will throw an error if unit of parameters are not as specified.
 */
function calcNewVel(acceleration, initialVelocity, time) {
  if (
    typeof acceleration !== 'object' ||
    typeof initialVelocity !== 'object' ||
    typeof time !== 'object'
  ) {
    throw new Error("All parameters must be objects.");
  }
  if (acceleration.unit !== 'm/s^2') {
    throw new Error("Acceleration unit must be 'm/s^2'.");
  }
  if (initialVelocity.unit !== 'km/h') {
    throw new Error("Initial velocity unit must be 'km/h'.");
  }
  if (time.unit !== 's') {
    throw new Error("Time unit must be 's'.");
  }
  if (time.value < 0) {
    throw new Error("time must be non-negative.");
  }
  const newVelocity = {
    value: initialVelocity.value + acceleration.value * time.value * 3.6,
    unit: 'km/h',
  };
  return newVelocity;
}

console.log(`New Velocity: ${newVelocity.value} ${newVelocity.unit}`);
console.log(`New Distance: ${newDistance.value} ${newDistance.unit}`);
console.log(`Remaining Fuel: ${remainingFuel.value} ${remainingFuel.unit}`);



