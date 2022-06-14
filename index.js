let rSelected = null;
let gSelected = null;


// 9x9 grid numbers (potentially fetch data from API)
let grid = [
    '1eee56ee9',
    'e9ee1eee3', 
    '47eee95e2',
    'ee5eee86e', 
    '36ee8eeee', 
    'e8e9eee7e',
    '8ee12eee6',
    'e54e9e12e',
    'e1e6eeee8',
]
// Define correct numbers in 9x9 grid
let solutionArray = [
    '123456789', 
    '598712643', 
    '476839512', 
    '945273861', 
    '367581294', 
    '281964375', 
    '839127456', 
    '654398127', 
    '712645938', 
]


// Boolean function that allows number to be included or rejected depending on accuracy

// Function that tracks time  and displays it
setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("cTime").innerHTML = date.toLocaleTimeString();
}

// Function that keeps score and displays it


// Function that populates the cells in the game grid and row of numbers that can be selected (Referenced tutorial here:https://www.youtube.com/watch?v=S4uRtTb8U-U)

window.onload = function(){
    populateCells();
}

function populateCells(){
    for (let i=1; i<=9; i++) {
        let rCell = document.createElement('div');
        rCell.id = i;
        rCell.innerText = i;
        rCell.addEventListener('click', selectRCell);
        rCell.classList.add('rCell');
        document.getElementById('row').appendChild(rCell);
    }

    for (let x=0; x<9; x++) {
        for (let y=0; y<9; y++) {
            let gCell = document.createElement('div');
            gCell.id = x.toString() + "e" + y.toString();
        if (grid[x][y] != "e"){
            gCell.innerText = grid[x][y];
            gCell.classList.add('gStyle');
        }
        if (x == 2 || x == 5) {
            gCell.classList.add('hBorder');
        }
        if (x == 2 || x == 5) {
            gCell.classList.add('vBorder');
        }
            gCell.addEventListener('click', selectGCell);
            gCell.classList.add('gCell');
            document.getElementById('grid').append(gCell);
        }
    }
}

// Function that selects a number in the bottom row (Referenced tutorial here:https://www.youtube.com/watch?v=S4uRtTb8U-U )

function selectRCell() {
    if (rSelected != null) {
        rSelected.classList.remove('cSelected')
    }
    rSelected = this;
    rSelected.classList.add('cSelected');
}

function selectGCell() {
    if (rSelected) {
        this.innerText = rSelected.id;
    }
}