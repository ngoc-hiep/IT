// Bài 1
let a = parseInt(prompt('nhap so a'));
for (a = 1; a < 100; a++){
    alert("The number is " + a);  
    if(a == 99){
        alert('finish');
    }     
}
// Bài 2
let b = 20;
do {
    if (b < 20){
        alert('yêu cầu người dùng tăng nhiệt độ');
    }else if( b > 100){
        alert('yêu cầu người dùng giảm nhiệt độ');
    }
    b++;
}
while (b < 100);