// import Trip from '..src/Trip.js'//*************

class Traveler {
  constructor(travelerInfo) {//info for 1 person  filter trips before passing them through?
    this.myTravelInfo = travelerInfo;//do I need this property?
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.myTrips = [];//do I need this?  list of all trips for 1 travler, take it out of constructor

  }

  filterMyTrips(trips) {
    const myTrips = trips.filter(trip => trip.userID === this.id)
    this.myTrips.push(...myTrips)
  }



}



export default Traveler;
