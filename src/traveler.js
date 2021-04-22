class Traveler {
  constructor(travelerInfo, trips) {//info for 1 person  filter trips before passing them through?
    this.myTravelInfo = travelerInfo;//do I need this property?
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.myTrips = [];//do I need this?  list of all trips for 1 travler, take it out of constructor
    //start testing from line 7 on
    this.myCurrentTrip;
    this.myPastTrips = [];
    this.myFutureTrips = [];
    this.myPendingTrips = [];
  }
}

filterMyTrips() {
  //
}

sortMyTrips() {
  //is this already sorted
  // sort trips by status and date, push them to appropriate properties
}

calculateTotalCostThisYear() {//is this per calendar year?
//iterate over my trips, need to access the destinations (for cost per day and flights ) and trips array (for number of travelers, duration, and need to match destination ID to destinationsID)
}

calculateCostOfTrip() {
  
}
//method to filter all trips by 1 user to display all their trips (regardless of trip status)
//method to calculate total cost spent on trips + 10% of that total
//method to calculate cost of a proposed trip + 10


export default Traveler;



class Trip {
  constructor(tripData) {//1 trip?? or all trips?
    this.tripData = tripsData//do I need this?
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;//use day js here at all?
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }
}

// consider using dayJS to see set an end date from the start date based on duration
// see if the trip is currently going on
