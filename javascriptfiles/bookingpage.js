
let ticket = document.getElementById('wtf')

ticket.addEventListener("change", function () {
    let amount = document.querySelector(".amount").innerHTML;
    let count = document.querySelector(".count").innerHTML;
    amount = Number(amount);
    count = Number(count);

    count = count + 1;
    amount = amount + Number(document.getElementById('movie').value);

    document.querySelector(".amount").innerHTML = amount;
    document.querySelector(".count").innerHTML = count;
});



const movieDropdown = document.getElementById('movie');

movieDropdown.addEventListener('change', function () {
        const selectedOptionName = movieDropdown.options[movieDropdown.selectedIndex].getAttribute('name');
        localStorage.setItem('selectedMovieName', selectedOptionName);
    });


document.getElementById("book").onclick = function () {

    if (document.querySelector(".amount").innerHTML != 0) {
        alert("Your Tickets Have Been Booked");


        var amount = document.querySelector(".amount").innerHTML;
        var count = document.querySelector(".count").innerHTML;
        
        var useramount = {
            Amount: amount
        };
        var usercount = {
            Count: count
        };
        
        var i = JSON.stringify(useramount);
        var j = JSON.stringify(usercount);
       
        localStorage.setItem('useramount', i);
        localStorage.setItem('usercount', j);

        location.href = "ticket.html";


        

    }
    else {
        alert("Please Select Your Tickets First!")
    }

}


/*
function myselection(){
    var name = document.getElementById("movie").this.options[this.selectedIndex].text;
    console.log(name);

    var moviename = {
        Name:name 
    };

    var k = JSON.stringify(moviename);
    localStorage.setItem('moviename', k);
}


*/






