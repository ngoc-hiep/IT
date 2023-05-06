
function caculator(){
    let a = document.getElementById('myInput').value;
    switch(a){
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            alert("Tháng có 31 ngày");
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            alert("Tháng có 30 ngày");
            break;
        case '2':
            alert("Tháng có 28 ngày hoặc 29 ngày");
            break;
    }
}