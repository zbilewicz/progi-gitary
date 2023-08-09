$(document).ready(function(){
    
    const skala = ["C", "C#", "D","D#","E","F","F#","G","G#","A","A#","B"];
});

function createTable(){
    const skala = ["C", "C#", "D","D#","E","F","F#","G","G#","A","A#","B","C", "C#", "D","D#","E","F","F#","G","G#","A","A#","B","C", "C#", "D","D#","E","F","F#","G","G#","A","A#","B"];
    const struna = ["E","A","D","G","B","E"];
    var table=document.getElementById("myTable");
    table.innerHTML = '';
    var progi = parseInt(document.getElementById("progi").value);
    console.log(table,progi);
    // maybe make the thead at the bottom with progi names
    const tablica = document.createElement('table');
    const tbody = document.createElement('tbody');


    

    for (var i = 0; i < 6; i++) {
        var tr = document.createElement('tr');
        var p =document.createElement('td');
        p.textContent = `${struna[i]}`;
        tr.appendChild(p);
        for(var col= 1; col<progi;col++)
        {
            
          var ton = skala.indexOf(struna[i]);
          var td=document.createElement('td');
          td.textContent = `${skala[ton+col]}`;
          tr.appendChild(td);
        }

        tbody.appendChild(tr);
        //tbody.appendChild(p);
        

    }
    
    tablica.appendChild(tbody);
    table.appendChild(tablica);

};