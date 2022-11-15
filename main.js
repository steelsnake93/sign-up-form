document.addEventListener("DOMContentLoaded", function(){

    let password = document.querySelector(".password").value;
    let confirmPassword = document.querySelector(".confirm-password").value;

    let error = document.querySelector("#error");

    if(password == "" && confirmPassword == "") {
        error.innerHTML = "*passwords do not mach";
    } else if(password === confirmPassword) {
        error.innerHTML = "";
    }

})