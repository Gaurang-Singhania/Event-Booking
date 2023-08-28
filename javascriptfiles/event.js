let url = "https://se-tasks.vercel.app/events";
let response = fetch(url);
let categoryContents;

response.then((value) => {
  return value.json();
}).then((events) => {
  console.log(events);
  ihtml = "";
  for (var item in events) {
    console.log(events[item]);
    console.log(events[item].category)
    ihtml += `<div class="upcoming-img-box" id="${events[item].category}"><div class="images"><img src="img/event1.jpg" alt="movie banner"></div><div class="details category-content"><p>Name:${events[item].name}</p><p>Id:${events[item]._id} </p><p>Venue:${events[item].venue}</p><p>Description:${events[item].description} </p><p>Time:${events[item].time} </p><p>Date:${events[item].date} </p><p>Ticket Price:${events[item].ticketPrice} </p><p>Available Tickets:${events[item].availableTickets} </p><p>Booked Tickets:${events[item].bookedTickets}</p></div></div>`;
  }
  cardContainer.innerHTML = ihtml;
  categoryContents=document.getElementsByClassName("upcoming-img-box");
});



document.addEventListener('DOMContentLoaded', function () {
  const categorySelect = document.getElementById("side")
  
  categorySelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.name;
    console.log(1)
    console.log(selectedCategory);
    console.log(categoryContents);

  
    categoryContents.forEach(myFunction())
    function myFunction(){
      console.log(1);
      if (this.id === selectedCategory) {
        this.style.display = 'block';
      } else {
        this.style.display = 'none';
      }
    };
  });
}
);
