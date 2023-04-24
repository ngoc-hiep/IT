// Bài 1
if(browser ='Edge') {
    alert("You've got the Edge");
}else if(browser = 'Chrome')||(browser ='Firefox')||(browser = 'Safari')||(browser ='Opera'){
    alert("Okay we support these browers too");
}else {
    alert("We hope that this page looks ok!");
}
// Bài 1 với switch
switch(browser) {
    case 'Edge':
        alert("You've got the Edge");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert("Okay we support these browers too");
        break;
    default:
        alert("We hope that this page looks ok!");
}
// Bài 2
let a = prompt('a?','');
switch(a){
    case '0':
        alert('0');
        break;
    case '1':
        alert('1');
        break;
    case '2':
    case '3':
        alert('2,3');
        break;
}
// Bài 3 với if..else
let value = prompt('Type a number', 0);
if(value > 0){
    alert('1');
}else if(value < 0){
    alert('-1');
}else{
    alert('0');
}
// Bài 3 với switch...case
let value = prompt('Type a number', 0);
switch(value){
    case '> 0':
        alert('1');
        break;
    case '< 0':
        alert('-1');
        break;
    default:
        alert('0');
}
