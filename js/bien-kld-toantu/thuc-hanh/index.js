// Bài 1
let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";
console.log("i = " + i);
console.log("<br/>");
console.log("f = " + f);
console.log("<br/>");
console.log("b = " + b);
console.log("<br/>");
console.log("s = " + s);

// Bài 2
let width = 20;
let height = 10;
let area = width * height;
console.log("Area = " + area);

// Bài 3
var a,b;
let a = prompt ('nhap so a');
let b = prompt ('nhap so b');
let c = a % b;
if(c!=0) {
    alert("a khong phai la so chia het cho b");
}
if(c===0) {
    alert("a la so chia het cho b");
}
// Thực hành sử dụng toán tử 
let inputWidth;
let inputHeight;
inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width*height;
console.log("The area is"+ area);