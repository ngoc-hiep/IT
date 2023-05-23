// Bài 1
let a = parseInt(prompt("nhap so a"));
for (a = 1; a < 100; a++) {
  alert("The number is " + a);
  if (a == 99) {
    alert("finish");
  }
}
// Bài 2
let nhietdo = Number(prompt("Nhập vào nhiệt độ"));
while (nhietdo < 20 || nhietdo > 100) {
  if (nhietdo < 20) {
    alert("Nhiệt độ quá lạnh");
    nhietdo = Number(prompt("Nhập vào nhiệt độ"));
  } else if (nhietdo > 100) {
    alert("Nhiệt độ quá nóng");
    nhietdo = Number(prompt("Nhập vào nhiệt độ"));
  }
}
alert("Nhiệt độ bình thường");
// Bài 3
let m = 0;
let n = 1;
let l;
let string = m + "," + n + ",";
let d = 2;
for (let i = 0; i < 20; i++) {
  l = m + n;
  string += l + ",";
  d++;
  m = n;
  n = l;
  if (d === 20) {
    break;
  }
}
console.log(string);
// Bài 4
let F = 0,
  F0 = 0,
  F1 = 0;
let chia5 = "";
let fibonacci = "";
for (let i = 0; i < 20; i++) {
  if (i == 0) {
    F = 1;
    F1 = 1;
    fibonacci += F + " ";
  } else {
    F = F0 + F1;
    F0 = F1;
    F1 = F;
    fibonacci += F + " ";
    console.log(i + " = " + F);
    if (F % 5 == 0) {
      chia5 = F;
      break;
    }
  }
}

document.write("Sô chia hết cho 5 trong dãy là " + chia5);
// Bài 5
let N = 0,
  N0 = 0,
  N1 = 0,
  tong = 0;
let fi = "";
for (let i = 0; i < 20; i++) {
  if (i == 0) {
    N = 1;
    N1 = 1;
    fi += N + " ";
    tong += N;
  } else {
    N = N0 + N1;
    N0 = N1;
    N1 = N;
    fi += N + " ";
    tong += N;
    console.log(i + " = " + N);
  }
}
document.write("Dãy Fibonacci là " + fi + "<br>");
document.write("Tổng của các số = " + tong);
// Bài 6
let count = 0,
  sum = 0;
let dayso = "";
for (let i = 1; ; i++) {
  if (i % 7 == 0) {
    dayso += i + " ";
    console.log(dayso);
    sum += i;
    count++;
    if (count == 30) break;
  }
}
document.write(dayso + "<br>");
document.write("Tổng bằng " + sum);
// Bài 7
document.write(
  'Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".<br>'
);
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(i + " FizzBuzz <br>");
  } else {
    if (i % 3 == 0) {
      document.write(i + " Fizz <br>");
    } else if (i % 5 == 0) {
      document.write(i + " Buzz <br>");
    }
  }
}
// Bài 8
let phamvi = Number(prompt("Trò chơi đoán số từ 0 - "));
let nhapso = Number(prompt("Nhập vào số muốn đoán"));
let soRamdom;
if(phamvi){
    soRamdom = Math.floor(Math.random()*phamvi)
    if(soRamdom == nhapso){
        alert("Bạn đã đoán đung");
    }else{
        while (soRamdom != nhapso){
            alert("Bạn đoán sai số đúng là "+soRamdom);
            nhapso = Number(prompt("Nhập vào số muốn đoán"));
        }
        alert("Bạn đoán đúng");
    }
}