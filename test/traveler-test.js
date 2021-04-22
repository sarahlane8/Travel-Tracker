import { expect } from 'chai';
import { travelers } from './testData.js'//CHANGE THIS ONE!
import { trips } from './testData.js'
import Traveler from '../src/traveler.js'

let traveler;
let myTrips;

describe('Traveler', () => {
  beforeEach(() => {
    traveler = new Traveler(travelers[0]);
    myTrips = trips.filter(trip => trip.userID === traveler.id);
    traveler.myTrips = myTrips;
  })

  it('should have an object of my data', () => {
    expect(traveler.myTravelInfo).to.be.an('object');
  })

  it('should have a property of ID', () => {
    expect(traveler.id).to.equal(15);
  })

  it('should have a property of name', () => {
    expect(traveler.name).to.equal("Monica Gellar");
  })

  it('should have a property of travelerType', () => {
    expect(traveler.travelerType).to.equal('relaxer');
  })

  it('should return a list of trips based on a userID', () => {
    expect(traveler.myTrips.length).to.equal(4);
  })

  it('should not have trips if a traveler has never booked a trip', () => {
    const traveler4 = new Traveler(travelers[8])
    myTrips = trips.filter(trip => trip.userID === traveler4.id);
    traveler4.sortMyTrips(myTrips)
    expect(traveler4.myTrips).to.deep.equal([])
  })

  it('should sort my trips by past, present, future, and pending trips', () => {
    traveler.sortMyTrips(traveler.myTrips)
    expect(traveler.myCurrentTrip).to.deep.equal(trips[0]);
    expect(traveler.myPastTrips.length).to.equal(2);
    expect(traveler.myFutureTrips.length).to.equal(1);
    expect(traveler.myPendingTrips.length).to.equal(2);
  })

  it('should calculate how much a traveler has spend on their trips in the past year', () => {
    expect(traveler.calculateSpentOnTripsThisYear('2021/04/22')).to.equal(24431)
  })

  it('should calculate cost in last year for different travelers', () => {
    const traveler3 = new Traveler(travelers[6])
    myTrips = trips.filter(trip => trip.userID === traveler3.id);
    traveler3.sortMyTrips(myTrips)
    expect(traveler3.calculateSpentOnTripsThisYear('2021/04/22')).to.equal(15906)
  })

  it('should return a string if a traveler hasn\'t traveled in the last 12 months', () => {
    const traveler2 = new Traveler(travelers[9])
    myTrips = trips.filter(trip => trip.userID === traveler2.id);
    traveler2.sortMyTrips(myTrips)
    traveler2.calculateSpentOnTripsThisYear('2021/04/22')
    expect(traveler2.calculateSpentOnTripsThisYear('2021/04/22'))
      .to.equal("You haven't traveled with us recently! We'd love to help you book your next trip!")
  })

});
