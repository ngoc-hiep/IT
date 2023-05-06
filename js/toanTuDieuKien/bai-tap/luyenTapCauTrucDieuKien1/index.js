// Bài 1

let a = prompt('nhap so a');
let b = prompt('nhap so b');
let c = a % b
if(c == 0){
    alert('a chia hết cho b');
}else {
    alert('a không chia hết cho b')
}
// Bài 2

let ab = prompt('nhap tuoi cua hoc sinh');
 
if (ab > 14){
    alert('hoc sinh du tuoi vao lop 10');
}else {
    alert('hoc sinh khong du tuoi vao lop 10');
}
// Bài 3

let m = prompt('nhap so nguyen m');

if (m > 0){
    alert('so nguyen lon hon 0');
}else {
    alert('so nguyen be hon 0');
}
// Bài 4

let p = prompt('nhap so nguyen p');
let q = prompt('nhap so nguyen q');
let t = prompt('nhap so nguyen t');
if (q < p & t < p){
    alert('so lon nhat la p');
}else if(q > p & t < p){
    alert('so lon nhat la q');
}else {
    alert('so lon nhat la t');
}
// Bài 5

let x = prompt('nhap diem bai kiem tra x');
let y = prompt('nhap diem thi giua ki y');
let z = prompt('nhap diem thi cuoi ki z');
let tb = (x + y + z)/3;
if(tb >= 9.0) {
    alert('hoc sinh xep hang A');
}else if( tb >= 7.0 && tb < 9.0){
    alert('hoc sinh xep hang B');
}else if( tb >= 5.0 && tb < 7.0){
    alert('hoc sinh xep hang C');
}else {
    alert('hoc sinh xep hang F');
}
// Bài 6


// Bài 7