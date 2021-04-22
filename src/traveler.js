// import Trip from '..src/Trip.js'//*************
const dayjs = require('dayjs')
dayjs().format()
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);


class Traveler {
  constructor(travelerInfo) {//info for 1 person  filter trips before passing them through?
    this.myTravelInfo = travelerInfo;//do I need this property?
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.myTrips;
    this.myCurrentTrip;
    this.myPastTrips = [];
    this.myFutureTrips = [];
    this.myPendingTrips = [];
    this.myTripsInLastYear = [];
  }

  sortMyTrips(myTrips) {
    this.myTrips = myTrips;
    const todaysDate = dayjs().format('YYYY/MM/DD')
    this.sortByType(todaysDate);
    this.findPendingTrips();
  }

  sortByType(date) {
    this.myTrips.forEach(trip => {
      let endDate = dayjs(trip.date).add(trip.duration, 'day').format('YYYY/MM/DD')
      if (dayjs(date).isBetween(trip.date, endDate, null, [])) {//includes start and end date
        this.myCurrentTrip = trip;
      } else if (dayjs(date).isBefore(trip.date)) {
          this.myFutureTrips.push(trip)
      } else if (dayjs(endDate).isBefore(date)) {
        this.myPastTrips.push(trip)
      }
    })
  }

  findPendingTrips() {
    const pendingTrips = this.myTrips.filter(trip => trip.status === 'pending');
    this.myPendingTrips = pendingTrips;
  }

  findTripsInLastYear(todaysDate) {
    const oneYearAgo = dayjs(todaysDate).subtract(1, 'year').format('YYYY/MM/DD')
    this.myTrips.forEach(trip => {
      if (dayjs(trip.date).isBetween(oneYearAgo, todaysDate, null, [])) {
        this.myTripsInLastYear.push(trip)
      }
    })
  }

  calculateSpentOnTripsThisYear(todaysDate) {
    this.findTripsInLastYear(todaysDate);
    if (!this.myTripsInLastYear.length) {
      return "You haven't traveled with us recently! We'd love to help you book your next trip!"
    } else {
      const cost = this.myTripsInLastYear.reduce((sum, trip) => {
        sum += (trip.travelers * trip.duration * trip.estimatedLodgingCostPerDay)
                + (trip.travelers * trip.estimatedFlightCostPerPerson);
        return sum;
      }, 0)
      const totalCost = (cost * 0.1) + cost;
      return totalCost;
    }
  }

}


export default Traveler;
