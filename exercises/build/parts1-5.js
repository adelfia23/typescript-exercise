import { SpaceLocation } from './SpaceLocation.js';
// Part 1: Declare (5) Variables With Type
const spacecraftName = 'Determination';
const speedMph = 17500;
const kilometersToMars = 225000000;
const kilometersToTheMoon = 384400;
const milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
const milesToMars = kilometersToMars * milesPerKilometer;
const hoursToMars = milesToMars / speedMph;
const daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
//console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`)
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    const milesToLocation = kilometersAway * milesPerKilometer;
    const hoursToLocation = milesToLocation / speedMph;
    const daysToLocation = hoursToLocation / 24;
    return daysToLocation;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);
// Part 4: Create a Spacecraft Class
class Spacecraft {
    constructor(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        const milesToLocation = kilometersAway * this.milesPerKilometer;
        const hoursToLocation = milesToLocation / this.speedMph;
        const daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    }
    printDaysToLocation(location) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
}
// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.
// Add the printDaysToLocation function to the Spacecraft class.
// Use the class instance to print out the days to Mars and the Moon here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
//# sourceMappingURL=parts1-5.js.map