import Traveler from './traveler';//do i need this here?
// import Trip from './trip';
// import domUpdates from './domUpdates.js'
import { fetchAllData, fetchSingleTravelerData, addNewTrip, addNewDestination } from './networkRequests.js'



//*******MEDIA QUERIES********//

let travelers, trips, destinations;

//*******Event Listeners******//

window.onload = onPageLoad();


function onPageLoad() {
  fetchAllData()
  .then(allData => {
    travelers = allData.travelersData;
    trips = allData.tripsData;
    destinations = allData.destinationsData;
    combineDataSets(trips, destinations);
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
  travelers = result;
}


// filterMyTrips(trips) {//move to stripts
//   const myTrips = trips.filter(trip => trip.userID === this.id)
//   this.myTrips.push(...myTrips)
//   this.sortMyTrips(this.myTrips)
// }
