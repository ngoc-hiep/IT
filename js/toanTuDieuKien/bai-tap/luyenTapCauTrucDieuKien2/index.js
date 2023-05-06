// Bài 1
let ab = parseInt(prompt("Nhap do C"));
let bc = (9 * ab) / 5 + 32;
console.log("Do F la" + bc);

// Bài 2

//let mn = parseInt(promt('Nhap met'));
//let ft =(mn * 3.2808);
//console.log('Feet la:' + ft);

// Bài 3
let g = prompt("nhap canh hinh vuong");
let dt = g * g;
console.log("dien tich hinh vuong la:" + dt);

// Bài 4
let k = prompt("nhap chieu dai hinh chu nhat");
let j = prompt("nhap chieu rong hinh chu nhat");
let kj = k * j;
console.log("dien tich hinh chu nhat la:" + kj);

// Bài 5
let u = prompt("nhap canh goc vuong thu 1");
let y = prompt("nhap canh goc vuong thu 2");
let uy = (u * y) / 2;
console.log("dien tich hinh tam giac vuong la:" + uy);

// Bài 6
let button = document.getElementById("giaiBtn");
giaiBtn.onclick = function () {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;

  if (a == "" || b == "") {
    alert("Vui lòng nhập dữ liệu");
  } else {
    a = Number(a);
    b = Number(b);
    giai_pt_bac_nhat(a, b);
  }
};
function giai_pt_bac_nhat(a, b) {
  if (a == 0 && b == 0) {
    alert("Phương trình vô số nghiệm");
  } else if (a != 0 && b == 0) {
    alert("Phương trình có nghiệm x = 0");
  } else if (a == 0 && b != 0) {
    alert("Phương trình vô nghiệm");
  } else {
    alert("Phương trình có nghiệm x = " + -b / a);
  }
}
// Bài 7
function giaiTn() {
  let x1, x2;
  let x, y, z, delta;
  x = parseInt(form.a.value);
  y = parseInt(form.b.value);
  z = parseInt(form.c.value);
  delta = y * y - 4 * x * z;
  if (delta == 0) {
    alert("phuong trinh co nghiem kep");
    x1 = -y / (2 * x);
    x2 = -y / (2 * x);
    form.x.value = eval(x1);
    form.y.value = eval(x2);
  } else if (delta < 0) {
    alert("phuong trinh vo nghiem");
  } else {
    alert("phuong trinh co hai nghiem");
    x1 = (-y - Math.sqr(delta)) / (2 * x);
    x2 = (-y + Math.sqr(delta)) / (2 * x);
    form.x.value = eval(x1);
    form.y.value = eval(x2);
  }
}
// Bài 8
let m = prompt('nhap so nguyen m');
if( 0 < m < 120){
  alert('Tuoi cua nguoi do la');
}

// Bài 9
let p = prompt('nhap canh thu 1 cua tam giac p');
let q = prompt('nhap canh thu 2 cua tam giac q');
let o = prompt('nhap canh thu 3 cua tam giac o');
if(p,q,o > 0 && p + q > o && p + o > q && q + o >p){
  alert('p, q, o la canh cua tam giac');
} 