import Traveler from './traveler.js';
import Trip from './trip.js';
import domUpdates from './domUpdates.js';
import { fetchAllData, addNewTrip } from './networkRequests';
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
let trips, destinations, singleTraveler, currentTraveler, pendingTrip;


//*******Event Listeners******//
signInButton.addEventListener('click', validateUserName);
destinationInput.addEventListener('keyup', filterDestinationsBySearch);
destinationInput.addEventListener('blur', checkDestinationInput);
dateInput.addEventListener('blur', checkDateInput);
tripDurationInput.addEventListener('blur', function() {
  checkNumbersInput('durationInput')
});
numberOfTravelersInput.addEventListener('blur', function() {
  checkNumbersInput('travelersInput')
});
getEstimateButton.addEventListener('click', validateFormInputs);
submitRequestButton.addEventListener('click', submitNewTripRequest);


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
    domUpdates.clearUserNameErrorMessage();
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
  const myTrips = trips.filter(trip => trip.userID === travelerID);
  currentTraveler.sortMyTrips(myTrips);
}

function filterDestinationsBySearch(e) {
  let searchText = e.target.value.toLowerCase();
  let filteredDestinations = [];
  destinations.destinations.forEach(location => {
    if (location.destination.toLowerCase().includes(searchText)) {
      filteredDestinations.push(location)
    }
    domUpdates.displayDestinationCards(filteredDestinations);
  })
}

function checkDateInput() {
  const startDate = dateInput.value;
  const todaysDate = dayjs().format('YYYY-MM-DD');
  if (dayjs(startDate).isBefore(todaysDate)) {
    domUpdates.displayDateErrorMessage(todaysDate);
  } else {
    domUpdates.clearErrorMessage();
    return true;
  }
}

function checkNumbersInput(inputType) {
  const input = document.getElementById(inputType).value;
  const result = input.split('').map(num => parseInt(num));
  if (result.includes(NaN) || (!input)) {
    domUpdates.displayNumberErrorMessage(inputType);
  } else {
    domUpdates.clearErrorMessage();
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
  } else {
    domUpdates.displayTripEstimateErrorMessage();
  }
}

function calculateTripEstimate() {
  const startDate = document.getElementById('dateInput').value;
  const duration = document.getElementById('durationInput').value;
  const numTravelers = document.getElementById('travelersInput').value;
  const destination = document.getElementById('destinationInput').value;
  let locationID, estimatedLodging, estimatedFlight;
  trips.forEach(trip => {
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
    travelers: parseInt(numTravelers),
    date: startDate,
    duration: parseInt(duration),
    estimatedLodgingCostPerDay: estimatedLodging,
    estimatedFlightCostPerPerson: estimatedFlight
  };
  pendingTrip = new Trip(tripData);
  const pendingTripEstimate = pendingTrip.estimateTripCost();
  if (!pendingTripEstimate) {
    domUpdates.toggleElement('.request-trip-form');
    domUpdates.displayCallUsErrorMessage();
    setResetTimer();
    domUpdates.displayDestinationCards(destinations.destinations);
  } else {
    domUpdates.displayTripEstimate(pendingTripEstimate);
    domUpdates.enableRequestButton();
  }
}

function submitNewTripRequest() {
  const tripObject = ( {id: pendingTrip.id,
    userID: pendingTrip.userID,
    destinationID: pendingTrip.destinationID,
    travelers: pendingTrip.travelers,
    date: pendingTrip.date.split('-').join('/'),
    duration: pendingTrip.duration,
    status: 'pending',
    suggestedActivities: []
  } );
  addNewTrip(tripObject)
    .then(response => {
      updatePendingTrip(pendingTrip)
      currentTraveler.addTrip('myTrips', pendingTrip)
      currentTraveler.addTrip('myPendingTrips', pendingTrip)
      trips.push(pendingTrip)
      domUpdates.displayTrips(currentTraveler)
      domUpdates.displayRequestSubmittedMessage()
    })
  setResetTimer();
  domUpdates.displayDestinationCards(destinations.destinations);
}

function updatePendingTrip(trip) {
  destinations.destinations.forEach(destination => {
    if (destination.id === trip.destinationID) {
      trip['image'] = destination.image;
      trip['alt'] = destination.alt;
      trip['destination'] = destination.destination;
    }
  });
}

function setResetTimer() {
  setTimeout(function() {domUpdates.clearForm() }, 7000);
}
