// Define selected row cells and selected grid cells
let rSelected = null;
let gSelected = null;

//Set score
let score = 0;


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




// Function that tracks time  and displays it
setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("timeDisplay").innerHTML = date.toLocaleTimeString();
}


// Function that populates the cells in the game grid and row of numbers that can be selected (Referenced tutorial here:https://www.youtube.com/watch?v=S4uRtTb8U-U)

window.onload = function(){
    populateCells();
  
}

// Row of numbers
function populateCells(){
    for (let i=1; i<=9; i++) {
        let rCell = document.createElement('div');
        rCell.id = i;
        rCell.innerText = i;
        rCell.addEventListener('click', selectRCell);
        rCell.classList.add('rCell');
        document.getElementById('row').appendChild(rCell);
    }

    // Game grid
    for (let x=0; x<9; x++) {
        for (let y=0; y<9; y++) {
            let gCell = document.createElement('div');
            gCell.id = x.toString() + "e" + y.toString();
        if (grid[x][y] != "e"){
            gCell.innerText = grid[x][y];
            gCell.classList.add('gStyle');
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

// Function that places the selected number in a grid cell when it is clicked (Referenced tutorial here:https://www.youtube.com/watch?v=S4uRtTb8U-U )
function selectGCell() {
    if (rSelected) {
        if (this.innerText !='') {
            return;
        }
        

//location of cell in the grid (i.e. 0-0, 0-1, etc)
        let location = this.id.split('e');
        let x = parseInt(location[0]);
        let y = parseInt(location[1]);

        if(solutionArray[x][y] == rSelected.id) {
            this.innerText = rSelected.id;
        }
// Function that keeps score and displays it 
        else {
            score +=1;
            document.getElementById('score').innerText = score;
        }
    }

}