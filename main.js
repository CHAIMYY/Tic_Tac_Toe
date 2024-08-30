const table = document.getElementById('gridTable');

for (let i = 0; i < 20; i++) {
    const row = table.insertRow(); 
    for (let j = 0; j < 20; j++) {
        const cell = row.insertCell();  
        cell.textContent = '';
       
    }
}




