showtask();


let addbtn = document.getElementById("addtaskbtn");


addbtn.addEventListener("click", function () {


    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let monum = document.getElementById("monum").value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var moformat = /^(\+\d{1,3}[- ]?)?\d{10}$/

    if (fname == "" || lname == "" || email == "" || monum == "") {

        // let text = "Please ";
        // document.getElementById("error").innerHTML = text;
        alert(" please all fill ")

    } else if (!email.match(mailformat)) {
        // let text = "invalid mail ";
        // document.getElementById("error").innerHTML = text;

        alert(" invalid mail ")

    } else if (!monum.match(moformat) && !(monum.match(/0{5,}/))) {
        alert(" please enter 10 digit number")
    }
    else {

        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskobj = [];
        } else {
            taskobj = JSON.parse(webtask);
        }
        let createobj = {
            fristname: fname,
            lastname: lname,
            email: email,
            mobilenumber: monum
        }
        taskobj.push(createobj);
        localStorage.setItem("localtask", JSON.stringify(taskobj));
        showtask();

        location.reload();
    };
})

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskobj = [];
    } else {
        taskobj = JSON.parse(webtask);
        console.log(taskobj);
    }

    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskobj.forEach((fname, index) => {
        html += `<tr style="border:1px solid black;">
                <th scope="row">${index + 1}</th>
                <td>${fname.fristname}</td>
                <td>${fname.lastname}</td>
                <td>${fname.email}</td>
                <td>${fname.mobilenumber}</td>
                <td><button type="button"  class="btn btn-primary btn-sm"  onclick="edittask(${index})">Edit</button></td>
                <td><button type="button"  class="btn btn-danger btn-sm"  onclick="deletitem(${index})">Delete</button></td>
        </tr>`
    });
    addedtasklist.innerHTML = html; 
}


// edit input feild
function edittask(index) {
    let saveindex = document.getElementById("saveindex");
    let addbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;

    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    fname.value = taskobj[index].fristname;
    lname.value = taskobj[index].lastname;
    email.value = taskobj[index].email;
    monum.value = taskobj[index].mobilenumber;
    // console.log(taskobj[0].fristname)
    addbtn.style.display = "none";
    savetaskbtn.style.display = "block";
}


// save detail
let savetaskbtn = document.getElementById("savetaskbtn");

savetaskbtn.addEventListener("click", function () {
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;

    taskobj[saveindex].fristname = fname.value;
    taskobj[saveindex].lastname = lname.value;
    taskobj[saveindex].email = email.value;
    taskobj[saveindex].mobilenumber = monum.value;

    addbtn.style.display = "block";
    savetaskbtn.style.display = "none";
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    location.reload();
    showtask();
    location.reload();
})


// delet perticuler row
function deletitem(index) {
    let webtask = localStorage.getItem("localtask");
    let taskobj = JSON.parse(webtask);
    taskobj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask();
}

// remove all data from localstorage
function deletdata() {
    localStorage.removeItem('localtask');
    location.reload();
}
