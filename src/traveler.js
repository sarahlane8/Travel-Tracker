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
//date = 2021/04/22
  findMyCurrentTrip(date) {
    const currentTrips = this.myTrips.forEach(trip => {
      let startDate = trip.date;
      let endDate = dayjs(startDate).add(trip.duration, 'day').format('YYYY/MM/DD')
      if (dayjs(date).isBetween(startDate, endDate, null, [])) {
        this.myCurrentTrip = trip;
      }
    })
    console.log(this.myCurrentTrip)
  }
// (({date}) => dayjs(date).isBetween(weekBeginningDate, weekEndingDate, null, '[]'));




//   var isBetween = require('dayjs/plugin/isBetween')
// dayjs.extend(isBetween)
//
// // To use `year` granularity pass the third parameter
// dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25'), 'year')
//
// // Parameter 4 is a string with two characters; '[' means inclusive, '(' exclusive
// // '()' excludes start and end date (default)
// // '[]' includes start and end date
// // '[)' includes the start date but excludes the stop
// dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30', null, '[)')

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
