// get the elevator element
let elevator = document.getElementById('elevator-1');

let currentFloor = 1;
let previousClass = '';
let canMove = true;

// create a queue for the elevator to go to
let queue = [];

function floorButton(floor) {
    // do nothing if the floor is the same as the current floor
    if (currentFloor === floor) {
        return;
    }

    // add the floor to the queue
    queue.push(floor);

    // change the button to selected
    floorButtonSelected(document.getElementById(`floor-${floor}-button`));

    // if the elevator is moving
    if (!canMove) {
        return;
    }

    let time = timeForElevator(currentFloor, floor);

    // remove the previous class
    if (previousClass !== '') {
        elevator.classList.remove(previousClass);
    }

    // set the canMove to false
    canMove = false;

    // add class to move the elevator
    elevator.classList.add(`elevator-${currentFloor}-to-${floor}`);

    // start the timer
    timer(floor, time);

    // set the previous class
    previousClass = `elevator-${currentFloor}-to-${floor}`;
    
    // set the current floor
    currentFloor = floor;
}

function floorButtonSelected(button) {
    // turn button green when selected
    button.classList.add('floor-button-selected');
}

function floorButtonDeselected(button) {
    // turn button white when deselected
    button.classList.remove('floor-button-selected');
}

function timeForElevator(currentFloor, nextFloor) {
    let time = Math.abs(currentFloor - nextFloor) + 1;
    return time;
}

function timer(floor, time) {
    setTimeout(() => {
        // deselect the button
        floorButtonDeselected(document.getElementById(`floor-${floor}-button`));

        // remove the floor from the queue
        queue.shift();

        canMove = true;

    }, time * 1000);
}