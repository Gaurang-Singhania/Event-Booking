var useremailinput = localStorage.getItem('useremail');
var data1 = JSON.parse(useremailinput);
var userpassinput = localStorage.getItem('userpass');
var data2 = JSON.parse(userpassinput);
var usercount = localStorage.getItem('usercount');
var data3 = JSON.parse(usercount);
var useramount = localStorage.getItem('useramount');
var data4 = JSON.parse(useramount);

/*var moviename = localStorage.getItem('moviename');
var data5 = JSON.parse(moviename);
*/

console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);



document.getElementById('name').innerHTML = "Welcome User <br>" + data1.email;
document.getElementById('ticketdetails').innerHTML = "Your Ticket Details Are:<br> " + "No. of Tickets: " + data3.Count + "<br>" + "Total Amount Paid: " + data4.Amount;


function check1(){
    alert("Tickets Haave Been Cancelled!!")
    localStorage.removeItem('usercount');
    localStorage.removeItem('useramount');
    document.getElementById('ticketdetails').innerHTML="No Tickets Booked!!"
}

function check2(){
    alert("Tickets Have Been Cancelled And You Have Been Logged out!!")
    localStorage.removeItem('usercount');
    localStorage.removeItem('useramount');
    document.getElementById('name').innerHTML="Please Login First!!"
    document.getElementById('ticketdetails').innerHTML="No Tickets Booked!!"
}


/*
let newname = localStorage.getItem(localStorage.key(0));
let newname1 = localStorage.getItem(localStorage.key(1));
let newname3 = localStorage.getItem(localStorage.key(3));
let newname4 = localStorage.getItem(localStorage.key(4));
console.log(newname);
console.log(newname1);

*/

