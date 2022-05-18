const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navmenu.classList.toggle("open");

})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navmenu.classList.remove("open");
}))



const register = document.querySelector(".register-now");
const signup = document.querySelector(".signup");
const signin = document.querySelector(".signin");

register.addEventListener("click", () => {
    register.classList.toggle("appear");
    signup.classList.toggle("appear");
    signin.classList.toggle("appear");

})



function special(password){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(password);
}

function validation_log(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let result = email.includes("@");
    let first = password.charCodeAt(0);
    let length = password.length;

    if(result == true && (first >= 65 && first <= 90) && special(password) == true && length >= 8 && password.includes(" ") == false){
        alert("login successfully");
        window.location = "home.html";
    }
    else{
        alert("login unsuccessful");
        window.location = "index.html";
    }
}

function validation_sign(){
    let email2 = document.getElementById("email2").value;
    let password2 = document.getElementById("password2").value;
    let result2 = email2.includes("@");
    let first2 = password2.charCodeAt(0);
    let length2 = password2.length;
    let phone = document.getElementById("phone").value;
    let phonel = phone.length;

    if(result2 == true && (first2 >= 65 && first2 <= 90) && special(password2) == true && length2 >= 8 && password2.includes(" ") == false && phonel == 11){
        if(document.getElementById('male').checked) {
            alert("Sign up successfully, returning to sign in page");
            window.open = "index.html";
        }
        else if(document.getElementById('female').checked) {
            alert("Sign up successfully, returning to sign in page");
            window.open = "index.html";
        }
        else{
            alert("Sign up unsuccessful");
            e.preventDefault();
            window.location = "index.html";
        }
        
    }
    else{
        alert("Sign up unsuccessful");
        e.preventDefault();
        window.location = "index.html";
    }
}