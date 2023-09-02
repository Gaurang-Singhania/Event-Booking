let url = "https://se-tasks.vercel.app/events";
let response = fetch(url);
let categoryContents;
let eventsData;

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

  eventsData = events;
  console.log(eventsData)
   
});



document.addEventListener('DOMContentLoaded', function () {
  const categorySelect = document.getElementById('side')
  
  categorySelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.name;
    console.log(1)
    console.log(selectedCategory);
    console.log(categoryContents);


    Array.from(categoryContents).forEach(function (element) {
      console.log(1)
      if (element.id === selectedCategory) {
          element.style.display = "flex"; 
      } else {
          element.style.display = "none"; 
      }
  });
  });
}
);


document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("searchBar");
  const eventListContainer = document.getElementById("eventList");

  searchBar.addEventListener("input", function () {
    const searchTerm = searchBar.value.trim().toLowerCase();
    const matchingEvents = eventsData.filter((event) =>
      event.name.toLowerCase().includes(searchTerm)
    );
    renderEventCards(eventsData);
    renderEventCards(matchingEvents);
  });
});

function renderEventCards(data) {
  const eventListContainer = document.getElementById("cardContainer");

  if (data.length === 0) {
    eventListContainer.innerHTML = "No matching events found.";
  } else {
    let ihtml = "";
    data.forEach((event) => {
      ihtml += `<div class="upcoming-img-box"><div class="images"><img src="img/event1.jpg" alt="movie banner"></div><div class="details category-content"><p>Name: ${event.name}</p><p>Id: ${event._id}</p><p>Venue: ${event.venue}</p><p>Description: ${event.description}</p><p>Time: ${event.time}</p><p>Date: ${event.date}</p><p>Ticket Price: ${event.ticketPrice}</p><p>Available Tickets: ${event.availableTickets}</p><p>Booked Tickets: ${event.bookedTickets}</p></div></div>`;
    });
    eventListContainer.innerHTML = ihtml;
  }
}