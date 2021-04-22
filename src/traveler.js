// import Trip from '..src/Trip.js'//*************
var dayjs = require('dayjs')
const isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

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
    // console.log(this.pendingTrips)
    const todaysDate = dayjs().format('YYYY/MM/DD')//gives me 2021/04/22
    this.findMyCurrentTrip(todaysDate);
    this.findMyPastTrips(todaysDate);
    this.findMyFutureTrips(todaysDate);
    this.findMyPendingTrips();
  }

  findMyCurrentTrip(date) {

  }

  findMyPastTrips(date) {

  }

  findMyFutureTrips(date) {

  }

  findMyPendingTrips() {
    const pendingTrips = this.myTrips.filter(trip => trip.status ==='pending');
    this.myPendingTrips = pendingTrips;
  }



//so for each trip, i need to compare it against today's date and the duration
    // const now2 = dayjs("2019-09-16").format('MM/DD/YYYY')
    // console.log(now2)
    // const now = dayjs('2019/09/16').format(YYYY/MM/DD)
  }






export default Traveler;
