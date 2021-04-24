import Traveler from './traveler.js';//do i need this here?
import Trip from './trip.js';
import domUpdates from './domUpdates.js'
<<<<<<< HEAD
import { fetchAllData, fetchSingleTravelerData, addNewTrip, addNewDestination } from './networkRequests'

//change traveler later based on the log in page

//*******MEDIA QUERIES********//

let travelers, trips, destinations, currentTraveler;
=======
import { fetchAllData, fetchSingleTravelerData, addNewTrip, addNewDestination } from './networkRequests.js'



//*******MEDIA QUERIES********//

let travelers, trips, destinations;
>>>>>>> main

//*******Event Listeners******//

window.onload = onPageLoad();


function onPageLoad() {
<<<<<<< HEAD
  fetchAllData(25)
  .then(allData => {
    // console.log(allData)
    travelers = allData.travelersData;
    trips = allData.tripsData;
    destinations = allData.destinationsData;
    currentTraveler = allData.singleTravelerData;
    combineDataSets(trips, destinations);
  })
  // fetchSingleTravelerData(25)
  // .then(singleTravelerData => {
  //   console.log(28, singleTravelerData)
  //   traveler = new Traveler(response)
  }
  // let travelerInfo = (fetchSingleTravelerData(25));
  // console.log(27, travelerInfo)
  // traveler = new Traveler(travelerInfo);
  // console.log(travelerInfo.id)


=======
  fetchAllData()
  .then(allData => {
    travelers = allData.travelersData;
    trips = allData.tripsData;
    destinations = allData.destinationsData;
    combineDataSets(trips, destinations);
  })
}
>>>>>>> main

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
  travelers = result;
}


// filterMyTrips(trips) {//move to stripts
//   const myTrips = trips.filter(trip => trip.userID === this.id)
//   this.myTrips.push(...myTrips)
//   this.sortMyTrips(this.myTrips)
// }
