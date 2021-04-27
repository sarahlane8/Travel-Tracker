const dayjs = require('dayjs')
dayjs().format()
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);


const domUpdates = {
  displayUserNameErrorMessage() {
    document.getElementById('userNameErrorMessage').innerText = "Please try your username again!"
  },

  clearUserNameErrorMessage() {
    document.getElementById('userNameErrorMessage').innerText = ""
  },

  displayPasswordErrorMessage() {
    document.getElementById('passwordErrorMessage').innerText = "Please try your password again!"
  },

  // displayNetworkError(error) {
  //   console.log(17, error)
  //   document.querySelector('.user-total-money-spent').innerHtml = error;
  // },

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
    pageArea.innerHTML = '';
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
    document.getElementById('tripEstimate').innerText = `This trip will cost $${estimate}, including agent's fee. Book now!`;
  },

  displayDateErrorMessage(date) {
    document.getElementById('tripEstimate').innerText = `Please choose a departure date after ${date}`;
  },

  displayNumberErrorMessage(category) {
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

  clearErrorMessage() {
    document.getElementById('tripEstimate').innerText = '';
  },

  displayTripEstimateErrorMessage() {
    document.getElementById('tripEstimate').innerText = "Sorry, something went wrong! Please check your request inputs again!"
  },

  enableRequestButton() {
    if (document.querySelector('.submit-request').classList.contains('disable')) {
      document.querySelector('.submit-request').classList.remove('disable');
    }
  },

  toggleElement(element) {
    if (document.querySelector(element).classList.contains('disable')) {
      document.querySelector(element).classList.remove('disable');
    } else {
      document.querySelector(element).classList.add('disable');
    }
  },

  displayRequestSubmittedMessage() {
    document.getElementById('tripEstimate').innerText = 'Your trip has been submitted for approval by an agent!'
    domUpdates.toggleElement('.submit-request');
    domUpdates.toggleElement('.request-trip-form');
  },

  clearForm() {
    document.getElementById('tripEstimate').innerText = ''
    document.querySelector('.request-trip-form').reset();
    domUpdates.toggleElement('.request-trip-form');
  },

  // displaySubmissionErrorMessage() {
  //   domUpdates.displayCallUsErrorMessage();
  //   domUpdates.toggleElement('.submit-request');
  //   domUpdates.toggleElement('.request-trip-form');
  // },

  displayCallUsErrorMessage() {
    document.getElementById('tripEstimate').innerText = 'We\'re sorry, something went wrong with your request.  Please try again later or call one of our travel agents at 1-800-555-5555!'
  },

  displayServerIsDownMessage() {
    document.getElementById('userGreeting').innerText = 'We\'re sorry, something went wrong!  Please try again later or call one of our travel agents at 1-800-555-5555!'
    document.getElementById('userDashboard').classList.add('hidden')
  }

}


export default domUpdates;
