function add(val) {
    document.getElementById("input").value += val;
}

function calculate() {
    let input1 = document.getElementById("input").value;
    let result = eval(input1);
    document.getElementById("input").value = result || null;
}

function clearInput() {
    document.getElementById("input").value = "";
}

function per() {
    let data = document.getElementById("input").value;
    let data1 = data.split("%*");
    let result = (data1[0] * (data1[1] || 1)) / 100;
    document.getElementById("input").value = result;
}
function calculate1(){
    let x =  document.getElementById("input").value;
    let y= x.includes("%*");
    if( y == true){
        per();
    }
    else{
        calculate();
    }
}