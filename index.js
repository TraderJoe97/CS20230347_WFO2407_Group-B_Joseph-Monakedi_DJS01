/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = {value:10000, unit:"km/h"}; // velocity (km/h)
const acc = {value:3, unit:"m/s^2"}; // acceleration (m/s^2)
const time = {value:3600, unit:"s"}; // time (s) 
const distance = {value:0, unit:"km"}; // distance (km)
const InitialFuel = {value:5000, unit:"kg"}; // initial fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = {value:0.5, unit:"kg/s"}; // fuel burn rate (kg/s)


const d2 = new distance d + (vel*time/3600) //calcultes new distance
const rf = fuel - fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

/**
 * Calculate the new velocity based on acceleration, initial velocity, and time.
 * 
 * @param {number} acc - Acceleration in meters per second squared (m/s^2). can be negetive
 * @param {number} vel - Initial velocity in kilometers per hour (km/h).
 * @param {number} time - Time in seconds.
 * @returns {number} - New velocity in kilometers per hour (km/h).
 * @throws Will throw an error if parameters are not of type number or are negative.
 */
function calcNewVel(acc, vel, time) {
  if (typeof acc !== 'number' || typeof vel !== 'number' || typeof time !== 'number') {
    throw new Error("All parameters must be numbers.");
  }
  if (time < 0) {
    throw new Error("time must be non-negative.");
  }
  return vel + (acc * time) * 3.6;
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






