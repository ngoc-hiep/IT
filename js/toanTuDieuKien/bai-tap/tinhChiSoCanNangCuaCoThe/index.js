let weight = prompt('nhap weight');
let height = prompt('nhap height');
let bmi = weight/(height^2);
if (bmi < 18){
    document.write('Underweight');
}else if(bmi < 25.0){
    document.write('Nomal');
}else if(bmi <30.0){
    document.write('Overweight');
}else {
    document.write('Obese');
}