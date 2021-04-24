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
    const myTripsDisplay = document.getElementById('tripsDisplayArea')
    const userPastTrips = document.getElementById('userPastTrips');
    const userPresentTrip = document.getElementById('userPresentTrip');
    const userFutureTrips = document.getElementById('userUpcomingTrips');
    const userPendingTrips = document.getElementById('userPendingTrips');
    if (!traveler.myTrips) {
      myTripsDisplay.innerText = "Book your first trip with us!"
    }
    if (traveler.myPastTrips.length === 0) {
      userPastTrips.innerText = "You don't have any past trips!"
    } else if (traveler.myPastTrips) {
      domUpdates.renderTripCards(traveler.myPastTrips, userPastTrips)
    }
    if (!traveler.myCurrentTrip) {
      userPresentTrip.innerText = "You're stuck at home for now!"
    } else if (traveler.myCurrentTrip) {
      domUpdates.renderTripCards(traveler.myCurrentTrip, userPresentTrip)
    }
    if (traveler.myFutureTrips.length === 0) {
      userFutureTrips.innerText = "You don't have any upcoming trips!"
    } else if (traveler.myFutureTrips) {
      domUpdates.renderTripCards(traveler.myFutureTrips, userFutureTrips)
    }
    if (traveler.myPendingTrips.length === 0) {
      userPendingTrips.innerText = "You don't have any pending trips!"
    } else {
      domUpdates.renderTripCards(traveler.myPendingTrips, userPendingTrips)
    }
  },

  renderTripCards(filteredTrips, pageArea) {
    let tripCardsToDisplay = '';
    filteredTrips.forEach(trip => {
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
    pageArea.innerHTML = tripCardsToDisplay;
  },

  displayTotalSpent(traveler) {
    const todaysDate = dayjs().format('YYYY/MM/DD')
    const totalAmount = traveler.calculateSpentOnTripsThisYear(todaysDate);
    document.getElementById('moneySpent').innerText = `You spent $${totalAmount} on trips in the last year!`
  },

}




export default domUpdates;
