let userName = prompt("Who's there?",'');
let pass = prompt("Password?",'');
if(userName == 'Admin') {
    if(pass == 'TheMaster'){
        alert('Welcome!');
     } else if(pass == 'null'){
        alert('Canceled!');
     }else {
        alert('Wrong password');
     }    
} else if (userName == 'null'){
    alert('canceled');
}else {
    alert("I don't know you");
}