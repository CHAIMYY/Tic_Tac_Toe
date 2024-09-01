const table = document.getElementById('gridTable');
const restartBtn = document.getElementById('restart');
const statusText = document.getElementById('status');
let turn = 'x';
let playerX = document.querySelector("#px");
let playero = document.querySelector("#po");
const startG = document.getElementById('startGame')



function createTable(){

for (let i = 0; i < 20; i++) {
    const row = table.insertRow(); 
    for (let j = 0; j < 20; j++) {
        let cell = row.insertCell();  
        cell.textContent = '';

        cell.addEventListener('click', function() {
           
            // console.log(`Cell clicked: Row ${i + 1}, Column ${j + 1}`);
            
           
        

            if(turn === 'x' && cell.textContent === ''){
              cell.innerHTML = 'x';
              turn = 'o';
              statusText.textContent = `Player ${turn}'s turn`;

            }else if(turn === 'o' && cell.textContent === ''){
                cell.innerHTML = 'o';
                turn = 'x';
                statusText.textContent = `Player ${turn}'s turn`;

            }else{
               
                statusText.textContent = `Player ${turn}'s turn`

            }


        });
   
       
    }
    
}

}
adduser()

function adduser(){

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




