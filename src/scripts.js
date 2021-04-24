import Traveler from './traveler.js';//do i need this here?
import Trip from './trip.js';
import domUpdates from './domUpdates.js'
import { fetchAllData, fetchSingleTravelerData, addNewTrip, addNewDestination } from './networkRequests'

//change traveler later based on the log in page

//*******MEDIA QUERIES********//
const getEstimateButton = document.getElementById('getTripEstimate');
const submitRequestButton = document.getElementById('submitRequest');
// const userGreeting = document.getElementById('userGreeting');
// const userPastTrips = document.getElementById('userPastTrips');
// const userPresentTrip = document.getElementById('userPresentTrip');
// // const userFutureTrips = document.getElementById('userUpcomingTrips');
// const userPendingTrips = document.getElementById('userPendingTrips');
let travelers, trips, destinations, singleTraveler, currentTraveler;

//*******Event Listeners******//
getEstimateButton.addEventListener('click', calculateTripEstimate)
submitRequestButton.addEventListener('click', submitNewTripRequest)

window.onload = onPageLoad();


function onPageLoad() {
  fetchAllData(25)
  .then(allData => {
    trips = allData.tripsData;
    destinations = allData.destinationsData;
    singleTraveler = allData.singleTravelerData;
    combineDataSets(trips, destinations);
    currentTraveler = new Traveler(singleTraveler)//new instance of traveler
    filterTripsByTraveler(singleTraveler.id)
    domUpdates.greetUser(currentTraveler)
    // console.log(25, currentTraveler.myFutureTrips)
    domUpdates.displayTrips(currentTraveler)
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

function calculateTripEstimate() {
  console.log('hello')
  //invoke estimate trip cost from trip class
  //invoke domUpdates to display price from whatever estimate returns
}

function submitNewTripRequest() {
  console.log('hello')
  //make new instance of trips
  //invoke post request from networkRequests
  //invoke something from dom Updates to say you're request has been submitted!
  //update dom to show new trip in my pending trip requests
}
