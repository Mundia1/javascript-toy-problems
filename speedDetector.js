function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;
    
    // Check if speed is below limit
    if (speed <= speedLimit) {
        return "Ok";
    }
    
    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
    
    // Check if license should be suspended
    if (demeritPoints > maxPoints) {
        return "License suspended";
    }
    
    return `Points: ${demeritPoints}`;
}

// Test cases
console.log(speedDetector(60));  // "Ok"
console.log(speedDetector(80));  // "Points: 2"
console.log(speedDetector(135)); // "License suspended"