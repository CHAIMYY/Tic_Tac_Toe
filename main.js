const table = document.getElementById('gridTable');
const restartBtn = document.getElementById('restart');
const statusText = document.getElementById('status');
let turn = 'x';


for (let i = 0; i < 20; i++) {
    const row = table.insertRow(); 
    for (let j = 0; j < 20; j++) {
        let cell = row.insertCell();  
        cell.textContent = '';

        cell.addEventListener('click', function() {
           
            console.log(`Cell clicked: Row ${i + 1}, Column ${j + 1}`);
            
           
        

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





