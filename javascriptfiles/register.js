document.getElementById("registerbutton").onclick = function () {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    if (emailValue === '') {
        alert('Please enter your email!');
    } 
    else{
    alert("You Have Been Successfully Registered");
   // window.location.href = "login.html";
    }
}

function signup(){
    
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;

    var useremail={
        email
    };
    var userpass={
        pass
    };

    var i=JSON.stringify(useremail);
    var j=JSON.stringify(userpass);
    localStorage.setItem('useremail',i);
    localStorage.setItem('userpass',j);
    console.log('user aaya');

    //window.location.href="login.html";

}