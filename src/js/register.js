function checkForm() {
    var formelems = document.getElementsByClassName("formeElem");
    var warning = document.getElementsByClassName("warning");
    var flag = true;
    if (formelems[0].value == "" || formelems[0].value.trim() == "") {
        warning[0].innerHTML = "Please enter your username.";
        flag = false;
    }
    if (formelems[1].value == "" || formelems[1].value.trim() == "") {
        warning[1].innerHTML = "Please enter your e-mail";
        flag = false;
    }
    if (formelems[2].value == "" || formelems[2].value.trim() == "") {
        warning[2].innerHTML = "Please enter your password.";
        flag = false;
    }
    if (formelems[3].value == "" || formelems[3].value.trim() == "") {
        warning[3].innerHTML = "Please enter your password.";
        flag = false;
    }
    return flag;
}

function doLogin() {
    window.location.href="../../index.html";
}

function submitForm() {
    doLogin();
}