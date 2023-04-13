 // Get a random number from 0 to size
function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
};

 // Calculate distance between click event and target
function getDistance(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

 // Get a string representing the distance
function getDistanceHint(distance) {
    if (distance < 10) {
        return ("Boiling hot!");
    } else if (distance < 20) {
        return ("Really hot");
    } else if (distance < 40) {
        return ("Hot");
    } else if (distance < 80) {
        return ("Warm");
    } else if (distance < 160) {
        return ("Cold");
    } else if (distance < 320) {
        return ("Really cold");
    } else {
        return ("Freezing");
    }
};

  // Set up variables
let width = 500;
let height = 500;
let clicks = 0;

  // Create a random target location
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

  // Add a click handler to a image element
$("#map").click(function (event) {
    clicks++;
    
      // Get distance between click and target
    let distance = getDistance (event, target);
     // Convert distance to a hint
    let distanceHint = getDistanceHint (distance);

      // Update the #distance element with the new hint
    $("#distance").text(distanceHint);

      // If the click was close enough, inform they won
    if (distance < 10) {
        alert("Found the treasure in " + clicks + " clicks!");
    };
});