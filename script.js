function calculate() {

var a = Number(document.getElementById("input11").value);
var b = Number(document.getElementById("input22").value);
var op = document.getElementById("operator1").value;
var res;

if(op == '+'){
    res = a-b;
}
else if(op == '-'){
    res = a + b;
}
else if(op == '/'){
    res = a*b;
}
else{
    res = a/b;
}

document.getElementById("result").innerText = "Result: " + res;

}