import Traveler from './traveler.js';//do i need this here?
import Trip from './trip.js';
import domUpdates from './domUpdates.js'
import { fetchAllData, fetchSingleTravelerData, addNewTrip, addNewDestination } from './networkRequests'

//change traveler later based on the log in page

//*******MEDIA QUERIES********//
const getEstimateButton = document.getElementById('getTripEstimate');
const submitRequestButton = document.getElementById('submitRequest');
const userGreeting = document.getElementById('userGreeting');

let travelers, trips, destinations, singleTraveler, currentTraveler;

//*******Event Listeners******//
getEstimateButton.addEventListener('click', calculateTripEstimate)
submitRequestButton.addEventListener('click', submitNewTripRequest)

window.onload = onPageLoad();


function onPageLoad() {
  fetchAllData(25)
  .then(allData => {
    travelers = allData.travelersData;
    trips = allData.tripsData;
    destinations = allData.destinationsData;
    singleTraveler = allData.singleTravelerData;
    combineDataSets(trips, destinations);
    currentTraveler = new Traveler(singleTraveler)
    console.log(32, currentTraveler)
    domUpdates.greetUser(currentTraveler)
    //invoke datamodel to update trips
    domUpdates.displayTrips(currentTraveler)
  })
  }



function combineDataSets(tripData, destinationData) {
  const result = tripData.trips.map(trip => {
    destinationData.destinations.forEach(destination => {
      if (trip.destinationID === destination.id) {
        trip['estimatedLodgingCostPerDay'] = destination.estimatedLodgingCostPerDay;
        trip['estimatedFlightCostPerPerson'] = destination.estimatedFlightCostPerPerson;
      }
    })
    return trip;
  })
  trips = result;
}


// filterMyTrips(trips) {//move to stripts
//   const myTrips = trips.filter(trip => trip.userID === this.id)
//   this.myTrips.push(...myTrips)
//   this.sortMyTrips(this.myTrips)
// }
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
