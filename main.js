const table = document.getElementById('gridTable');
const restartBtn = document.getElementById('restart');
const statusText = document.getElementById('status');
let turn = 'x';
let playerX = document.querySelector("#px");
let playero = document.querySelector("#po");
const startG = document.getElementById('startGame')
let isGameOver = false;
const score = document.getElementsByClassName('score');

function createTable(){

for (let i = 0; i < 20; i++) {
    const row = table.insertRow(); 
    for (let j = 0; j < 20; j++) {
        let cell = row.insertCell();  
        cell.textContent = '';

   

        cell.addEventListener('click', function handleClick() {
            if (cell.textContent === '' && !isGameOver) {
                cell.textContent = turn;
                if (checkWin(i, j, turn)) {
                    statusText.textContent = `Player ${turn} wins!`;
                    isGameOver = true; // Set the flag to true to stop further moves
                    disableGrid();
                } else {
                    turn = turn === 'x' ? 'o' : 'x';
                    statusText.textContent = `Player ${turn}'s turn`;
                }
            }
        });
   
       
    }
    
}
document.getElementById("restart").style.display = "block";
}


function disableGrid() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            table.rows[i].cells[j].removeEventListener('click', handleClick);
        }
    }
}

addPlayer()




function addPlayer(){

    

let datauserx;
let datausero;

if(localStorage.usersx != null){
    datauserx = JSON.parse(localStorage.usersx)
}else{
    datauserx = [];
}
if(localStorage.userso != null){
    datausero = JSON.parse(localStorage.userso)
}else{
    datausero = [];
}
document.getElementById("restart").style.display = "none";

startG.onclick = function (){

 let namex = playerX.value;
 let nameo = playero.value;

 datauserx.push(namex);
 datausero.push(nameo);
 localStorage.setItem('usersx', JSON.stringify(datauserx));
 localStorage.setItem('userso', JSON.stringify(datausero));

 document.querySelector("#playerform").style.display = "none";
 

 createTable()
} 


}


restartBtn.addEventListener('click', function() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            table.rows[i].cells[j].textContent = '';
        }
    }
    turn = 'x';
    isGameOver = false; 
    statusText.textContent = `Player ${turn}'s turn`;
    enableGrid();
});


function enableGrid() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            table.rows[i].cells[j].addEventListener('click', handleCellClick);
        }
    }
}

function checkDirection(row, col, player, rowDir, colDir) {
    let count = 1;
    count += countDirection(row, col, player, rowDir, colDir);
    count += countDirection(row, col, player, -rowDir, -colDir);
    return count >= 5;
}

function checkWin(row, col, player) {
    return (
        checkDirection(row, col, player, 0, 1) || 
        checkDirection(row, col, player, 1, 0) || 
        checkDirection(row, col, player, 1, 1) || 
        checkDirection(row, col, player, 1, -1)   
    );
}

function countDirection(row, col, player, rowDir, colDir) {

    // console.log(row, col, player, rowDir, colDir);

    let count = 0;
    let r = row + rowDir;
    let c = col + colDir;

    while (
        r >= 0 && r < 20 &&
        c >= 0 && c < 20 &&
        table.rows[r].cells[c].textContent === player
    ) {
        count++;
        r += rowDir;
        c += colDir;
    }
    return count;


}



