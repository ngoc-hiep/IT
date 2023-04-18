let a = 0;
let b = 0;
const getValue = () => {
  a = parseInt(document.getElementById("a").value);
  b = parseInt(document.getElementById("b").value);
};

function addition() {
  getValue();
  document.getElementById("value").innerHTML = "Result Division: " + (a + b);
}
function subtraction() {
  getValue();
  document.getElementById("value").innerHTML = "Result Division: " + (a - b);
}
function multiplication() {
  getValue();
  document.getElementById("value").innerHTML = "Result Division: " + a * b;
}
function division() {
  getValue();
  document.getElementById("value").innerHTML = "Result Division: " + a / b;
}
