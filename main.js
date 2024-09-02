const table = document.getElementById('gridTable');
const restartBtn = document.getElementById('restart');
const statusText = document.getElementById('status');
let turn = 'x';
let isGameOver = false;

const playerXInput = document.getElementById('px');
const playerOInput = document.getElementById('po');
const startGameBtn = document.getElementById('startGame');

const scoreXElement = document.getElementById('scorex');
const scoreOElement = document.getElementById('scoreo');

function createTable() {
    for (let i = 0; i < 20; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 20; j++) {
            let cell = row.insertCell();
            cell.textContent = '';

            cell.addEventListener('click', function handleClick() {
                if (cell.textContent === '' && !isGameOver) {
                    cell.textContent = turn;
                    if (checkWin(i, j, turn)) {
                        statusText.textContent = `Player ${turn.toUpperCase()} wins!`;
                        isGameOver = true;
                        scoreCount();
                        disableGrid();
                    } else {
                        turn = turn === 'x' ? 'o' : 'x';
                        statusText.textContent = `Player ${turn.toUpperCase()}'s turn`;
                    }
                }
            });
        }
    }
    document.getElementById('score').style.display = "block";
    document.getElementById("restart").style.display = "block";
}

function disableGrid() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            table.rows[i].cells[j].removeEventListener('click', handleClick);
        }
    }
}

function enableGrid() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            table.rows[i].cells[j].addEventListener('click', handleClick);
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

function addPlayer() {
    let datauserx = localStorage.getItem('usersx') ? JSON.parse(localStorage.getItem('usersx')) : [];
    let datausero = localStorage.getItem('userso') ? JSON.parse(localStorage.getItem('userso')) : [];
    document.getElementById('restart').style.display = "none";
    document.getElementById('score').style.display = "none";
    startGameBtn.onclick = function () {
        let namex = playerXInput.value || "Player X";
        let nameo = playerOInput.value || "Player O";

        datauserx.push(namex);
        datausero.push(nameo);

        localStorage.setItem('usersx', JSON.stringify(datauserx));
        localStorage.setItem('userso', JSON.stringify(datausero));

        
        document.querySelector("#playerform").style.display = "none";
        createTable();
    };
}

restartBtn.addEventListener('click', function() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            table.rows[i].cells[j].textContent = '';
        }
    }
    turn = 'x';
    isGameOver = false; 
    statusText.textContent = `Player ${turn.toUpperCase()}'s turn`;
    enableGrid();
});

function scoreCount() {
    if (turn === 'x') {
        let scoreX = parseInt(localStorage.getItem('scoreX') || '0') + 1;
        localStorage.setItem('scoreX', scoreX);
        scoreXElement.innerText = scoreX;
    } else if (turn === 'o') {
        let scoreO = parseInt(localStorage.getItem('scoreO') || '0') + 1;
        localStorage.setItem('scoreO', scoreO);
        scoreOElement.innerText = scoreO;
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    scoreXElement.innerText = localStorage.getItem('scoreX') || '0';
    scoreOElement.innerText = localStorage.getItem('scoreO') || '0';
    addPlayer();
});

