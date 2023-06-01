let arr = [];
let arr1=JSON.parse(localStorage.getItem('stdData'));
arr1?.length>0?arr=arr1:arr;



    // console.log(arr)
async function calculate() {
    var a = parseInt(document.getElementById('id').value);
    var b = document.getElementById('name').value;
    var c = parseInt(document.getElementById('maths').value);
    var d = parseInt(document.getElementById('physics').value);
    var e = parseInt(document.getElementById('chemistry').value);
    var f = parseInt(document.getElementById('english').value);
    var g = parseInt(document.getElementById('computer').value);


 if( a=="" || b=="" || c=="" || d=="" || e=="" || f=="" || g==""){
    alert("Please fill all feild")

}else if (c > 100 || d > 100 || e > 100 || f > 100 || g > 100 ) {
        alert("Please enter number less than 100")
    } else {
        await total();
        await avg();
        await grade();

        var a = document.getElementById('id').value="";
        var b = document.getElementById('name').value="";
        var c = document.getElementById('maths').value="";
        var d = document.getElementById('physics').value="";
        var e = document.getElementById('chemistry').value="";
        var f = document.getElementById('english').value="";
        var g = document.getElementById('computer').value="";
    }

}    
// Total marks

 function total() {
    
    var a = parseInt(document.getElementById('id').value);
    var b = document.getElementById('name').value;
    var c = parseInt(document.getElementById('maths').value);
    var d = parseInt(document.getElementById('physics').value);
    var e = parseInt(document.getElementById('chemistry').value);
    var f = parseInt(document.getElementById('english').value);
    var g = parseInt(document.getElementById('computer').value);
    
    
    let total = c + d + e + f + g;
   console.log(b + " total mark is"+ total);
   
}

function avg() {

    var b = document.getElementById('name').value;
    var c = parseInt(document.getElementById('maths').value);
    var d = parseInt(document.getElementById('physics').value);
    var e = parseInt(document.getElementById('chemistry').value);
    var f = parseInt(document.getElementById('english').value);
    var g = parseInt(document.getElementById('computer').value);
    
    let total = c + d + e + f + g;
    let avg =total/ 500 * 100;
   console.log(b + " percentage is"+avg);


}

function grade(){
    var a = parseInt(document.getElementById('id').value);
    var b = document.getElementById('name').value;
    var c = parseInt(document.getElementById('maths').value);
    var d = parseInt(document.getElementById('physics').value);
    var e = parseInt(document.getElementById('chemistry').value);
    var f = parseInt(document.getElementById('english').value);
    var g = parseInt(document.getElementById('computer').value);

    let total = c + d + e + f + g;
    let avg = total / 500 * 100;
    let grade;
    if (avg >= 75 && avg <=100) {
        grade ="your grade is A"
    } else if (avg >= 60 && avg <= 75) {
        grade ="your grade is B"
    } else if (avg >= 50 && avg <= 60) {
        grade ="your grade is A"
    }else{
        grade ="you are fail !!!!!"
    }

    console.log(grade);

    let store = {
        id: a,
        name: b,
        maths: c,
        physics: d,
        chemistry: e,
        english: f,
        computer: g,
        total: total,
        average: avg,
        grade:grade
    }
    arr.push(store);
    
    localStorage.setItem('stdData', JSON.stringify(arr));

}


// console.log(calculate());
       

// console.log(b.value + " Your total Mark is " + total);
//     console.log(b + " Your percentage Mark is " + avg + "%")
//     console.log(b+ "," + grade )

// console.log(total())

// }