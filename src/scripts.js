import Traveler from './traveler.js';//do i need this here?
import Trip from './trip.js';
import domUpdates from './domUpdates.js'
import { fetchAllData, fetchSingleTravelerData, addNewTrip, addNewDestination } from './networkRequests'

//change traveler later based on the log in page

//*******MEDIA QUERIES********//
const getEstimateButton = document.querySelector('.get-trip-estimate');
const submitRequestButton = document.querySelector('.submit-request');
const searchbar = document.getElementById('destinationInput')
let travelers, trips, destinations, singleTraveler, currentTraveler;

//*******Event Listeners******//
getEstimateButton.addEventListener('click', calculateTripEstimate)
submitRequestButton.addEventListener('click', submitNewTripRequest)
searchbar.addEventListener('keyup', filterDestinationsBySearch)

window.onload = onPageLoad();


function onPageLoad() {
  fetchAllData(25)
  .then(allData => {
    trips = allData.tripsData;
    destinations = allData.destinationsData;
    singleTraveler = allData.singleTravelerData;
    combineDataSets(trips, destinations);
    currentTraveler = new Traveler(singleTraveler)
    filterTripsByTraveler(singleTraveler.id)
    domUpdates.greetUser(currentTraveler)
    domUpdates.displayTrips(currentTraveler)
    domUpdates.displayTotalSpent(currentTraveler)
    domUpdates.displayDestinationCards(destinations.destinations)
  })
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


function filterTripsByTraveler(travelerID) {//move to stripts
  const myTrips = trips.filter(trip => trip.userID === travelerID)
  currentTraveler.sortMyTrips(myTrips)
  // console.log(54, currentTraveler)
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

function calculateTripEstimate() {
const startDate = document.getElementById('dateInput').value;
const duration = document.getElementById('durationInput').value;
const numTravelers = document.getElementById('travelersInput').value;
const destination = document.getElementById('destinationInput').value;

  //invoke estimate trip cost from trip class
  //invoke domUpdates to display price from whatever estimate returns




document.getElementById('tripEstimate').innerText = 'hello';
}

function submitNewTripRequest() {
  console.log('hello')
  //make new instance of trips
  //invoke post request from networkRequests
  //invoke something from dom Updates to say you're request has been submitted!
  //update dom to show new trip in my pending trip requests
}
