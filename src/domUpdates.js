// import Traveler from './traveler.js';
const dayjs = require('dayjs')
dayjs().format()
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);


const domUpdates = {
  greetUser(traveler) {
    let firstName = traveler.name.split(' ')[0];
    document.getElementById('userGreeting').innerHTML = `Welcome back, ${firstName}!`;
  },


  displayTrips(traveler) {
    const tripCardsDisplayArea = document.getElementById('tripCardsDisplay')
    if (!traveler.myTrips) {
      tripCardsDisplayArea.innerText = "Book your first trip with us!"
    } else {
      let tripCardsToDisplay = '';
      traveler.myTrips.forEach(trip => {
        let endDate = dayjs(trip.date).add(trip.duration, 'day').format('YYYY/MM/DD')
        tripCardsToDisplay +=
        `<article class="card">
          <div class="upper-card">
           <img src=${trip.image} alt=${trip.alt}>
          </div>
          <div class="lower-card">
            <p class="location">${trip.destination}</p>
            <p class="dates">${trip.date} - ${endDate}</p>
          </div>
        </article>`
      })
      tripCardsDisplayArea.innerHTML = tripCardsToDisplay;
    }
  }



}




export default domUpdates;
