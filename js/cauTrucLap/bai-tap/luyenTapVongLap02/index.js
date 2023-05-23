// Bài 1
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
// Bài 2
let so = Number(prompt("Nhập một số để tính giai thừa"));
        let giai_thua = 1;
        if(so == 0 || so == 1){
            giai_thua = 1;
        }else if(so<0){
            alert("Error!");
        }else{
            for (let i=1;i<=so;i++) {
                giai_thua = giai_thua*i;
            }
        }
        document.write("Giai thừa của "+so+" = "+giai_thua);
// Bài 3
 for (let i = 0; i<5; i++){
            for (let j=0;j<=i;j++){
                let sao = "*";
                document.write(sao);
            }
            document.write("<br>");
        }

        document.write("<br><br>");

        for (let i = 5; i>0; i--){
            for (let j=0;j<i;j++){
                let sao = "*"
                document.write(sao);
            }
            document.write("<br>");
        }

        document.write("<br><br>");

        document.write("<div style='width: 50px' align='right'>");
        for (let i = 0; i<5; i++){
            for (let j=0;j<=i;j++){
                let sao = "*";
                document.write(sao);
            }
            document.write("<br>");
        }
        document.write("</div><br><br>");

        document.write("<div style='width: 50px' align='right'>");
        for (let i = 5; i>0; i--){
            for (let j=0;j<i;j++){
                let sao = "*"
                document.write(sao);
            }
            document.write("<br>");
        }
        document.write("</div>");
// Bài 4
 let a = " ";
        for (let i=0;i<=10;i++){
            for (let j = 0;j<=30;j++){
                if (i == 0 || i == 10){
                    document.write("<a style='color: red'>*<a>");
                }else{
                    document.write("<a style='color: white'>*<a>");
                }
                if (j == 0 || j== 30) {
                    document.write("<a style='color: red'>*<a>");
                }
            }
            document.write("<br>");
        }
// Bài 5
 let sotien = Number(prompt("Nhập số tiền gửi ngân hàng lãi suất 5%/năm", 0));
        let sothang = Number(prompt("Nhập số tháng gửi"),1);
        let tienlai_thang = 0;
        let tongtienlai = tienlai_thang;
        document.write("Số tiền bạn gửi là "+sotien +" VNĐ trong "+sothang+" tháng với lãi suất 5%/ năm"+"<br>");
        for (let i=0; i<sothang;i++){
            tienlai_thang = ((sotien*5)/100)/12;
            tongtienlai += tienlai_thang;
            sotien+=tienlai_thang;
            document.write("Tiền lãi tháng "+(i+1)+" là "+tienlai_thang.toFixed(0)+" VNĐ<br>");
        }
        document.write("Tổng tiền lãi của bạn trong "+sothang+" là "+tongtienlai.toFixed(0)+" VNĐ");
// Bài 6
