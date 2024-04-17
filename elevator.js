// set the elevator id's call to hidden
function hideElevator() {
    // loop through elevator-2 to elevator-6
    for (let i = 2; i <= 6; i++) {
        // remove the elevator class
        document.getElementById(`elevator-${i}`).classList.remove('elevator');
        
        // set the class
        document.getElementById(`elevator-${i}`).classList.add('elevator-hidden');
    }
}

hideElevator();

let currentFloor = 1;
let previousClass = '';

function floorButton(floor) {
    floorButtonSelected(document.getElementById(`floor-${floor}-button`));

    // do nothing if the floor is the same as the current floor
    if (currentFloor === floor) {
        return;
    }

    // get the elevator element
    let elevator = document.getElementById('elevator-1');

    // remove the previous class
    if (previousClass !== '') {
        elevator.classList.remove(previousClass);
    }

    // add class to move the elevator
    elevator.classList.add(`elevator-${currentFloor}-to-${floor}`);    

    // set the previous class
    previousClass = `elevator-${currentFloor}-to-${floor}`;
    
    // set the current floor
    currentFloor = floor;
}

function floorButtonSelected(button) {
    // turn button green when selected
    button.classList.add('floor-button-selected');
}