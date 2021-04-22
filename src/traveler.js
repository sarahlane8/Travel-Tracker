// import Trip from '..src/Trip.js'//*************
const dayjs = require('dayjs')
dayjs().format()
const isBetween = require('dayjs/plugin/isBetween');
const isBefore = require('dayjs/plugin/isBefore');
dayjs.extend(isBetween);
dayjs.extend(isBefore);


class Traveler {
  constructor(travelerInfo) {//info for 1 person  filter trips before passing them through?
    this.myTravelInfo = travelerInfo;//do I need this property?
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.myTrips;//do I need this?  list of all trips for 1 travler, take it out of constructor
    this.myCurrentTrip;
    this.myPastTrips= [];
    this.myFutureTrips = [];
    this.myPendingTrips = [];
  }

  sortMyTrips(myTrips) {//all 4 trips for this user ID
    this.myTrips = myTrips;
    const todaysDate = dayjs().format('YYYY/MM/DD')//gives me 2021/04/22
    this.findMyCurrentTrip(todaysDate);
    this.findMyPastTrips(todaysDate);
    this.findMyFutureTrips(todaysDate);
    this.findMyPendingTrips();
  }

  findMyCurrentTrip(date) {
    this.myTrips.forEach(trip => {
      // let startDate = trip.date;
      let endDate = dayjs(trip.date).add(trip.duration, 'day').format('YYYY/MM/DD')
      if (dayjs(date).isBetween(trip.date, endDate, null, [])) {//includes start and end date
        this.myCurrentTrip = trip;
      }
    })
  }

  findMyPastTrips(date) {
    this.myTrips.forEach(trip => {
      let endDate = dayjs(trip.date).add(trip.duration, 'day').format('YYYY/MM/DD')
      if (endDate.isBefore(date)) {
        console.log(true)
      } else {
        console.log(false)
      }
    })
  }

  findMyFutureTrips(date) {

  }

  findMyPendingTrips() {
    const pendingTrips = this.myTrips.filter(trip => trip.status ==='pending');
    this.myPendingTrips = pendingTrips;
  }

  calculateSpentOnTripsThisYear() {
    //iterate through the trips in my trips, and for each trip calcule duration * cost per day* flights * number of people * 10%
    
  }

}






export default Traveler;
