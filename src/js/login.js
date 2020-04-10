function checkForm() {
    var formelems = document.getElementsByClassName("formeElem");
    var warning = document.getElementsByClassName("warning");
    var flag = true;
    if (formelems[0].value == "" || formelems[0].value.trim() == "") {
        warning[0].innerHTML = "Please enter your username or e-mail address.";
        flag = false;
    }
    if (formelems[1].value == "" || formelems[1].value.trim() == "") {
        warning[1].innerHTML = "Please enter your password.";
        flag = false;
    }
    return flag;
}

function doLogin() {
    window.location.href="./src/html/homepage.html";
}

function submitForm() {
    doLogin();
}