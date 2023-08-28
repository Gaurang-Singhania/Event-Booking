
document.getElementById("login").onclick = function () {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    if (emailValue === '') {
        alert('Please enter your email!');
    }
    else {
        var inputEmail = document.getElementById("email").value;
    var pass = document.getElementById("login-pass").value;

    console.log(123)

    var useremailinput = localStorage.getItem('useremail');
    var data1 = JSON.parse(useremailinput);
    var userpassinput = localStorage.getItem('userpass');
    var data2 = JSON.parse(userpassinput);

    console.log(data1);
    console.log(data2);

    if (inputEmail == data1.email && pass == data2.pass) {
        alert("You Have Been Logged In!!");
        window.location.href="index.html";
    }
    else {
        alert("Enter correct details!!");
    }
    }
}


/*
function check(e) {
    e.preventDefault();
    var inputEmail = document.getElementById("email").value;
    var pass = document.getElementById("login-pass").value;

    console.log(123)

    var useremailinput = localStorage.getItem('useremail');
    var data1 = JSON.parse(useremailinput);
    var userpassinput = localStorage.getItem('userpass');
    var data2 = JSON.parse(userpassinput);

    console.log(data1);
    console.log(data2);

    if (inputEmail == data1.email && pass == data2.pass) {
        alert("You Have Been Logged In!!");
    }
    else {
        alert("Enter correct details!!");
    }

    return false;
}*/