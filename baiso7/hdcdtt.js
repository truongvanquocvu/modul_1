function check() {
    let num1 = Number(document.getElementById("number").value);
    let num2 = Number(document.getElementById("n1").value);
    let num3 = Number(document.getElementById("n2").value);
    let kq = "";
    // if (num2 == "VND" && num3 == "VND") {
    //     kq= num1; 
    // } else if (num2 == "VND" && num3 == "USD") {
    //     kq=num1/24000;
    // } else if (num2 == "USD" && num3 == "USD") {
    //     kq=num1
    // } { 
    //     else if (num2 == "USD" && num3 == "VND")
    // }     kq=num1*24000;
    if (num2 == "VND" && num3 == "VND") {
        kq = num1;
    } else if (num2 == "VND" && num3 == "USD") {
        kq = num1 / 24000;
    } else if (num2 == "USD" && num3 == "USD") {
        kq = num1;
    } else if (num2 == "USD" && num3 == "VND") {
        kq = num1 * 24000;
    }
    document.getElementById("result2") = kq;
}