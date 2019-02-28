console.log("Works");

function GetMonth() {
    // console.log("!!!GetMonth!!!");
    var month = document.querySelector(".month").value;
    var result = document.querySelector(".result");
    console.log(result);

    switch (month) {
        case '1':
        case '2':
        case '12':
            console.log("Winter");
            result.innerHTML = "Winter";
            break;
        case '3':
        case '4':
        case '5':
            console.log("Spring");
            result.innerHTML = "Spring";
            break;
        default:
            console.log("R.T.F.M.");
            result.innerHTML = "R.T.F.M";
            break;
    }
}