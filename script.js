

function checkPassword() {
    var str = document.getElementById("txt3").value;
    var str1 = document.getElementById("txt5").value;
    var str2 = document.getElementById("txt6").value;
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPwd = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (str == "" || !regEmail.test(str)) {
        window.alert("Enter a valid email address...")
    }
    else if (str1 == "" || !regPwd.test(str1)) {
        window.alert("password must be a at least one number, one lowercase and one uppercase letter, at least six characters");
        return false;
    }
    else if (str1 != str2) {
        window.alert("password should be matched");
        return false;
    }
    return true;
}

function passvalue() {
    var firstname = document.getElementById("txt").value;
    var lastname = document.getElementById("txt2").value;
    var email = document.getElementById("txt3").value;
    var mobile = document.getElementById("txt4").value;
    var password = document.getElementById("txt5").value;
    var confirmpass = document.getElementById("txt6").value;
    var drop = document.getElementById("down").value;
    localStorage.setItem("textvalue", firstname);
    localStorage.setItem("textvalue2", lastname);
    localStorage.setItem("textvalue3", email);
    localStorage.setItem("textvalue4", mobile);
    localStorage.setItem("textvalue5", password);
    localStorage.setItem("textvalue6", confirmpass);
    localStorage.setItem("dropvalue", drop);
    return false;
}