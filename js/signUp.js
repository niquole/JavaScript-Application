function validateForm() {
    var user = document.signupform.usr.value;
    var pw = document.signupform.pword.value;
    var email = document.signupform.email.value;
    var username = "username"; 
    var password = "password";
    var mail = "email";
    if ((user == username) && (pw == password) && (email == mail)) {
        return true;
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
}