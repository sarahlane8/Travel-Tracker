const dayjs = require('dayjs')
dayjs().format()
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);


const domUpdates = {
  displayUserNameErrorMessage() {
    document.getElementById('userNameErrorMessage').innerText = "Please try your username again!"
  },

  displayPasswordErrorMessage() {
    document.getElementById('passwordErrorMessage').innerText = "Please try your password again!"
  },

  greetUser(traveler) {
    let firstName = traveler.name.split(' ')[0];
    document.getElementById('userGreeting').innerHTML = `Welcome back, ${firstName}!`;
  },

  hideLogInForm() {
    document.querySelector('.user-sign-in').classList.add('hidden');
    document.getElementById('userDashboard').classList.remove('hidden');
    document.getElementById('userGreeting').classList.remove('hidden');
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
      userPastTrips.innerText = "😯 You don't have any past trips! 😯"
    } else if (traveler.myPastTrips) {
      domUpdates.renderUserTripCards(traveler.myPastTrips, userPastTrips)
    }
    if (!traveler.myCurrentTrip) {
      userPresentTrip.innerText = "🏠 You're stuck at home for now! 🏠"
    } else if (traveler.myCurrentTrip) {
      domUpdates.renderUserTripCards(traveler.myCurrentTrip, userPresentTrip)
    }
    if (traveler.myFutureTrips.length === 0) {
      userFutureTrips.innerText = "😩 You don't have any upcoming trips! 😩"
    } else if (traveler.myFutureTrips) {
      domUpdates.renderUserTripCards(traveler.myFutureTrips, userFutureTrips)
    }
    if (traveler.myPendingTrips.length === 0) {
      userPendingTrips.innerText = "😭 You don't have any pending trips! 😭"
    } else {
      domUpdates.renderUserTripCards(traveler.myPendingTrips, userPendingTrips)
    }
  },

  renderUserTripCards(filteredTrips, pageArea) {
    let tripCardsToDisplay = '';
    filteredTrips.forEach(trip => {
      let endDate = dayjs(trip.date).add(trip.duration, 'day').format('YYYY/MM/DD')
      tripCardsToDisplay +=
      `<article class="card">
        <div class="upper-card">
         <img class="location-pic" src=${trip.image} alt=${trip.alt}>
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
    document.getElementById('moneySpent').innerText = totalAmount;
  },

  displayDestinationCards(destinationData) {
    let destinationCardsToDisplay = '';
    destinationData.forEach(trip => {
      destinationCardsToDisplay +=
      `<article class="card">
      <div class="upper-card">
       <img class="location-pic" src=${trip.image} alt=${trip.alt}>
      </div>
      <div class="lower-card">
        <p class="location">${trip.destination}</p>
      </div>
    </article>`
    })
    document.getElementById('destinationsDisplay').innerHTML = destinationCardsToDisplay;
  },

  displayDestinationDropdownOptions(destinationData) {
    let destinationDropdownOptions = '';
    destinationData.forEach(trip => {
      destinationDropdownOptions +=
      `<option value="${trip.destination}">`
    })
    document.getElementById('destinations').innerHTML = destinationDropdownOptions;
  },

  displayTripEstimate(estimate) {
    document.getElementById('tripEstimate').innerText = `This trip will cost $${estimate}. Book now!`;
  },

  displayDateErrorMessage(date) {
    document.getElementById('tripEstimate').innerText = `Please choose a departure date after ${date}`;
  },

  displayNumberErrorMessage(category) {
    // 'durationInput'
    if (category === 'durationInput') {
      document.getElementById('tripEstimate').innerText = "Please enter a valid number for duration of trip.";
    }
    if (category === 'travelersInput') {
      document.getElementById('tripEstimate').innerText = "Please enter a valid number for number of travelers.";
    }
  },

  displayDestinationErrorMessage() {
    document.getElementById('tripEstimate').innerText = "Please choose a valid destination."
  },

}




export default domUpdates;
