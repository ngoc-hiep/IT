let i;
let j;
let sout;
sout = "<table border='1' width='600'>"
sout = sout + "<tr>";
for( i= 1; i<= 9; i++){
    for(j= 2; j<= 9; j++){
        sout = sout + "<td>" + j + "x" + i +"="+ ( j*i ) +"</td>";
    }  
    sout = sout + "</tr>"; 
    }
    sout = sout + "</table>";
document.write(sout)


