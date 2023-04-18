// Bài 5
function convert() {
    let amount = document.getElementById('amount').value;
    let fromCurrent = document.getElementById('from').value;
    let toCurrent = document.getElementById('to').value;
    if(fromCurrent === "vnd" && toCurrent === "usd") {
        document.getElementById("value").innerHTML =
        "Result: " + amount/ 24 + "USD";
    }
    else if (fromCurrent === "usd" && toCurrent === "vnd") {
        document.getElementById("value").innerHTML =
        "Result: " + amount*24 + "VND";
    }
}


