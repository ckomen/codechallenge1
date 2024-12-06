const readline = require('readline-sync');
const prompt = require('prompt-sync')();
function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);
        
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

// Test cases:
let speed = parseInt(prompt("Enter the car's speed:"));
let result = checkSpeed(speed);
console.log(result);
