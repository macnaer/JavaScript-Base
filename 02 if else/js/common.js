console.log("Works");

// var a = 203, b = 20;

// if (a > b){
//     console.log(a, " > ", b);
// } 
// else if(a < b){
//     console.log(a, " < ", b);
// }
// else {
//     console.log(a, " = ", b);
// }

//===================================

/*var m = 5, n = 5, k = 5;

if (m > n && m > k){
    console.log(" m > n and m > k");
}
else if (n > m && n > kn > m && n > k){
    console.log(" n > m and n > k");
}
else if (k > m && k > n){
    console.log(" k > n and k > m");
}
else{
    console.log(" k = n = m");
}*/

/*var a = 5;
var b = "5";

console.log(a, typeof (a));
console.log(b, typeof (b));

if (a === b){
    console.log("True");
}
else{
    console.log("False");
}*/

//================================

function GetData() {
    var usrname = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;
    var password2 = document.querySelector(".repassword").value
    
    var currentUser = "admin";

    if (currentUser === usrname){
        console.log("User exist!");
    }
    else if (password.length <=4 || password2.length <=4){
        console.log("Less then 4");
    }
    else if (password.length >=16 || password2.length >=16){
        console.log("More then 16");
    }
    else if (password === password2){
        console.log("Wlcome!");
    }
    else{
        console.log('Diffrent passwords');
    }

    /*console.log(usrname);
    console.log("Password1 ", password.length);
    console.log("Password1 ", password2.length);*/

}

function GetMonth(){
    var month = document.querySelector(".month").value;
    //console.log("GetMonth = ", month);

    if (month == 1 || month == 2 || month == 12){
        console.log("Winter!");
    }
    else if(month == 3 || month == 4 || month == 5){
        console.log("Spring!");
    }
    else{
        console.log("Invalid input");
    }

}
