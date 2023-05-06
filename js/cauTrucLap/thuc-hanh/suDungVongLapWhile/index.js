// Bài 1
let num 
let total = 0;
while( num != -1 ) {
   num = parseInt(prompt("Enter a number: ")) ;
   total += num;
 }
 alert("total:"+ total);
 // Bài 2
 let i = 1;
 while( i< 10 ){
    document.write("<hr width =" +i*3 +"px>");
    i++;
 }