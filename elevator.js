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