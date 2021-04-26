import Traveler from './traveler.js';//do i need this here?
import Trip from './trip.js';
import domUpdates from './domUpdates.js'
import { fetchAllData, addNewTrip } from './networkRequests'
const dayjs = require('dayjs');
dayjs().format();
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);


//*******MEDIA QUERIES********//
const signInButton = document.getElementById('signIn');
const dateInput = document.getElementById('dateInput');
const tripDurationInput = document.getElementById('durationInput');
const numberOfTravelersInput = document.getElementById('travelersInput');
const destinationInput = document.getElementById('destinationInput');
const getEstimateButton = document.querySelector('.get-trip-estimate');
const submitRequestButton = document.querySelector('.submit-request');
let travelers, trips, destinations, singleTraveler, currentTraveler, pendingTrip;

//*******Event Listeners******//
getEstimateButton.addEventListener('click', validateFormInputs)
submitRequestButton.addEventListener('click', submitNewTripRequest);
destinationInput.addEventListener('keyup', filterDestinationsBySearch);
signInButton.addEventListener('click', validateUserName);
dateInput.addEventListener('blur', checkDateInput);
tripDurationInput.addEventListener('blur', function() {
  checkNumbersInput('durationInput')
});
numberOfTravelersInput.addEventListener('blur', function() {
  checkNumbersInput('travelersInput')
});
destinationInput.addEventListener('blur', checkDestinationInput);


//*******Functions******//
function validateUserName() {
  const userNameInput = document.getElementById('userName').value;
  const result = userNameInput.split('traveler');
  let userID;
  if (!result[0]) {
    userID = result[1];
  }
  if (0 < userID && userID < 51) {
    validatePassword(userID)
  } else {
    domUpdates.displayUserNameErrorMessage();
  }
}

function validatePassword(userID) {
  const passwordInput = document.getElementById('password').value;
  if (passwordInput === 'travel2020') {
    onPageLoad(userID);
    domUpdates.hideLogInForm();
  } else {
    domUpdates.displayPasswordErrorMessage();
  }
}

function onPageLoad(userID) {
  fetchAllData(userID)
    .then(allData => {
      trips = allData.tripsData
      destinations = allData.destinationsData
      singleTraveler = allData.singleTravelerData
      combineDataSets(trips, destinations)
      currentTraveler = new Traveler(singleTraveler)
      filterTripsByTraveler(singleTraveler.id)
      domUpdates.greetUser(currentTraveler)
      domUpdates.displayTrips(currentTraveler)
      domUpdates.displayTotalSpent(currentTraveler)
      domUpdates.displayDestinationCards(destinations.destinations)
      domUpdates.displayDestinationDropdownOptions(destinations.destinations)
    });
}

function combineDataSets(tripData, destinationData) {
  const result = tripData.trips.map(trip => {
    destinationData.destinations.forEach(destination => {
      if (trip.destinationID === destination.id) {
        trip['estimatedLodgingCostPerDay'] = destination.estimatedLodgingCostPerDay;
        trip['estimatedFlightCostPerPerson'] = destination.estimatedFlightCostPerPerson;
        trip['image'] = destination.image;
        trip['alt'] = destination.alt;
        trip['destination'] = destination.destination;
      }
    })
    return trip;
  })
  trips = result;
}

function filterTripsByTraveler(travelerID) {
  const myTrips = trips.filter(trip => trip.userID === travelerID)
  currentTraveler.sortMyTrips(myTrips)
}

function filterDestinationsBySearch(e) {
  let searchText = e.target.value.toLowerCase()
  let filteredDestinations = [];
  destinations.destinations.forEach(location => {
    if (location.destination.toLowerCase().includes(searchText)) {
      filteredDestinations.push(location)
    }
    domUpdates.displayDestinationCards(filteredDestinations)
  })
}

function checkDateInput() {
  const startDate = dateInput.value;
  const todaysDate = dayjs().format('YYYY-MM-DD')
  if (dayjs(startDate).isBefore(todaysDate)) {
    domUpdates.displayDateErrorMessage(todaysDate);
  } else {
    domUpdates.clearErrorMessage()
    return true;
  }
}

function checkNumbersInput(inputType) {
  const input = document.getElementById(inputType).value;
  const result = input.split('').map(num => parseInt(num))
  if (result.includes(NaN) || (!input)) {
    domUpdates.displayNumberErrorMessage(inputType);
  } else {
    domUpdates.clearErrorMessage()
    return true;
  }
}

function checkDestinationInput() {
  const city = document.getElementById('destinationInput').value;
  const allCities = destinations.destinations.map(location => location.destination)
  if (!allCities.includes(city)) {
    domUpdates.displayDestinationErrorMessage();
  } else {
    domUpdates.clearErrorMessage();
    return true;
  }
}

function validateFormInputs() {
  if (checkDateInput() && checkNumbersInput('durationInput') && checkNumbersInput('travelersInput') && checkDestinationInput()) {
    calculateTripEstimate();
    domUpdates.toggleElement('.submit-request')
  } else {
    domUpdates.displayTripEstimateErrorMessage()
  }
}

function calculateTripEstimate() {
  const startDate = document.getElementById('dateInput').value;
  const duration = document.getElementById('durationInput').value;
  const numTravelers = document.getElementById('travelersInput').value;
  const destination = document.getElementById('destinationInput').value;
  let locationID, estimatedLodging, estimatedFlight;
  trips.forEach(trip => {
    // if (trip.destination.toLowerCase() === destination.toLowerCase()) {
    if (trip.destination === destination) {
      locationID = trip.destinationID;
      estimatedLodging = trip.estimatedLodgingCostPerDay;
      estimatedFlight = trip.estimatedFlightCostPerPerson;
    }
  });
  const tripData =
  {
    id: trips.length + 1,
    userID: currentTraveler.id,
    destinationID: locationID,
    travelers: numTravelers,
    date: startDate,
    duration: duration,
    estimatedLodgingCostPerDay: estimatedLodging,
    estimatedFlightCostPerPerson: estimatedFlight
  };
  pendingTrip = new Trip(tripData);
  const pendingTripEstimate = pendingTrip.estimateTripCost();
  domUpdates.displayTripEstimate(pendingTripEstimate);
}

function submitNewTripRequest() {

  const object = ( {id: pendingTrip.id,
      userID: pendingTrip.userID,
      destinationID: pendingTrip.destinationID,
      travelers: parseInt(pendingTrip.travelers),
      date: pendingTrip.date.split('-').join('/'),
      duration: parseInt(pendingTrip.duration),
      status: 'pending',
      suggestedActivities: []
    } );
  addNewTrip(object)
  // .then(data => {
  //   console.log(data);
  //   currentTraveler.addTrip(pendingTrip);
  //   domUpdates.displayTrips(currentTraveler);
  //   domUpdates.displayTotalSpent(currentTraveler)
  // })

//   currentTraveler.addTrip(pendingTrip);
//   console.log(currentTraveler)
//   domUpdates.displayTrips(currentTraveler);
//   domUpdates.displayTotalSpent(currentTraveler);
// )

    //update the data model
    // trip


  //invoke something from dom Updates to say your request has been submitted! on a reset timer

  //update dom to clear form
  domUpdates.displayRequestSubmittedMessage()//attach error handling to this
  console.log('PENDING TRIP', pendingTrip)
  console.log('trips', trips)
  setResetTimer()
}

function setResetTimer() {
  setTimeout(function(){domUpdates.clearForm()}, 9000)
}
